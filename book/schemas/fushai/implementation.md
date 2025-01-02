---
title: 技術細節
order: 4
---

# 技術細節

## Lua 實現

`lua/moran_aux_translator.lua`

* 「消去輔助碼」邏輯使用 OnSelect hook 實現。當用戶選擇到一個由輔助碼提升上來的候選時，OnSelect hook 就刪除輸入末尾的 n 個字符。
* 實現作 translator 而非 filter 是因爲需要多次請求 `script_translator`，這在 Lua filter 中是做不到的。

:::info
間接輔助碼已有 [HowcanoeWang/rime-lua-aux-code](https://github.com/HowcanoeWang/rime-lua-aux-code) （Lua filter）可使用。輔篩的 Lua translator 可視作對應的直接輔助碼版本。
:::

## 輔助碼來源

輔篩模式使用的輔助碼定義來自於 `lua/zrmdb.txt` 而不使用固態詞典中的定義。主要是爲了做得更通用一些，可以直接掛到其他雙拼方案裏使用。

## 編碼生成與詞庫

「魔然·輔篩」與「魔然」和「魔然·整句」共享詞庫。輔篩模式使用特殊拼寫運算將詞庫編碼轉換成純雙拼編碼，禁止了輔助碼混輸/干擾。

