---
title: 自定義短語
order: 5
---

# 自定義短語

自定義短語是公共功能，爲所有魔然方案共享。**總是出現在任何其他候選之前。**

編輯 `moran_custom_phrases.txt` 可增減新的自定義短語。

[//]: # ({% hint style="info" %})
在默認模式中，由於自定義短語不被視作簡碼，因此不會帶有簡碼提示符，如⚡。

在[字詞模式](/book/schemas/zici)中，最大碼長的優先級超過自定義短語，因此超過 4 碼的自定義短語無法輸入。

[//]: # ({% endhint %})

## Pin 置頂功能

自 20241119 版本起，可通過置頂功能實現部分自定義短語的功能。

### 候選置頂

將光標移動到想要置頂的候選上，按 Ctrl-t 即可。

* 被置頂的候選默認具有「📌」標記（可修改）。
* 在被置頂的候選上再次按 Ctrl-t 可以取消置頂。

但置頂候選**僅在完整匹配當前輸入時**才會生效。在下面的例子中，輸入 lmj, lm, l, 甚至 lmjxf 都不會置頂「連接」。

<figure><img src="../.gitbook/assets/CleanShot 2024-11-19 at 20.03.42@2x.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/CleanShot 2024-11-19 at 20.04.24@2x.png" alt=""><figcaption></figcaption></figure>

[//]: # ({% hint style="info" %})
值得一提的是，被置頂的詞語可以正確參與詞頻計算。

[//]: # ({% endhint %})

### 「萬靈藥」加詞功能

「萬靈藥」加詞利用 Pin 的原理實現類似自定義短語的功能，且無需打開編輯 moran\_custom\_phrases.txt。

[//]: # ({% hint style="info" %})
該功能不會修改 moran\_custom\_phrases.txt，而會將詞語記憶到非純文本的 moran\_pin.userdb 數據庫中。

但無需擔心需要手動遷移數據——該數據庫可以通過 Rime 同步功能在多設備間同步。

[//]: # ({% endhint %})

使用方法：輸入 `目標編碼//候選對應編碼` 後按空格。

如輸入 `hello//nihk` 後：

<figure><img src="../.gitbook/assets/CleanShot 2024-11-19 at 20.12.01@2x.png" alt=""><figcaption></figcaption></figure>

再按空格，會進入「候選對應編碼」的翻譯過程：

<figure><img src="../.gitbook/assets/CleanShot 2024-11-19 at 20.12.36@2x.png" alt=""><figcaption></figcaption></figure>

此時再按空格確認輸入，即可成功加詞。再次輸入 hello 確認：

<figure><img src="../.gitbook/assets/CleanShot 2024-11-19 at 20.14.43@2x.png" alt=""><figcaption></figcaption></figure>

#### 自由模式

自定義短語中可能想包含非漢字的其他字符，如 「A4紙」。

設置 `moran/pin/panacea/freestyle: true` 後，加詞流程會有所變化：

1. 直接輸入 `編碼//` 空格開始加詞流程。
2. 之後用正常的輸入方法輸入任何字符，均會被增加到詞中。
3. 再次輸入 `x//` 空格完成加詞。
