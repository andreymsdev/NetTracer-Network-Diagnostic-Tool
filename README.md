# NET TRACER | Network Analysis 
---
### 🔗 [LIVE DEMO - ACCESS HERE](https://net-tracer-network-diagnostic-tool.vercel.app/)
---
### Developed for the "Hacks for Hackers" Hackathon (Jan 2026)
---

![NetTracer Interface](images/nettracer.png)

## Overview
**NetTracer** is a professional diagnostic dashboard designed for developers and hackers who need to monitor their uplink status with precision. Moving away from traditional, cluttered tools, NetTracer provides an immersive terminal experience that fetches real-time geolocation, ISP data, and latency metrics in a clean, high-performance interface.

## Features
- **Real-time Uplink Scanning:** Instant measurement of latency and connection stability.
- **Geographical Intelligence:** Fetches precise City, Country, and ISP data via secure API integration.
- **Professional Terminal UI:** High-fidelity interface featuring interactive animations and a typewriter-effect data stream.
- **Security Status Analysis:** Heuristic check to determine if the connection is **STABLE** or **VULNERABLE** based on network performance.
- **Responsive Layout:** Triple-column data architecture optimized for both Desktop and Mobile devices.

## Tech Stack
- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3 (Custom Grid & Glassmorphism).
- **Backend:** Node.js & Express (Deployed via Vercel Serverless Functions).
- **APIs:** Axios for external metadata fetching from Geolocation services.
- **Deployment:** Vercel for high-availability hosting.

## Challenges & Solutions

* **The Async Typewriter Logic:**
    * **Challenge:** Rendering real-time data from a backend API using a character-by-character typewriter effect was causing synchronization issues.
    * **Solution:** I implemented an asynchronous queue system in JavaScript that waits for the API response to be fully resolved before triggering the terminal animation.
* **Serverless Migration:**
    * **Challenge:** Moving from a local Node.js environment to Vercel Serverless Functions required a complete restructuring of the backend architecture.
    * **Solution:** I refactored the Express server into a modular API structure (`/api/index.js`) and configured custom rewrites via `vercel.json`.
* **Responsive Terminal Design:**
    * **Challenge:** Fitting a complex, triple-column terminal report on small mobile screens without losing readability.
    * **Solution:** I utilized CSS Flexbox and Grid with conditional media queries to stack the data columns vertically on mobile.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/andreymsdev/NetTracer.git](https://github.com/andreymsdev/NetTracer.git)

2. ```bash
    npm install
    ```
3. Run locally:
    ```bash
    node api/index.js
    ```
### Hackathon Submission

This project was built solo for Hacks for Hackers. It aims to empower the hacker community by providing a tool that combines technical utility with a professional, streamlined aesthetic.
