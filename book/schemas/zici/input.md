---
order: 1
title: 輸入方法
---

# 輸入方法

## 單字輸入方法

假設一個單字的全碼是 SYFF，則這個單字可能的編碼是：

<table><thead><tr><th width="133">類型</th><th width="90">編碼</th><th>例字</th></tr></thead><tbody><tr><td>一級簡碼</td><td>S</td><td>的 d</td></tr><tr><td>二級簡碼</td><td>SY</td><td>得 de</td></tr><tr><td>三級簡碼</td><td>SYF</td><td>髮 fai</td></tr><tr><td>全碼</td><td>SYFF</td><td>治 vidt</td></tr></tbody></table>

**大部分字只有唯一的打法**：如果它是簡碼字，那麼它就沒有全碼打法。稱作「出簡不出全」。因此**每個字的打法都需要在記憶的基礎上使用**。

[//]: # ({% hint style="info" %})
默認模式中總可以使用全碼輸入一個字，而字詞模式則不然。

[//]: # ({% endhint %})

少部分字雖然是簡碼字，但也有其他打法：

* 一些二簡字也有三簡打法，這是因爲其對應的三簡編碼爲空，提高容錯度。
* 一些三簡字也有全碼打法，但後置。（稱作「出簡讓全」）
* 一些字有特殊打法，如無理碼。

### 必須特殊記憶的單字無理碼

* 所有無理碼**仍收錄有理碼**，避免遺忘時打不出字。
* 含有這些字的**詞語**也均有對應的**有理碼**，但會**後置**。
  * jihu 的首選是「嵇」，「幾乎」後置到次選；應該使用 johu 輸入「幾乎」。

[//]: # ({% tabs %})
[//]: # ({% tab title="傳承字版碼表" %})
<table><thead><tr><th width="132">字</th><th width="179">無理碼</th><th>有理碼</th></tr></thead><tbody><tr><td>幾</td><td>jo</td><td>jiyd</td></tr><tr><td>几</td><td>jop</td><td>jip</td></tr></tbody></table>

[//]: # ({% endtab %})

[//]: # ({% tab title="簡化字版碼表" %})
<table><thead><tr><th width="132">字</th><th width="179">無理碼</th><th>有理碼</th></tr></thead><tbody><tr><td>几</td><td>jo</td><td>jip</td></tr></tbody></table>

[//]: # ({% endtab %})
[//]: # ({% endtabs %})

### 飛鍵

所謂的「飛鍵」就是給一些難打的雙拼組合一個新的打法。和默認模式一樣，字詞模式同樣內置了這兩個飛鍵。飛鍵是完全的可選功能。

| 原雙拼 | 飛鍵後的雙拼 | 例子             |
| --- | ------ | -------------- |
| qx  | qo     | 切qxd -> qod    |
| xq  | xo     | 維修wzxq -> wzxo |

[//]: # ({% hint style="info" %})
字詞模式的飛鍵寫死在碼表 `moran_fixed.dict.yaml` 和 `moran_fixed_simp.dict.yaml` 裏。

要生成新的飛鍵編碼，可以使用 tools/flykey.py。

要刪除飛鍵編碼，只需編輯碼表文件刪去對應編碼即可。

[//]: # ({% endhint %})

### 單字編碼練習

[//]: # ({% hint style="info" %})
下面的題目中，有些字沒有全碼打法。

可以切換到字詞模式實際操作後再作答。

[//]: # ({% endhint %})

<details>

<summary>輸入：「平」</summary>

p，「平」是一簡字

</details>

<details>

<summary>輸入：「樂」</summary>

le，「樂」是二簡字

</details>

<details>

<summary>輸入：「拿」</summary>

nau，「拿」是三簡字

</details>

<details>

<summary>輸入：「妳」</summary>

nine，「妳」是全碼字

</details>

## 詞語輸入方法

詞語中的每個字的編碼用 Aaaa, Bbbb, Cccc 表示，則編碼規則可表示爲：

| 詞語字數 | 編碼方式        | 例子           |
| ---- | ----------- | ------------ |
| 2    | AaBb        | 你好 nihk      |
| 3    | ABCc        | 不知道 bvdk     |
| >=4  | ABCZ "前三末一" | 醉翁之意不在酒 zwvj |

### 詞語編碼練習

<details>

<summary>練習：給出「三體」的編碼（四個字母）</summary>

sjti

根據第一條規則，取兩個字的雙拼碼

</details>

<details>

<summary>練習：給出「葉文潔」的編碼（四個字母）</summary>

ywjx

根據第二條規則，前兩個字取首碼，最後一字取完整的雙拼碼

</details>

<details>

<summary>練習：給出「降維打擊」的編碼（四個字母）</summary>

jwdj

根據最後一條規則，取每個字的首碼

</details>

<details>

<summary>練習：給出「地球三體組織」的編碼（四個字母）</summary>

dqsv

根據最後一條規則，取前三字和最後一字的首碼

</details>

<details>

<summary>試討論：如果嘗試打了某個詞，但這個詞不存在，或者碼表中存在的是另一個詞，應該怎麼辦？</summary>

1. 可以使用造詞功能，或編輯碼表增加該詞。
2. 逐字輸入這個詞。

一般來說，除非某個詞真的很常用，否則通常更推薦逐字輸入的方法。在熟悉單字編碼後，逐字輸入的速度一般會比打兩字詞更快。這是因爲字的數量少，編碼更容易熟悉，所以擊鍵速度更快，也不用擔心這個詞是否存在，故而綜合來說會更快一些。對於超長的多字詞，一般打詞更快，但需要付出記憶成本，需要自己權衡。

</details>
