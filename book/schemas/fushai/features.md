---
title: 特性說明
order: 3
---

# 特性說明

## 固定一簡或二簡

編輯 `moran_aux.custom.yaml` ，按如下格式設置自己喜歡的固定一簡或二簡。目前不支持三簡以上的設定。

```yaml
patch:
  moran/fix:
    a: 啊
    b: 不
    c: 次
    d: 的
    # 以此類推
```

## 掛接固定碼表

所謂的掛接是指將字詞模式的碼表作爲首選輸出出來，從而提升確定性，實現高速盲打。配置已經包含了相關設置，但默認被禁用了。

開啓掛接的方法是，編輯 `moran_aux.schema.yaml` ，解除 `engine/translators` 中 `table_translator@fixed` 一行的註釋。可以搜索「掛接」二字定位到這一行。

<figure><img src="../../.gitbook/assets/image (83).png" alt=""><figcaption></figcaption></figure>
