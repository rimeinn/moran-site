---
order: 3
title: 技術細節
---

# 技術細節

## 造詞鍵的實現

約束條件：

* 希望主翻譯器可以不受調頻影響
* 希望用戶詞語出現在系統詞語之後

已知：

* Rime 自帶的造詞機能依賴於 sentence

依次可導出三個 translator：

| 翻譯器命名空間    | 用途             | enable\_user\_dict | enable\_sentence |
| ---------- | -------------- | ------------------ | ---------------- |
| translator | 主翻譯器，只顯示系統詞    | false              | false            |
| fixed      | 讀取用戶詞，放置在系統詞之後 | true               | false            |
| zkci       | 只造詞            | false              | true             |

設計一個 pattern，使得某個特殊鍵（如 `'` ）引導的輸入進入 zkci 翻譯器：

```yaml
recognizer:
  import_preset: default
  patterns:
    zkci: "^[a-z]*'[a-z']*$"
```

