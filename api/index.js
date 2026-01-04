// Import required dependencies
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Initialize Express application
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// --- MAIN ANALYSIS ENDPOINT ---
app.post('/analisar', async (req, res) => {
    try {
        // Extract network metrics sent from frontend
        const { ping, speed } = req.body;
        
        // Capture client operating system from User-Agent header
        const userAgent = req.headers['user-agent'];
        const os = userAgent.includes('Windows') ? 'Windows Terminal' : 
                   userAgent.includes('Mac') ? 'MacOS Kernel' : 'Linux/Mobile Interface';

        // Fetch public IP geolocation data
        const geoResponse = await axios.get('http://ip-api.com/json/');
        const geo = geoResponse.data;

        // Determine signal quality based on latency
        const signalBar = ping < 100 ? "|||||||||| [EXCELLENT]" : "|||||..... [DEGRADED]";
        
        // Generate timestamp in 24h format
        const timestamp = new Date().toLocaleString('en-US', { hour12: false });

        // Build terminal-style analysis report
        const report = `[ANALYSIS COMPLETE - ${timestamp}]
---------------------------------------------------------------------------
> CONNECTION_DATA            > NETWORK_IDENTITY           > SECURITY_STATUS
SIGNAL: ${signalBar.split(' ')[0]}      CITY: ${geo.city}          ENCRYPTION: AES-256
LATENCY: ${ping}ms               ISP: ${geo.isp.substring(0,12)}...     STATUS: ${speed > 10 ? 'STABLE' : 'VULN'}
OS_INT: Mobile/LX            IP: ${geo.query}          THREAT: ${speed > 10 ? 'LOW' : 'HIGH'}
---------------------------------------------------------------------------`;

        // Report back to frontend
        res.json({ text: report });

    } catch (error) {
        // Log server-side errors
        console.error("Server Error:", error);
        
        // Send failure message to client
        res.status(500).json({ text: "UPLINK ERROR: TARGET LOST." });
    }
});

// Start backend server
// Vercel Serverless Functions
const PORT = process.env.PORT || 3000;

// Vercel (local testing)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`🚀 Local Server active on port ${PORT}`));
}

module.exports = app;