---
order: 3
title: 配置
---

# 配置

## 常見配置參考

### 模糊音設置

編輯 `moran.yaml` 中的 `algebra/user_sentence_top` 部分：

```yaml
algebra:
  user_sentence_top:
    __append:
      __patch:
        # ... 其他內容略
        - moran_defs:/bufen/z_zh    # 不分 z 和 zh
        - moran_defs:/bufen/c_ch    # 不分 c 和 ch
        - moran_defs:/bufen/s_sh    # 不分 s 和 sh
        - moran_defs:/bufen/n_l     # 不分 n 和 l
        - moran_defs:/bufen/h_f     # 不分 h 和 f
        - moran_defs:/bufen/in_ing  # 不分 in 和 ing
        - moran_defs:/bufen/en_eng  # 不分 en 和 eng
```

無需全部保留，只需要保留自己想要的模糊音對應的行。

### 恢復老自然碼的 ü 打法（jv qv xv yv）

編輯 `moran.yaml` 中的 `algebra/user_sentence_top` 部分：

```yaml
algebra:
  user_sentence_top:
    __append:
      __patch:
        - moran_defs:/classic_zrm_jqx
```

### 掛接用法

掛接用法指碼表輸出總是優先於整句輸出。

#### 默認模式設置

編輯 `moran.custom.yaml`

```yaml
patch:
  switches/@5/reset: 1
  moran/show_chars_anyway: true
  moran/show_words_anyway: true
```

#### 輔篩模式設置

轉到[對應章節](/book/schemas/fushai/features.md#掛接固定碼表)。

## 技術細節

與一般的 Rime 配置不同，本項目爲了減少代碼重複，各方案中共通的部分被提取到一個額外的文件 moran.yaml 中。

該文件定義了如下幾個部分：

* `algebra`：各魔然方案共享的[拼寫運算](https://github.com/rime/home/wiki/SpellingAlgebra)（spelling algebra）設定。
* `key_bindings`：各方案共享的快捷鍵設定。
* `octagram`：八股文語言模型插件相關配置。

### 拼寫運算

魔然的拼寫運算框架把拼寫運算劃分成了 5 個階段：

1. `user_force_top`
2. `user_force_bottom`
3. `generate_code`
4. `user_sentence_bottom`
5. `user_force_bottom`

該框架主要是爲了減少重複代碼。例如，要在手機上實現 19 鍵佈局，則鍵位映射應該注入到所有方案中，而飛鍵映射只能用在類整句方案中。

五個階段依次從上到下運行。不同方案使用其中不同的設置：

| 方案 | user\_force\_top | user\_force\_bottom | generate\_code | user\_sentence\_bottom | user\_force\_bottom |
| -- | ---------------- | ------------------- | -------------- | ---------------------- | ------------------- |
| 魔然 | ✅                | ✅                   | ✅              | ✅                      | ✅                   |
| 整句 | ✅                | ✅                   | ✅              | ✅                      | ✅                   |
| 字詞 | ✅                | ❌                   | ❌              | ❌                      | ✅                   |
| 輔篩 | ✅                | ✅                   | ❌              | ✅                      | ✅                   |

* 只有 `user_force_top` 和 `user_force_bottom` 會注入到所有方案中。
* 輔篩模式使用特殊的編碼生成邏輯。
