<figure><img src=".gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>

「魔然」是基於自然碼（雙拼和輔助碼）的輸入方案，使用 Rime 實現。相比其他音形碼，本方案具有如下特點：

* 具有**傳承字**和**簡化字**兩種字形支持。
* 具有**多種輸入方式**：輔助碼混輸+固定簡碼方式（[魔然](./usage/)）、輔助碼混輸方式（[魔然·整句](./schemas/zhengju/)）、四碼碼表方式（[魔然·字詞](./schemas/zici/)）、輔助碼篩選方式（[魔然·輔篩](./schemas/fushai/)）等。
* **收錄海量（8 萬餘）單字**，可滿足幾乎任何非專業用字需求，更收錄兩分等[多種輔助輸入手段](./usage/reverse-lookup.md)可輸入全 Unicode 字集約 10 萬漢字。
* **跨平臺**：基於[中州韻輸入法引擎](https://rime.im/)實現，可運行於目前的所有桌面和智能手機上。
* **自由開放**：以開源協議公佈全部碼表、代碼、原始數據和拆分數據，高度可定製，便於二次開發。

***

這本說明書的目標是完整地描述本方案，包括打字方法和技術細節。讀者無需完整閱讀本文檔，只需從目錄中選取感興趣的話題即可。

您正在閱讀的說明書描述的是於 2024 年 6 月 18 日發佈的 v2.0.2 版本，但部分功能來自更新的尚未發佈的版本。

請在 [GitHub 的 Issue 區](https://github.com/rimeinn/rime-moran/issues) 報告本文檔錯漏，至爲感謝！

→ 初學者可以首先閱讀 GitHub Wiki 上的[一站式教程](https://github.com/rimeinn/rime-moran/wiki/%E6%95%99%E7%A8%8B)。

***

* [官方 GitHub 倉庫](https://github.com/rimeinn/rime-moran/)
* [魔然查字](https://www.zrmfans.cn/moran/) 在線查詢拆分和編碼
