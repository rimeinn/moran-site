---
title: 文件列表及說明
order: 100
---

# 文件列表及說明

魔然方案整體是相當龐大的方案，包含大量文件，本頁面將所有文件分類列出，供參考。

特殊標記的含義：

* ⭐️ 表示對用戶自定義來說比較重要，更新時最好提前備份
* _斜體_ 表示默認不存在，但用戶創建的文件後具有特殊功能的文件

## 文件列表

* **魔然方案的通用配置系統**
  * moran.yaml 通用的快捷鍵和拼寫運算
  * moran\_defs.yaml 一些內置的拼寫運算片段，在 moran.yaml 和其他文件中被引用
* **方案定義文件**
  * moran.schema.yaml 默認模式
    * ⭐️ _moran.custom.yaml_
  * moran\_fixed.schema.yaml [字詞模式](/book/schemas/zici)
    * ⭐️ _moran\_fixed.custom.yaml_
  * moran\_sentence.schema.yaml [整句模式](/book/schemas/zhengju)
    * ⭐️ _moran\_sentence.custom.yaml_
  * moran\_aux.schema.yaml [輔篩模式](/book/schemas/fushai)
    * ⭐️ _moran\_aux.custom.yaml_
  * moran\_bj.schema.yaml 一種並擊方案
    * ⭐️ _moran\_bj.custom.yaml_
  * moran\_charset.schema.yaml [字集過濾](/book/usage/features.md#字集過濾)用的工具方案
  * moran\_english.schema.yaml [英語混輸](/book/usage/features.md#外語輸入)用的工具方案
  * moran\_japanese.schema.yaml [日語混輸](/book/usage/features.md#外語輸入)用的工具方案
  * moran\_reverse.schema.yaml [通配符反查](/book/usage/reverse-lookup.md)用的工具方案
  * tiger.schema.yaml [虎碼反查](/book/usage/reverse-lookup.md)用的工具方案，也可以單獨使用
    * ⭐️ _tiger.custom.yaml_
  * zrlf.schema.yaml [兩分反查](/book/usage/reverse-lookup.md)用的工具方案
* **詞庫文件**
  * **自定義短語詞庫**
    * **⭐️** moran\_custom\_phrases.txt 自定義短語所用的詞庫
  * **整句輸入使用的詞庫**
    * **用戶詞庫**
      * **⭐️** _moran.userdb_ （使用過程中自動生成）
    * **用戶自定義詞庫**
      * ⭐️ moran.extended.yaml 用戶可擴展詞庫
    * **基礎詞庫**
      * moran.chars.dict.yaml 單字編碼
      * moran.base.dict.yaml 基礎詞庫
      * moran.words.dict.yaml 本方案擴充詞庫，邏輯上可視作基礎詞庫的一部分
    * **擴充中文詞庫**，可在 moran.extended.yaml 中開關
      * moran.hanyu.dict.yaml 漢語大詞典詞庫，默認不開啓
      * moran.computer.dict.yaml 計算機專業術語
      * moran.tencent.dict.yaml 騰訊詞向量詞庫
      * moran.moe.dict.yaml 萌娘百科詞庫
  * **字詞模式和簡碼使用的詞庫**
    * moran\_fixed.dict.yaml 傳承字版字詞模式和簡碼
    * moran\_fixed\_simp.dict.yaml 簡化字版字詞模式和簡碼
    * moran\_fixed.symbols.dict.yaml `o` 引導的符號碼表
    * ⭐️ _moran\_fixed.txt_ 字詞模式用戶詞庫（傳承字版）
    * ⭐️ _moran\_fixed\_simp.txt_ 字詞模式用戶詞庫（簡化字版）
  * **其他詞庫**
    * moran\_english.dict.yaml [英語混輸](/book/usage/features.md#英語輸入)詞庫
    * moran\_japanese.dict.yaml [日語混輸](/book/usage/features.md#日語輸入輕量級)詞庫
    * moran\_charset.dict.yaml [字集過濾](/book/usage/features.md#字集過濾)所用的字集定義
    * tiger.dict.yaml 虎碼詞庫，用於[虎碼反查](/book/usage/reverse-lookup.md)
    * zrlf.dict.yaml 基於自然碼的字海兩分碼表，用於[兩分反查](/book/usage/reverse-lookup.md)
* **其他配置文件**
  * squirrel.yaml 鼠鬚管相關設置，魔然方案增加了一些內置皮膚
    * ⭐️ _squirrel.custom.yaml_
  * ⭐️ symbols.yaml 標點和符號定義，魔然方案增加了一些內置[顏文字](/book/usage/features.md#常規符號與顏文字)
    * ⭐️ _symbols.custom.yaml_
  * punctuation.yaml 來自 rime-prelude，無修改
  * key\_bindings.yaml 來自 rime-prelude，無修改
  * recipe.yaml 用於東風破的[配方](安装/简介.md)定義文件
* **Lua 腳本**
  * **基礎功能庫**
    * moran.lua 一些通用的處理函數，在其他 Lua 文件中被引用
  * **翻譯器**
    * moran\_express\_translator.lua 默認模式的核心邏輯
    * moran\_aux\_translator.lua [輔篩模式](/book/schemas/fushai)的核心邏輯
    * moran\_number.lua 實現[大寫數字輸入](/book/usage/features.md#數字與金額)
    * moran\_shijian.lua 實現[日期和時間輸入](/book/usage/features.md#日期與時間)
    * moran\_unicode.lua 實現[Unicode輸入](/book/usage/features.md#unicode)
  * **過濾器**
    * moran\_reorder\_filter.lua 默認模式的核心邏輯
    * moran\_aux\_hint.lua 實現[輔助碼提示功能](/book/usage/features.md#簡碼和輔助碼提示)
    * moran\_quick\_code\_hint.lua 實現[簡碼提示功能](/book/usage/features.md#簡碼和輔助碼提示)
    * moran\_charset\_filter.lua 實現[字集過濾](/book/usage/features.md#字集過濾)
    * moran\_fix\_filter.lua 實現[輔篩模式的簡碼功能](/book/schemas/fushai/features.md#固定一簡或二簡)
    * moran\_unicode\_display\_filter.lua 實現[Unicode碼提示功能](/book/usage/features.md#濾鏡)
    * moran\_charset\_comment\_filter.lua 實現[字集提示功能](/book/usage/features.md#濾鏡)
  * **處理器**
    * moran\_launcher.lua 實現[彩蛋功能](/book/usage/features.md#彩蛋)
    * moran\_semicolon\_processor.lua 實現默認模式的[分號功能](/book/usage/features.md#次選鍵)
* **OpenCC 相關文件**
  * moran\_TSCharacters.txt 繁轉簡的單字數據，本項目有改動
  * moran\_TSPhrases.ocd2 繁轉簡的詞語數據，無改動
  * moran\_t2s.json 本項目專用的繁轉簡濾鏡定義
  * moran\_t2s\_fix.txt 本項目專用的繁轉簡詞語數據，用於糾正 OpenCC 原始數據的一些不恰當之處
  * moran\_chaifen.json [拆分提示](/book/usage/features.md#濾鏡)定義
  * moran\_chaifen.txt [拆分提示](/book/usage/features.md#濾鏡)
  * moran\_dzing.json [叔寍正字](/book/usage/features.md#切換用字標準)定義
  * moran\_dzing.txt [叔寍正字](/book/usage/features.md#切換用字標準)數據
  * moran\_emoji.json [emoji](/book/usage/features.md#emoji)定義
  * moran\_emoji.txt [emoji](/book/usage/features.md#emoji)
  * moran\_pinyinhint.json [拼音提示](/book/usage/features.md#濾鏡)定義
  * moran\_pinyinhint.txt [拼音提示](/book/usage/features.md#濾鏡)數據
* **其他數據文件**
  * zh-{hant,hans}-t-essay-bgc.gram [八股文語言模型](/book/usage/features.md#語言模型)
