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
- **Parallel Chunk Assembly & Cache API Persistence**: Automatically parallelizes split `.wasm` and `.data` chunk downloading, caching the compiled payloads in `gdwasm-assets-v2` for instant subsequent reloads.
