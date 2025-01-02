---
order: 102
title: 實例：替換輔助碼
---

# 實例：替換輔助碼

## 數據準備

將想要的輔助碼按「一行一字、空格分隔」的格式寫入 `data/userdb.txt`：

```
我 ab
我 cd
你 ef
```

其中，一個字可以含有多個輔助碼。第一個輔助碼被稱作「正碼」，剩下的被視作容錯碼。

## 單字

涉及 `moran.chars.dict.yaml`

```bash
python3 schemagen.py \
    --auxiliary-code=user \
  gen-chars
```

:::info
如果主要使用簡化字，請設置相應拼音表。

```bash
python3 schemagen.py \
    --pinyin-table=data/pinyin_simp.txt \
    --auxiliary-code=user \
  gen-chars
```
:::

## 整句詞庫

涉及 chars 和 fixed 之外的 compact dict。compact dict 中所有詞都有完整編碼，比較易於識別。也可以查看 `update-compact-dicts.sh` 中的列表。

```bash
python3 schemagen.py \
    --auxiliary-code=user \
  update-compact-dict \
    --rime-dict=../moran.foo.dict.yaml
```

## 簡碼詞庫

建議使用 `gen-fixed` 重新生成簡碼。

```bash
python3 schemagen.py \
    --auxiliary-code=user \
  gen-fixed \
    --charset=data/trad_chars.txt \
    --input-dict=data/trad_words.txt
```
