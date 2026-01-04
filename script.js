// Backend endpoint used to send network data 
const SERVER_URL = "/analisar";

// --- WIFI SCAN BUTTON ---
async function startHack() {
    // Select UI elements
    const btnText = document.querySelector('.btn-internal-text');
    const tagline = document.querySelector('.tagline');
    
    // Reset color in case it was changed by a previous error
    tagline.style.color = "#00ff7f"; 
    
    // Scan start
    btnText.innerText = "SCANNING...";
    tagline.innerText = "ESTABLISHING HANDSHAKE...";

    try {
        // Measure basic network metrics
        const ping = await measurePing();
        const speedMbps = await measureSpeed();
        
        // Display preliminary technical data before geo analysis
        tagline.innerText = `PING: ${ping}ms | SPEED: ${speedMbps} Mbps`;
        
        // Send data to backend for further processing
        await getGeoData(ping, speedMbps);
    } catch (e) {
        // Fallback UI state in case of unexpected failure
        tagline.innerText = "HARDWARE FAILURE.";
        btnText.innerText = "WIFI SCAN";
    }
}

// --- PING MEASUREMENT ---
async function measurePing() {
    const start = Date.now();
    try {
        // Lightweight fetch request used to estimate latency
        await fetch("https://www.google.com/favicon.ico", { 
            mode: 'no-cors', 
            cache: 'no-cache' 
        });
        return Date.now() - start;
    } catch (e) { 
        // High fallback value if request fails
        return "999"; 
    }
}

// --- DOWNLOAD SPEED ESTIMATION ---
async function measureSpeed() {
    const startTime = Date.now();
    try {
        // Download a small image to estimate download speed
        const response = await fetch(
            "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg", 
            { cache: 'no-cache' }
        );
        await response.blob();
        
        // Calculate elapsed time in seconds
        const duration = (Date.now() - startTime) / 1000;
        
        // Approximate Mbps calculation (image size / time)
        return ((130000 * 8 / duration) / (1024 * 1024)).toFixed(2);
    } catch (e) { 
        // Fallback value if speed test fails
        return "0.00"; 
    }
}

// --- SEND DATA TO BACKEND AND HANDLE RESPONSE ---
async function getGeoData(ping, speed) {
    const tagline = document.querySelector('.tagline');
    const btnText = document.querySelector('.btn-internal-text');

    try {
        // Send measured data to backend API
        const response = await fetch(SERVER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ping, speed }) 
        });

        // Parse backend response
        const data = await response.json();

        // Display generated output
        if (data.text) {
            typeWriter(data.text);
        }
    } catch (error) {
        // Server communication error handling
        console.error("Server error:", error);
        tagline.innerText = "UPLINK FAILED: SERVER OFFLINE.";
    } finally {
        // Restore button text after scan completes
        btnText.innerText = "WIFI SCAN";
    }
}

// --- TYPEWRITER TEXT EFFECT ---
function typeWriter(text) {
    const tagline = document.querySelector('.tagline');
    tagline.innerText = "";
    let i = 0;

    // Recursive typing function
    function type() {
        if (i < text.length) {
            tagline.innerText += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}
