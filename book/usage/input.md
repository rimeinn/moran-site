---
order: 30
title: 輸入方法
---
# 輸入方法

## 單字輸入方法

假設一個字的雙拼碼是 YY，輔助碼是 XX，則這個字可能由以下方式輸入：

<table><thead><tr><th width="159">編碼</th><th width="205">例字</th><th>說明</th></tr></thead><tbody><tr><td>Y</td><td><img src=".gitbook/assets/image (57).png" alt="" data-size="original"></td><td><ul><li>「就」是一簡字</li><li>「覺得」是一簡詞</li></ul></td></tr><tr><td>YY</td><td><img src=".gitbook/assets/image (56).png" alt="" data-size="original"></td><td><ul><li>「樂」是二簡字</li></ul></td></tr><tr><td>YYX</td><td><img src=".gitbook/assets/image (59).png" alt="" data-size="original"></td><td><ul><li>「哪」是三簡字</li></ul></td></tr><tr><td>YYXX</td><td><img src=".gitbook/assets/image (60).png" alt="" data-size="original"></td><td><ul><li>結合優先度低 ⬇️</li><li>如果存在對應的詞語，該字會出現在詞語之後，或根本不出現</li></ul></td></tr><tr><td>YYXXo</td><td><img src=".gitbook/assets/image (62).png" alt="" data-size="original"></td><td><ul><li>結合優先級高 ⬆️</li><li>一般出現在對應詞庫之前，接受調頻邏輯</li></ul></td></tr><tr><td>YYXX/</td><td><img src=".gitbook/assets/image (63).png" alt="" data-size="original"></td><td><ul><li>結合優先級高 ⬆️</li><li><strong>YYXX/ 必定是單字</strong>（/ 不會出現在詞語編碼中）</li><li>接受調頻邏輯</li></ul></td></tr></tbody></table>

<details>

<summary>練習：用所有方法輸入「加」字</summary>

* jwl
* jwlko
* jwlk/

</details>

### 出簡讓全

當一個字有簡碼打法後，其會被調整到對應的 YYXXo 和 YYXX/ 編碼之後，並附帶簡碼提示。

默認情況下，讓全的候選最多延後到第二頁（opencc 濾鏡可能導致延得更後）。

<figure><img src=".gitbook/assets/image (64).png" alt=""><figcaption></figcaption></figure>

### 簡碼邏輯

[//]: # ({% hint style="info" %})
默認模式的簡碼邏輯比較複雜，但其設計是依照直覺的。使用者在碰到問題前無需閱讀本節。

[//]: # ({% endhint %})

* 簡碼碼表與[字詞模式](07.其他模式/00.魔然字词方案/README.md)共享碼表
* **輸入三碼以下或五碼以上**：總是首先顯示固定碼表中的候選
  * 碼表中幾乎沒有五碼以上的編碼（字詞模式中無法使用），但您仍可以添加這樣的編碼，並在默認模式中正常使用
* **輸入四碼時**：具體行爲受三個參數的影響。
  * 固詞：固定二字詞 + 顯示在首選，若不開啓，則對應選項仍顯示，但受調頻影響
    * 因此這個開關稱作「固定詞頻」，簡稱「固詞」。
    * 對應的，關閉時稱作「動態詞頻」，簡稱「動詞」。
  * `show_chars_anyway`：固定單字（優先顯示在次選），若不開啓，則根本不顯示
  * `show_words_anyway`：固定多字詞（優先顯示在次選），若不開啓，則根本不顯示

| 固詞模式? | show\_chars\_anyway? | show\_words\_anyway? | 行爲                                     |
| ----- | -------------------- | -------------------- | -------------------------------------- |
| ❌     | ❌                    | ❌                    | **不使用碼表輸出**（所有輸出均受調頻影響；碼表輸出不受調頻影響，下同）  |
| ❌     | ✅                    | ❌                    | 碼表中的**單字**注入到次選位置                      |
| ❌     | ❌                    | ✅                    | 碼表中的**三字以上詞語**注入到次選位置                  |
| ❌     | ✅                    | ✅                    | 碼表中的**單字和三字以上詞語**注入到次選位置               |
| ✅     | ❌                    | ❌                    | 碼表中的**二字詞**優先輸出                        |
| ✅     | ✅                    | ❌                    | 碼表中的**單字和二字詞**優先輸出                     |
| ✅     | ❌                    | ✅                    | 碼表中的**所有詞語**優先輸出                       |
| ✅     | ✅                    | ✅                    | **總是首先輸出碼表中的所有候選項**，均不受調頻影響（類比於傳統掛接用法） |

[//]: # ({% hint style="info" %})
下面這幾種用法比較實用，推薦嘗試：

* 什麼都不開：四碼只調頻打二字詞，適合日常使用
* 全開：適合盲打
* 只開固詞模式：固定高頻二字詞，適合盲打二字詞，同時兼容雙拼用法
* 只開 `show_words_anyway`：首選是調頻的二字詞，但次選是固定長詞，適合手機使用

[//]: # ({% endhint %})

## 詞語和句子輸入方法

將單字編碼連綴成詞即可，**即使其中含有輔助碼**。

如果打完了第二個字回頭發現第一個字需要輔助碼，可**按 tab 鍵**快速在音節間跳轉。

[//]: # ({% hint style="warning" %})
由於 YYXX 式編碼的的特殊性，建議在打詞打句時總是使用 2 碼、3 碼或 5 碼輸入單字。

[//]: # ({% endhint %})

<figure><img src=".gitbook/assets/image (65).png" alt=""><figcaption></figcaption></figure>

## 輔助碼造詞

在用輔助碼打出一個詞後，這個詞會被自動記憶，以後可不加輔助碼打出。

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><img src=".gitbook/assets/image (68).png" alt="" data-size="original"></td><td></td><td>使用輔助碼輸入詞語</td></tr><tr><td><img src=".gitbook/assets/image (69).png" alt="" data-size="original"></td><td></td><td>以後可直接使用雙拼輸入</td></tr></tbody></table>

## 飛鍵

[//]: # ({% hint style="info" %})
該功能是完全可選的，可以不使用飛鍵打法。

[//]: # ({% endhint %})

所謂的「飛鍵」就是給一些難打的雙拼組合一個新的打法。默認模式內置兩個飛鍵，且在字詞模式下也可以使用。

| 原雙拼 | 飛鍵後的雙拼 | 例子             |
| --- | ------ | -------------- |
| qx  | qo     | 切qxd -> qod    |
| xq  | xo     | 維修wzxq -> wzxo |

[//]: # ({% hint style="info" %})
整句模式的飛鍵使用拼寫運算實現。請參考 moran.yaml 以添加或刪除飛鍵。

[//]: # ({% endhint %})
