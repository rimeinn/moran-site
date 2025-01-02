---
order: 40
title: 反查方法
---
# 反查方法

內置有五種反查方式。不同方式的可用性依所用發行版有所區別。此外，您也可以使用[在線查詢工具](/lookup/)。

:::tip
小狼毫、鼠鬚管可以開箱即完整使用所有反查方式。其他發行版可能需要額外安裝一些方案（這些方案是鼠鬚管和小狼毫自帶的）。
:::

| 反查方式           | 示例                                                                                              | 說明                                                                                          |
| -------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 通配符反查          | <img src="/book/.gitbook/assets/image (46).png" alt="" data-size="original">                          | <ul><li>輸入雙拼碼後按 <code>`</code> 鍵 （backquote）</li><li>總是可用</li></ul>                         |
| 虎碼反查（\` 引導）    | <img src="/book/.gitbook/assets/image (47).png" alt="" data-size="original">                          | <ul><li>按 <code>`</code> 鍵 （backquote）或或 <code>ohm</code> 後輸入虎碼編碼</li><li>總是可用</li></ul>    |
| 兩分反查（olf 引導）   | <img src="/book/.gitbook/assets/image (50).png" alt="" data-size="original">                          | <ul><li>輸入 <code>olf</code> 後輸入字海兩分編碼，其中每個部件使用自然碼雙拼輸入</li><li>總是可用</li></ul>                |
| 倉頡反查（ocj 引導）   | <img src="/book/.gitbook/assets/image (48).png" alt="" data-size="original">                          | <ul><li>輸入 <code>ocj</code> 後輸入倉頡五代編碼</li><li>Rime 發行版內置倉頡碼表時可用</li></ul>                   |
| 筆畫反查（obh 引導）   | <img src="/book/.gitbook/assets/image (49).png" alt="" data-size="original">                          | <ul><li>輸入 <code>obh</code> 後輸入筆畫碼</li><li>Rime 發行版內置五筆畫碼表時可用</li></ul>                     |
| 注音符號反查（ovy 引導） | <img src="/book/.gitbook/assets/CleanShot 2024-09-23 at 20.18.19@2x.png" alt="" data-size="original"> | <ul><li>輸入 <code>ovy</code> 後依大千式注音符號佈局輸入</li><li>Rime 發行版內置地球拼音（terra_pinyin）時可用</li></ul> |

## 自定義反引號反查

默認反引號 `` ` `` 引導虎碼反查。若您想要修改該行爲，可以參考如下 patch：

```yaml
patch:
  reverse_tick/dictionary: zrlf  # 設置爲反查用的詞典
  reverse_tick/tips: "〔兩分〕"

  # 詞典參考：
  # zrlf: 自然兩分
  # stroke: 五筆畫
  # luna_pinyin: 朙月拼音（注：繁體優先）
  # cangjie5: 倉頡五代

  # ` 只能接受 [a-zA-Z]+ 式的編碼，不支持其他編碼格式，因此不能設置爲注音符號等。

```
