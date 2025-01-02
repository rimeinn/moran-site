---
title: 安裝
order: 1
---

# 安裝

### 使用「東風破」下載安裝或更新 <Badge type="tip">推薦</Badge>

本方案兼容 [東風破](https://github.com/rime/plum/) (Plum)，使用如下命令即可直接安裝並更新：

```bash
bash rime-install rimeinn/rime-moran@trad  # 傳承字版
bash rime-install rimeinn/rime-moran@simp  # 簡化字版
```

### 使用 Git 下載安裝或更新

若您主要使用魔然方案，且希望使用 Git 管理更新，可使用 rimeinn/rime-moran 倉庫的 `trad` 和 `simp` 分支。`master` 分支僅作爲方案「源代碼」，不建議追蹤。

| 分支名 | 說明             |
|--------|------------------|
| `trad` | 傳承字版完整配置 |
| `simp` | 簡化字版完整配置 |

### 穩定版

穩定版經過較多測試，適合長期使用。若計劃做大幅修改，或計劃長期不更新，建議選用穩定版。

→ [穩定版發佈頁面](https://github.com/rimeinn/rime-moran/releases)

### 最新配置包直鏈下載

::: tip
該直鏈等價於直接從 GitHub Actions 下載最新 master 分支產物，因此總是最新的。

但該方法**不等於**直接下載 master 分支代碼（倉庫頁面上點 Download）：master 分支中保存的是繁體版數據。
:::


#### 傳承字版

| 下載類型         | 下載鏈接                                                                                    | 文件大小         |
| ------------ | --------------------------------------------------------------------------------------- | ------------ |
| 完整配置包（適合新用戶） | ⬇️ [點擊下載](https://nightly.link/rimeinn/rime-moran/workflows/main/main/Trad-FullPack.zip)  | ZIP 格式，约 40M |
| 僅詞庫（適合老用戶更新） | ⬇️ [點擊下載](https://nightly.link/rimeinn/rime-moran/workflows/main/main/Trad-DictsOnly.zip) | ZIP 格式，约 40M |

#### 簡化字版

| 下載類型         | 下載鏈接                                                                                    | 文件大小         |
| ------------ | --------------------------------------------------------------------------------------- | ------------ |
| 完整配置包（適合新用戶） | [⬇️ 點擊下載](https://nightly.link/rimeinn/rime-moran/workflows/main/main/Simp-FullPack.zip)  | ZIP 格式，约 40M |
| 僅詞庫（適合老用戶更新） | [⬇️ 點擊下載](https://nightly.link/rimeinn/rime-moran/workflows/main/main/Simp-DictsOnly.zip) | ZIP 格式，约 40M |

## 桌面平臺

### macOS

與 [鼠鬚管](https://rime.im/download/) (Squirrel) 和 [fcitx5-macos](https://github.com/fcitx-contrib/fcitx5-macos/) 兼容。

* 鼠鬚管用戶目錄： `~/Library/Rime`
* fcitx5-macos 用戶目錄： `~/.local/share/fcitx5/rime`

### Windows

與 [小狼毫 (Weasel)](https://rime.im/download/) 兼容。

### Linux

與 ibus-rime、fcitx-rime 和 fcitx5-rime 兼容，請根據實際使用的輸入法平臺選擇合適的 Rime 前端。

由於「魔然」和「魔然·輔篩」方案的核心功能由 Lua 實作，因此您需要安裝 librime-lua 插件。如果不安裝，則無法使用這兩個方案，但您可以使用不依賴於 Lua 的「魔然·整句」和「魔然·字詞」。

依賴的版本信息：

* `librime` >= 1.8.5
* `librime-lua` >= 2023 年 8 月
* `librime-octagram` (可選)

部分已知可用的發行版及其插件名：

| 發行版               | librime-lua 插件對應包      | librime-octagram 插件對應包 |
|---------------------|-----------------------------|-----------------------------|
| AOSC OS             | ✅ 已內置於 librime         | ✅ 已內置於 librime         |
| Arch Linux          | ✅ 已內置於 librime         | ✅ 已內置於 librime         |
| Debian >= 13 "trixie"| `librime-plugin-lua`       | `librime-plugin-octagram`   |
| Ubuntu >= 24.04     | `librime-plugin-lua`       | `librime-plugin-octagram`   |
| openSUSE Tumbleweed | `librime-lua`              | ❌ 無打包                    |
| Fedora = 40         | `librime-lua`              | ❌ 無打包                    |
| Fedora >= 41        | `librime-lua`              | ❌ 無打包                    |

其他發行版請自行查閱相關信息。

## 移動平臺

### Android

與 [fcitx5-android](https://fcitx5-android.github.io/) 和 [同文輸入法](https://github.com/osfans/trime/blob/develop/README_sc.md) 兼容。

已知與「中文輸入法」（同文無障礙版）不兼容。

### iOS

與 [iRime](https://apps.apple.com/us/app/irime%E8%BE%93%E5%85%A5%E6%B3%95-%E5%B0%8F%E9%B9%A4%E5%8F%8C%E6%8B%BC%E4%BA%94%E7%AC%94%E9%83%91%E7%A0%81%E8%BE%93%E5%85%A5%E6%B3%95/id1142623977) 和 [倉輸入法](https://apps.apple.com/cn/app/%E4%BB%93%E8%BE%93%E5%85%A5%E6%B3%95/id6446617683) 兼容。

本方案已內置於倉輸入法的方案列表，您可以在方案列表界面中點擊「方案下載」，然後就可以直接安裝「魔然〈繁〉」或「魔然〈簡〉」。

### 純血鴻蒙

已知有基於 Rime 引擎的「超越輸入法」，是否兼容尚未知。

## 其他平臺

### Emacs

已知與 emacs-rime 兼容。
