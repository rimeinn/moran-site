---
title: 更新
order: 2
---

# 更新

## 使用「東風破」自動更新

重新運行東風破安裝命令可自動更新用戶文件夾中的配置到最新版。

:::warning
會覆蓋掉 `moran.yaml`、`moran*.{schema,dict}.yaml` 等文件。如果您修改了這些文件並希望保留相關修改，則建議手動更新。
:::

## 手動更新

您需要借助原[下載](../maintenance/install.md)渠道，下載新版，並合併更新到本地用戶目錄中。

::: warning
數據無價，請在覆蓋任何數據前小心再小心！
:::

:::tip
比較保險的方法是：把原來的用戶目錄挪走，然後原地創建一個新文件夾，安裝新版，然後把原來的修改複製回去。
:::

## 重要數據列表

在合併修改之前，請特別注意備份如下文件：

* 用戶詞庫：`moran.userdb` （目錄）、`moran_fixed.txt`、`moran_fixed_simp.txt`
* 自定義短語文件：`moran_custom_phrases.txt`
* 配置自定義：任何文件名以 `.custom.yaml` 結尾的文件

如果修改了其他文件，也建議一併備份，特別是：

* 共享配置：`moran.yaml`
* 簡碼詞庫：`moran_fixed.dict.yaml`, `moran_fixed_simp.dict.yaml`

## 使用 Git 更新

如果您使用 Git 追蹤最新 master 分支，推薦的使用方式是：

* `git commit` 記錄本地修改。
* `git pull` 拉取新更新，`git` 會自動與本地修改合併。
  * 若有修改衝突，可以較容易地定位並修改。
