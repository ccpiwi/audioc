AudioC JavaScript Library.

amrnb.js Ported opencore-amr-0.1.6.tar.gz using emscripten tool.

Build:
1. npm run build
2. cd build
3. sh build.sh

Usage:
* `AudioC()`: Pure front-end decoding and playback of audio without server support. The mainstream audio file formats supported by default include MP3, WAV, OGG, and AMR. Different browsers offer varying levels of support for these four formats, with MP3 providing the best compatibility.
  * Usage: 
    ```js
    var audio = new AudioC();
    audio.loadBlob(blob); // return Promise
    audio.loadUrl(url); // return Promise
    
    var totalTime = audio.getTotalTime();
    var currentTime = audio.getCurrentTime();

    audio.setGainValue(value); // 0 ~ 1.5
    audio.setPlaybackRate(pr); // 0.5 1 1.5 2

    audio.isPaused();

    audio.play();
    audio.pause();

    audio.skip(offset);

    audio.onEnded(callback);
    ```

## 💖 Support & Donations


| Coin | Network | Address |
| :--- | :--- | :--- |
| **BTC** | Bitcoin (Taproot) | `bc1pyzg434qw9cpljdjm2rt9fdjqqp4jq0hvums62u8q9hkp36xwnhhswdt2zz` |
| **ETH / USDT / USDC** | Ethereum (ERC20) | `0x18e92ffcc9e322cb6b65c393932ab4ca36518980` <br>*(Mainnet, high gas fees)* |
| **ETH / USDT / USDC** | Polygon (POL) | `0x18e92ffcc9e322cb6b65c393932ab4ca36518980` <br>*(Recommended for small donations, ultra-low fees)* |
| **USDT** | TRON (TRC20) | `TJ5vZ4rBhgzQzvWHgjZRyhVoaKvkz7hUzt` <br>*(Supports Exchanges & TronLink)* |
| **SOL / USDT / USDC** | Solana | `GnXfjr5Kq4tpijwfeMbtnqicLFptXXP5rV79axB1M6F5` |
