---
order: 101
title: 實例：替換雙拼
---

# 實例：替換雙拼

## 轉換單字表

```bash
python3 schemagen.py \
    --double-pinyin=zrm \
  convert-sp \
    --rime-dict=../moran.chars.dict.yaml \
    --to=flypy
```

## 轉換整句詞庫

```
python3 schemagen.py \
    --double-pinyin=zrm \
  convert-sp \
    --rime-dict=../moran.base.dict.yaml \
    --to=flypy
```

## 轉換字詞碼表

[//]: # ({% hint style="info" %})
轉換過程會保留無理碼。建議使用 gen-fixed 重新生成新碼表。

[//]: # ({% endhint %})

```bash
python3 schemagen.py \
    --double-pinyin=zrm \
  convert-sp \
    --rime-dict=../moran_fixed.dict.yaml \
    --to=flypy
```
