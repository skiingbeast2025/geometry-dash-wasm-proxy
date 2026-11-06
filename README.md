geometry dash but on the web, ported by bog/aukak
all credits go to him in general.

these are the game files and nothing is required. the autoloader is inside the index.html

### Features & Fixes:
- **`libcurl.js` (Wisp Protocol) Tunneling**: Includes vendored WebAssembly `libcurl.js` with Wisp multiplexed WebSocket tunneling (`wss://wisp.mercurywork.shop/`, `wss://anura.pro/`, `wss://definitelyscience.com/wisp/`). Encrypts and tunnels audio streams (`audio.ngfiles.com`) over binary WebSocket TLS frames, bypassing domain blocks and keyword filtering on school or restricted networks.
- **Multi-Proxy Pool with Automatic Failover**: Connected to Geometry Dash servers through a primary Cloudflare Edge Worker proxy (`https://boomlings.ivan-makarov12341.workers.dev/?url=`) with automatic failover to fallback proxies (`https://api.sngdu.com/`, `https://api.ixl.college/`), enabling searching, downloading, and playing online levels with automatic rate-limit recovery.
- **Custom Proxy & Wisp Configuration**:
  - `?wisp=<url>`: Custom Wisp WebSocket endpoint (saved to `localStorage.getItem("gdWispUrl")`).
  - `?proxy=<url>`: Custom HTTP proxy base (saved to `localStorage.getItem("gdProxyBase")`).
- **Music Loader (`music-loader.js`)**: Standalone browser audio layer patch to handle automatic retries for custom song downloads (Newgrounds) and prevent audio playback stalls.
- **Save System & Progress Persistence**: Dual-layer persistence to IndexedDB (`gdwasm_saves`) and synchronous `localStorage` (base64) with 20s periodic background autosave, unload listeners (`beforeunload`, `pagehide`, `blur`, `Escape`), manual "Save Game" button with toast notification, and full Save Export/Import support for Chromebooks.
- **Account Login & Sign-Up Dialog**: In-browser modal to log in or register Geometry Dash accounts directly with RobTop's servers through the proxy/Wisp tunnel, saving account credentials into `CCGameManager.dat`.
- **Low-Memory & Chromebook Adaptive Resolution**: Automatically scales the internal WebGL canvas to 1280x720 on devices with <= 4 GB RAM (`navigator.deviceMemory <= 4`) or when `?quality=low` is specified, maximizing FPS and eliminating out-of-memory crashes.
- **Real-Time Performance Diagnostics (`?perf`)**: Pass `?perf` in the URL to view real-time p95 frame times, input queue latency, and WASM heap consumption.
- **Local Server (`server.py`) & Cloudflare Pages (`functions/__proxy`)**: Included local Python server (`python3 server.py [port]`) and Cloudflare Pages function for offline and custom deployments.
