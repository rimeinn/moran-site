---
order: 10
title: 方案生成工具
---

# 方案生成工具

本項目提供一個強大的方案生成工具 tools/schemagen.py，可滿足方案生成和維護的諸多需求。

[//]: # ({% hint style="info" %})
該工具不隨方案打包分發，請從 [GitHub repo](https://github.com/rimeinn/rime-moran/blob/main/tools/schemagen.py) 上獲取。

[//]: # ({% endhint %})

## 通用參數

| 參數                          | 取值                        | 說明                       |
| --------------------------- | ------------------------- | ------------------------ |
| `--double-pinyin`           | zrm 或 flypy，默認 zrm        | 雙拼方案                     |
| `--auxiliary-code`          | zrm 或 user，默認 zrm         | 輔助碼方案                    |
| `--auxiliary-code-fallback` | 字符串，默認 `??`               | 當輔助碼表中不存在該字時，使用這個參數作爲輔助碼 |
| `--pinyin-table`            | 文件路徑，默認 `data/pinyin.txt` | 字詞的拼音和詞頻                 |

<details>

<summary>拼音表文件格式</summary>

使用 tab 分隔的三列數據，依次是字詞、讀音和詞頻。詞語的讀音可留空，這些讀音會被自動生成。例：

```
〇	ling	981
音樂會	yin yue hui	1361
新聞辦		718
```

</details>

<details>

<summary>預置拼音表</summary>

* `data/pinyin.txt` 繁體數據，來自 Rime 八股文和朙月拼音
* `data/pinyin_simp.txt` 簡體數據，來自 Rime 八股文和 pinyin\_simp

</details>

[//]: # ({% hint style="info" %})
在處理簡化字方案時，通常需要設定 pinyin-table 參數。

[//]: # ({% endhint %})

## 命令 gen-chars

用於生成 `moran.chars.dict.yaml` 格式的文件。

直接使用拼音表數據。

```bash
python3 schemagen.py gen-chars
```

## 命令 gen-dict

用於生成整句詞庫，格式類似 `moran.base.dict.yaml`。

在產生讀音時：首先使用詞庫中的讀音，若無，則會自動註音。自動註音過程可以調用 opencc 先進行簡繁轉換（因爲所用註音庫要求輸入是簡化字）。

在產生詞頻時：首先使用詞庫中的詞頻，若無，則會取 0。

| 參數                    | 取值                | 說明                     |
| --------------------- | ----------------- | ---------------------- |
| `--input-dict`        | **必須** 文件路徑       | pinyin-table 格式的詞庫     |
| `--opencc-for-pinyin` | 文件名，默認 `t2s.json` | 在註音前簡繁轉換，默認繁轉簡         |
| `--opencc-for-output` | 文件名，默認爲空          | 在輸出詞語前簡繁轉換，默認不轉換       |
| `--compact`           |                   | 不保留容錯碼，只使用主碼產生詞典       |
| `--no-freq`           |                   | 不輸出詞頻                  |
| `--freq-scale`        | 浮點數，默認 1.0        | 在輸出詞頻時，可以乘上一個因子放大或縮小詞頻 |

<details>

<summary>輸入詞庫格式</summary>

完整格式應是 pinyin-table 格式，即三個數據分別是詞、讀音、詞頻。

詞庫讀入時對兩列數據的情況做了兼容，同時支持詞、讀音和詞、詞頻兩種格式。即支持如下格式：

```
你好	ni hao
再見	123
```

</details>

## 命令 gen-fixed

該命令用於生成簡碼碼表。

簡碼碼表生成的邏輯：

* 首先依次產生所有字的全碼，然後逐級嘗試把字放入一級、二級、三級簡碼位。每個簡碼位最多容納（tolerance 參數設定的數字）個簡碼。
* 詞語和全碼詞放在，並依據詞頻統一排序。

若不指定 `--short-word` 則不生成簡詞。簡詞生成的邏輯：

* 給每個詞語產生幾種特定的短碼：
  * 二字詞，使用兩個字的首碼產生二簡碼
  * 三字詞，使用三個字的首碼產生三簡碼
* 然後將該簡詞碼像簡字碼一樣，逐級嘗試放入簡碼位

| 參數                    | 取值                                                       | 說明                              |
| --------------------- | -------------------------------------------------------- | ------------------------------- |
| `--charset`           | **建議設置** 文件路徑，默認 `data/trad_chars.txt`                   | 設定碼表中的單字                        |
| `--input-dict`        | **建議設置** 文件路徑                                            | 與 gen-dict 命令使用相同的詞庫格式；設定碼表中的詞語 |
| `--format`            | **建議設置** code-words 或 code-word 或 word-code 或 word-codes | 輸出碼表格式                          |
| `--opencc-for-pinyin` | 文件名，默認 `t2s.json`                                        | （與 gen-dict 命令相同）註音時使用的簡繁轉換設定   |
| `--tolerance`         | 逗號分隔的3個數字，默認 1,1,1                                       | 每級簡碼可以容納幾個簡碼                    |
| `--short-word`        |                                                          | 是否生成簡詞                          |

## 命令 update-compact-dict

根據最新的 zrmdb 定義，更新 compact 詞庫中的輔助碼部分。

[//]: # ({% hint style="info" %})
這個命令可用於將繁體詞庫自動轉換成簡體詞庫後，再更新輔助碼。

具體用法可參照 `tools/update_compact_dicts.sh。`

[//]: # ({% endhint %})

| 參數            | 取值         | 說明      |
| ------------- | ---------- | ------- |
| `--rime-dict` | **必須** 文件名 | Rime 詞庫 |

## 命令 update\_char\_weight

根據最新 pinyin-table，更新 chars 碼表的詞頻。

[//]: # ({% hint style="info" %})
這個命令可用於將繁體字表自動轉換成簡體字表後，再更新輔助碼。

具體用法可參照 `make_simp_dist.sh`。

[//]: # ({% endhint %})

| 參數            | 取值         | 說明      |
| ------------- | ---------- | ------- |
| `--rime-dict` | **必須** 文件名 | Rime 詞庫 |

## 命令 update\_sp

根據最新 pinyin-table，重新修改詞的雙拼部分。

| 參數            | 取值         | 說明         |
| ------------- | ---------- | ---------- |
| `--rime-dict` | **必須** 文件名 | Rime 詞庫    |
| `--find`      | **必須** 字符串 | 只更新含有這些字的詞 |

例如，更新只含「朝」字的詞語的讀音：`update-sp --find "朝"`

## 命令 convert\_sp

轉換詞庫的雙拼方案爲其他方案。可以將本方案的自然碼雙拼轉換成其他雙拼。

輸入雙拼方案由[通用參數](/book/tools/schemagen/index.md#通用參數)中的 `--double-pinyin` 指定，輸出方案由 `--to` 指定。

| 參數            | 取值           | 說明      |
| ------------- | ------------ | ------- |
| `--rime-dict` | **必須** 文件名   | Rime 詞庫 |
| `--to`        | **必須** 支持的雙拼 | 目標雙拼方案  |

## 命令 convert\_fixed\_sp

轉換固定碼表的雙拼方案爲其他方案。可以將本方案的自然碼雙拼轉換成其他雙拼。

輸入雙拼方案由[通用參數](/book/tools/schemagen/index.md#通用參數)中的 `--double-pinyin` 指定，輸出方案由 `--to` 指定。

| 參數            | 取值           | 說明      |
| ------------- | ------------ | ------- |
| `--rime-dict` | **必須** 文件名   | Rime 詞庫 |
| `--to`        | **必須** 支持的雙拼 | 目標雙拼方案  |
