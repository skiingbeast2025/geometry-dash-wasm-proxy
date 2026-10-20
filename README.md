geometry dash but on the web, ported by bog/aukak
all credits go to him in general.

these are the game files and nothing is required. the autoloader is inside the index.html

### Features & Fixes:
- **Online Levels & Account Features**: Connected to Geometry Dash servers through a dedicated CORS proxy (`https://api.sngdu.com/` with failover to `https://api.ixl.college/`), allowing searching, downloading, and playing online levels.
- **Music Loader (`music-loader.js`)**: Standalone browser audio layer patch to handle automatic retries for custom song downloads (Newgrounds) and prevent audio playback stalls.
