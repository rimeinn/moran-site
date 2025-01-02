---
order: 50
title: 特性說明
---

# 特性說明

## 碼表設置

### 自定義簡碼

簡碼碼表與[字詞模式](../schemas/zici/)碼表共享，即：

* 傳承字版：`moran_fixed.dict.yaml`
* 簡化字版：`moran_fixed_simp.dict.yaml`

通過修改對應文件，可以自定義簡碼。

### 自定義提示符

編輯 `moran.custom.yaml`，可將簡碼提示符改成自己想要的樣子。

```yaml
patch:
  moran/quick_code_indicator: "´_>`"
```

<figure><img src="/book/.gitbook/assets/image (4).png" alt=""><figcaption><p>自定義簡碼提示符</p></figcaption></figure>

設置爲空可以**取消簡碼提示符**（但簡碼效果仍在）**：**

```yaml
patch:
  moran/quick_code_indicator: ""
```

<figure><img src="/book/.gitbook/assets/image (5).png" alt=""><figcaption><p>取消簡碼提示符的效果</p></figcaption></figure>

### 四碼時注入碼表選項到次選

| 注入                                         | 配置選項                      | 示例                                                                        |
| ------------------------------------------ | ------------------------- | ------------------------------------------------------------------------- |
| <p>單字<br>若四碼在字詞碼表中有對應的單字，則注入到次選</p>        | `moran/show_chars_anyway` | <img src="/book/.gitbook/assets/image (35).png" alt="" data-size="original"> |
| <p>非二字詞語<br>若四碼在字詞碼表中有對應的三字以上詞語，則注入到次選</p> | `moran/show_words_anyway` | <img src="/book/.gitbook/assets/image (36).png" alt="" data-size="original"> |

默認開啓詞語注入，關閉單字注入。配置方法：編輯 `moran.custom.yaml`

```yaml
patch:
  moran/show_chars_anyway: true  ## 開啓單字注入
  moran/show_words_anyway: false ## 關閉詞語注入
```

### 固詞模式

若開啓固詞模式，在輸入 4 碼時，二字詞將由碼表輸出，即**二字詞不接受調頻，固定詞語位置**，簡稱「**固詞**」。相對應地，不固定的模式稱作「**動詞**」模式。

默認爲**動詞模式**。

開關在選單中顯示爲「固詞」和「動詞」。

<figure><img src="/book/.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

### 單字出簡讓全設置

徹底關閉單字的出簡讓全功能，編輯 `moran.custom.yaml`：

```yaml
patch:
  moran/ijrq/enable: false  # 關閉出簡讓全
```

默認情況下，被“出簡讓全”的字會被延遲到第二頁（根據 `menu/page_size` 動態計算）。若要修改該設置，編輯 `moran.custom.yaml`：

```yaml
patch:
  moran/ijrq/defer: 3  # 延遲 3 位
```

被“出簡讓全”的字會提示對應的簡碼，若要關閉此功能，編輯 `moran.custom.yaml`：

```yaml
patch:
  moran/ijrq/show_hint: false  # 不顯示出簡讓全提示
```

默認的出簡讓全的後綴是固定的 `o`，若要修改該後綴，編輯 `moran.custom.yaml`:

```yaml
patch:
  moran/ijrq/suffix: /  # 使用其他“出簡讓全”後綴
```

## 輸入增強

### 次選鍵

次選鍵 `;` 分號的主要功能是「次選」，即選中第二個選項。默認模式的分號有所增強：

* 分號會跳過 emoji，選中首選項之後的第一個中文或英文候選。
  * 在開啓 emoji 時，`y` 的第二選項是 1️⃣。但仍然可以使用 `y;` 輸入「又」字。
  * 要選擇 emoji 選項，可以使用數字鍵。
* 若當前有且只有一個選項，則分號直接上屏當前選項，就好像按下空格。
  * 輸入 `sxey`，得到唯一候選「三心二意」，按空格和按分號都可以上屏該選項。

### Emoji

若開啓 emoji 顯示，在輸入過程中，會自動提示候選項對應的 emoji。在選單中 emoji 的開關狀態分別顯示爲🈶和🈚️。

**快捷鍵**：在輸入過程中，按 `Ctrl+Q` （Q = 表**情**）

Emoji 定義在 `opencc/moran_emoji.txt` 中。

| 🈶                                                                        | 🈚️                                                                       |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <img src="/book/.gitbook/assets/image (41).png" alt="" data-size="original"> | <img src="/book/.gitbook/assets/image (42).png" alt="" data-size="original"> |

### 簡繁轉換

若開啓 emoji 顯示，在輸入過程中，會自動提示候選項對應的 emoji。在選單中 emoji 的開關狀態分別顯示爲🈶和🈚️。

**快捷鍵**：在輸入過程中時，按下 `Ctrl+S` 開關簡繁轉換。

| 版本   | 開啓時        | 關閉時     |
| ---- | ---------- | ------- |
| 傳承字版 | 執行「繁->簡」轉換 | 不進行任何轉換 |
| 簡化字版 | 執行「簡->繁」轉換 | 不進行任何轉換 |

### 大寫字母追加上一字輔助碼

在正常輸入時，輸入大寫字母（Shift + 字母）會把字母添加到前一個字末尾。

此外，Shift+Backspace 會從上一個字的末尾刪除輸入。

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>輸入 lm jx</td><td><img src="/book/.gitbook/assets/image (27).png" alt="" data-size="original"></td><td></td></tr><tr><td>輸入大寫 Z，z 追加到前一個字末</td><td><img src="/book/.gitbook/assets/image (28).png" alt="" data-size="original"></td><td></td></tr></tbody></table>

要取消此功能，編輯 `moran.schema.yaml`，從 `key_bindings` 中刪去 `moran_capital_for_last_syllable`：

<figure><img src="/book/.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

### 詞語級輔助

當輸入二字或三字詞時，允許詞末輸入**一位**輔助碼篩選詞語。例如輸入 lmjxz 得到「連接」，輸入 lmjxj 得到「鏈接」。

但是與字輔輸入方法不同，詞輔在生效後**不能**在句末繼續輸入形成整句——這個功能僅用於「詞語篩選」。因此，這個功能僅適合習慣於以詞語爲單位輸入的用戶，因此**默認是關閉的**。開啓方法：編輯 `moran.custom.yaml`

```yaml
patch:
  moran/enable_word_filter: true
```

開啓後，詞輔篩選的詞語會帶有輔助碼提示，例如「鏈接」後會有「jf」，意思是輸入 j **或** f 都可以定位到這個詞，而不是說要同時輸入 jf 兩個碼。（相反，同時輸入 jf 兩碼後反而無法得到該選項）。

## 便捷輸入

### 常規符號與顏文字

:::tip
這些符號在 `symbols.yaml` 中定義，與其他 Rime 方案共享。
:::

**特殊符號**

| 打法  | 符號                   |
|-------|------------------------|
| /tab  | 製表符（Tab 鍵）        |
| /kg   | 全角空格               |
| /zb   | 畫表格用的符號，如 ┌┐┼ 等|
| /vb   | 畫表格用的符號，如 ┌┐┼ 等|

**常用符號**

| 打法  | 符號類型     | 示例           |
|-------|--------------|----------------|
| /xl   | 小寫希臘字母 | αβγ           |
| /xld  | 大寫希臘字母 | ΓΔΘ           |
| /2    | 數字變體     | ₂²②❷⓶㈡      |
| /u    | 字母變體     | ūúűǔùüǖǘ     |
| /sb   | 上標         | ⁰¹²³          |
| /xb   | 下標         | ₀₁₂₃          |
| /szq  | 帶圈數字     | ⓪①②③         |

**顏文字**

包含 Fcitx 內置的顏文字集合。部分顏文字列表：

<table><thead><tr><th width="215">打法</th><th>顏文字</th></tr></thead><tbody><tr><td>/pa<br>/orz</td><td>_(:з」∠)_</td></tr><tr><td>/ah</td><td>´_>`</td></tr><tr><td>/bear</td><td>(･ｪ-)<br>(✪㉨✪)<br>(￣(エ)￣)</td></tr><tr><td>/shrug</td><td>¯\_(ツ)_/¯</td></tr></tbody></table>

### 快符和重複上屏

:::info
快符在 `moran_fixed.dict.yaml` 和 `moran_fixed_simp.dict.yaml` 中定義。

由于每個人所用的符號習慣不同，你可以修改上述文件中的定義以滿足自己的需求。
:::

快符是一種快速輸入標點符號的方法，打法是 `;` + 一個字母，直接上屏對應的符號。這種打法避開了一些較難按的組合，也避開了諸如雙引號和單引號的匹配問題。

其中 `;d` 是特殊的，用於重複上次上屏內容。

:::tip
`;d` 可以理解爲 duplicate。`;t` 是 tilde。
:::

:::warning
僅 librime >= 1.12 支持 `;d` 自動上屏，更老的版本需要多按一次空格鍵。
:::

<figure><img src="/book/.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

### 數字與金額

| 編碼              | 說明     | 效果                                                                        |
| --------------- | ------ | ------------------------------------------------------------------------- |
| **`S`** + 十進制數字 | 大寫數字轉換 | <img src="/book/.gitbook/assets/image (37).png" alt="" data-size="original"> |

### 日期與時間

<table><thead><tr><th width="191">編碼</th><th>說明</th><th>效果</th></tr></thead><tbody><tr><td><strong><code>N</code></strong> + 公曆日期</td><td>公曆日期轉農曆日期</td><td><img src="/book/.gitbook/assets/image (19).png" alt="" data-size="original"></td></tr><tr><td><code>osj</code>, <code>ouq</code>, <code>otime</code></td><td>輸出當前時間</td><td><img src="/book/.gitbook/assets/image (12).png" alt="" data-size="original"></td></tr><tr><td><code>orq</code>, <code>odate</code></td><td>輸出當前公曆日期</td><td><img src="/book/.gitbook/assets/image (11).png" alt="" data-size="original"></td></tr><tr><td><code>onl</code></td><td>輸出當前農曆日期</td><td><img src="/book/.gitbook/assets/image (10).png" alt="" data-size="original"></td></tr><tr><td><code>ojq</code></td><td>輸出當前節氣</td><td><img src="/book/.gitbook/assets/image (13).png" alt="" data-size="original"></td></tr><tr><td><code>oww</code></td><td>輸出當前週數（本週是今年的第幾週）</td><td><img src="/book/.gitbook/assets/image (15).png" alt="" data-size="original"></td></tr><tr><td><code>oxq</code>, <code>oweek</code></td><td>輸出星期</td><td><img src="/book/.gitbook/assets/image (16).png" alt="" data-size="original"></td></tr><tr><td><code>ors</code></td><td>輸出 ISO8601 格式時間</td><td><img src="/book/.gitbook/assets/image (17).png" alt="" data-size="original"></td></tr><tr><td><code>oepoch</code></td><td>輸出 UNIX 時間戳</td><td><img src="/book/.gitbook/assets/image (18).png" alt="" data-size="original"></td></tr></tbody></table>

### Unicode

| 編碼              | 說明                     | 示例                                                                        |
| --------------- | ---------------------- | ------------------------------------------------------------------------- |
| **`U`** + 十六進制數 | 輸出十六進制數所對應的 Unicode 字符 | <img src="/book/.gitbook/assets/image (38).png" alt="" data-size="original"> |

## 信息提示

### 濾鏡

| 查詢信息            | 開關鍵      | 示例                                                                        |
| --------------- | -------- | ------------------------------------------------------------------------- |
| Unicode 碼位和所在字集 | `Ctrl-u` | <img src="/book/.gitbook/assets/image (22).png" alt="" data-size="original"> |
| 輔助碼及其拆分         | `Ctrl-i` | <img src="/book/.gitbook/assets/image (23).png" alt="" data-size="original"> |
| 漢語拼音            | `Ctrl+.` | <img src="/book/.gitbook/assets/image (24).png" alt="" data-size="original"> |

### 簡碼和輔助碼提示

| 提示                         | 開關參數                           | 示例                                                                        |
| -------------------------- | ------------------------------ | ------------------------------------------------------------------------- |
| **簡碼提示**：自動提示其他簡碼打法，顯示在⚡右邊 | `moran/enable_quick_code_hint` | <img src="/book/.gitbook/assets/image (31).png" alt="" data-size="original"> |
| **輔助碼提示**：自動提示單字輔助碼，顯示在⚡左邊 | `moran/enable_aux_hint`        | <img src="/book/.gitbook/assets/image (33).png" alt="" data-size="original"> |

這兩個功能需要修改方案進行開關，編輯 `moran.custom.yaml`：

```yaml
patch:
  moran/enable_quick_code_hint: true # 開啓簡碼提示
  moran/enable_aux_hint: true        # 開啓輔助碼提示
```

兩個提示可以同時打開。

<figure><img src="/book/.gitbook/assets/image (34).png" alt=""><figcaption><p>簡碼和輔助碼提示同時打開的顯示效果</p></figcaption></figure>

## 外語輸入

:::warning
此處所說的外語輸入並不能實現一口氣輸入「我今天學了C語言」的效果。
:::

### 英語輸入

默認**開啟**。英語詞庫文件爲 `moran_english.dict.yaml`。

<figure><img src="/book/.gitbook/assets/image (2).png" alt=""><figcaption><p>英語輸入效果</p></figcaption></figure>

要關閉該功能，可編輯 `moran.schema.yaml` 刪除或註釋掉 `table_translator@english`：

<figure><img src="/book/.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

### 日語輸入（輕量級）

該功能爲輕量級日語混輸功能，只適合輸入偶爾夾雜的日語詞，不適合輸入句子。

默認**關閉**。日語詞庫文件爲 `moran_japanese.dict.yaml`。

<figure><img src="/book/.gitbook/assets/image (3).png" alt=""><figcaption><p>日語輸入效果</p></figcaption></figure>

要開啓日語輸入功能，請编辑 `moran.custom.yaml`：

```yaml
patch:
  schema/dependencies/+: [moran_japanese]
  engine/translators/+: [table_translator@japanese]
```

此外，方案還支持使用 `ojp` 引導純日語輸入，配置方法：

```yaml
patch:
  schema/dependencies/+: [moran_japanese]
  engine/translators/+: [table_translator@japanese, table_translator@japanese_o]
```

### 全功能版日語輸入

推薦使用 Kuroame 製作的 [`rime-kagiroi` 方案](https://github.com/rimeinn/rime-kagiroi/)：該方案基於 mozc 詞庫並手動用 Lua 實現了 Viterbi 算法，是目前整句轉換效果最好的 Rime 日語方案。

參考配置方法：

1. 首先安裝 rime-kagiroi 方案，可通過 plum 安裝 `rimeinn/rime-kagiroi` 配方。
2. 修改 moran.custom.yaml（或其他對應方案的 custom.yaml）：

```yaml
patch:
  # 參考 rime-kagiroi 的 README
  schema/depenencies/+: [kagiroi]  # 增加依賴，可自動連帶部署 kagiroi 方案而無需增加到 schema_list 中
  engine/segmentors/@before 5: affix_segmentor@kagiroi  # 用於識別 ok 前綴
  engine/translators/+: [lua_translator@*kagiroi/kagiroi_translator]  # 增加 kagiroi 翻譯器
  kagiroi:  # 設置 ok 前綴
    prefix: ok
    tips: 〔カギロイ〕
    tag: kagiroi
  recognizer/patterns/kagiroi: '(^ok[a-z\-]*$)'  # 用於識別 ok 前綴
```

<figure><img src="/book/.gitbook/assets/CleanShot 2024-12-09 at 19.53.18@2x.png" alt=""><figcaption><p>輸入 ok 後可直接直接輸入完整日語句子</p></figcaption></figure>

## 字集設置

### 字集過濾

魔然方案收錄了 8 萬餘字，含有大量生僻字，大部分字其實日常打字時用不到，甚至設備上無法顯示。

* 「通用」：開啓過濾，只顯示在「通用字集」裏的字。
* 「增廣」：不過濾，顯示所有字。

:::info
「通用」字集取自於 [Mi Sans 字體（L1 和 L2）](https://hyperos.mi.com/font)，共 27690 字。

字集定義在 `moran_charset.dict.yaml`。您可以修改該文件以滿足自己的使用。
:::

### 切換用字標準

魔然方案內置了基於 OpenCC 的用字標準切換。目前內置了 4 個標準：

* 通：OpenCC 標準繁體字（魔然有少量修改）
* 臺：臺灣用字標準
* 港：香港用字標準
* 寍：[叔寍正字標準](https://github.com/rime-aca/customize/blob/master/DZING_README.txt)

**快捷鍵**：Ctrl+Shift+0

| 方案選單切換界面                 | ![「通」「臺」「港」「寍」爲內置的四個用字標準](/book/.gitbook/assets/image%20(44).png) |
|----------------------------------|-----------------------------------------------------------------------------------------|
| 臺灣標準中「開啓」顯示爲「開啟」 | ![](../.gitbook/assets/image%20(45).png)                                             |

若要永久性地設置爲某個用字標準，可修改 `moran.custom.yaml`：

```yaml
patch:
  switches/@10/reset: 1  # 永久設置爲臺灣用字
  switches/@10/reset: 2  # 永久設置爲香港用字
  switches/@10/reset: 3  # 永久設置爲叔寍正字
```

:::warning
`switches/@10` 表示 switches 列表中的第 11 個元素。參見 [Rime 配置官方文檔](https://github.com/rime/home/wiki/Configuration)。
:::

:::info
這是在輸入完成後只看字形的轉換，因此不會影響輸入碼，特別是不會影響簡碼。
:::

## 其他功能

### 語言模型

:::info
依賴於 [Octagram 插件](../maintenance/install)。
:::

魔然已內置八股文語言模型數據。語言模型會提高切分和組句效果。在整句類方案中默認開啓，在碼表類方案中默認關閉。

要禁用語言模型，編輯 `moran.custom.yaml`：

```yaml
patch:
  grammar: {}
```

### 彩蛋

輸入 `omorj` 或 `ogrwh` 可以打開魔然官網。 :)
