import{_ as d,c as a,a4 as e,o as r}from"./chunks/framework.NOSrbWr_.js";const c=JSON.parse('{"title":"輸入方法","description":"","frontmatter":{"order":1,"title":"輸入方法"},"headers":[],"relativePath":"book/schemas/zici/input.md","filePath":"book/schemas/zici/input.md"}'),i={name:"book/schemas/zici/input.md"};function l(o,t,s,h,p,m){return r(),a("div",null,t[0]||(t[0]=[e('<h1 id="輸入方法" tabindex="-1">輸入方法 <a class="header-anchor" href="#輸入方法" aria-label="Permalink to &quot;輸入方法&quot;">​</a></h1><h2 id="單字輸入方法" tabindex="-1">單字輸入方法 <a class="header-anchor" href="#單字輸入方法" aria-label="Permalink to &quot;單字輸入方法&quot;">​</a></h2><p>假設一個單字的全碼是 SYFF，則這個單字可能的編碼是：</p><table><thead><tr><th width="133">類型</th><th width="90">編碼</th><th>例字</th></tr></thead><tbody><tr><td>一級簡碼</td><td>S</td><td>的 d</td></tr><tr><td>二級簡碼</td><td>SY</td><td>得 de</td></tr><tr><td>三級簡碼</td><td>SYF</td><td>髮 fai</td></tr><tr><td>全碼</td><td>SYFF</td><td>治 vidt</td></tr></tbody></table><p><strong>大部分字只有唯一的打法</strong>：如果它是簡碼字，那麼它就沒有全碼打法。稱作「出簡不出全」。因此<strong>每個字的打法都需要在記憶的基礎上使用</strong>。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>默認模式中總可以使用全碼輸入一個字，而字詞模式則不然。</p></div><p>少部分字雖然是簡碼字，但也有其他打法：</p><ul><li>一些二簡字也有三簡打法，這是因爲其對應的三簡編碼爲空，提高容錯度。</li><li>一些三簡字也有全碼打法，但後置。（稱作「出簡讓全」）</li><li>一些字有特殊打法，如無理碼。</li></ul><h3 id="必須特殊記憶的單字無理碼" tabindex="-1">必須特殊記憶的單字無理碼 <a class="header-anchor" href="#必須特殊記憶的單字無理碼" aria-label="Permalink to &quot;必須特殊記憶的單字無理碼&quot;">​</a></h3><ul><li>所有無理碼<strong>仍收錄有理碼</strong>，避免遺忘時打不出字。</li><li>含有這些字的<strong>詞語</strong>也均有對應的<strong>有理碼</strong>，但會<strong>後置</strong>。 <ul><li>jihu 的首選是「嵇」，「幾乎」後置到次選；應該使用 johu 輸入「幾乎」。</li></ul></li></ul><table><thead><tr><th width="132">字</th><th width="179">無理碼</th><th>有理碼</th></tr></thead><tbody><tr><td>幾</td><td>jo</td><td>jiyd</td></tr><tr><td>几</td><td>jop</td><td>jip</td></tr></tbody></table><table><thead><tr><th width="132">字</th><th width="179">無理碼</th><th>有理碼</th></tr></thead><tbody><tr><td>几</td><td>jo</td><td>jip</td></tr></tbody></table><h3 id="飛鍵" tabindex="-1">飛鍵 <a class="header-anchor" href="#飛鍵" aria-label="Permalink to &quot;飛鍵&quot;">​</a></h3><p>所謂的「飛鍵」就是給一些難打的雙拼組合一個新的打法。和默認模式一樣，字詞模式同樣內置了這兩個飛鍵。飛鍵是完全的可選功能。</p><table tabindex="0"><thead><tr><th>原雙拼</th><th>飛鍵後的雙拼</th><th>例子</th></tr></thead><tbody><tr><td>qx</td><td>qo</td><td>切qxd -&gt; qod</td></tr><tr><td>xq</td><td>xo</td><td>維修wzxq -&gt; wzxo</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>字詞模式的飛鍵寫死在碼表 <code>moran_fixed.dict.yaml</code> 和 <code>moran_fixed_simp.dict.yaml</code> 裏。</p><p>要生成新的飛鍵編碼，可以使用 tools/flykey.py。</p><p>要刪除飛鍵編碼，只需編輯碼表文件刪去對應編碼即可。</p></div><h3 id="單字編碼練習" tabindex="-1">單字編碼練習 <a class="header-anchor" href="#單字編碼練習" aria-label="Permalink to &quot;單字編碼練習&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>下面的題目中，有些字沒有全碼打法。</p><p>可以切換到字詞模式實際操作後再作答。</p></div><details><summary>輸入：「平」</summary><p>p，「平」是一簡字</p></details><details><summary>輸入：「樂」</summary><p>le，「樂」是二簡字</p></details><details><summary>輸入：「拿」</summary><p>nau，「拿」是三簡字</p></details><details><summary>輸入：「妳」</summary><p>nine，「妳」是全碼字</p></details><h2 id="詞語輸入方法" tabindex="-1">詞語輸入方法 <a class="header-anchor" href="#詞語輸入方法" aria-label="Permalink to &quot;詞語輸入方法&quot;">​</a></h2><p>詞語中的每個字的編碼用 Aaaa, Bbbb, Cccc 表示，則編碼規則可表示爲：</p><table tabindex="0"><thead><tr><th>詞語字數</th><th>編碼方式</th><th>例子</th></tr></thead><tbody><tr><td>2</td><td>AaBb</td><td>你好 nihk</td></tr><tr><td>3</td><td>ABCc</td><td>不知道 bvdk</td></tr><tr><td>&gt;=4</td><td>ABCZ &quot;前三末一&quot;</td><td>醉翁之意不在酒 zwvj</td></tr></tbody></table><h3 id="詞語編碼練習" tabindex="-1">詞語編碼練習 <a class="header-anchor" href="#詞語編碼練習" aria-label="Permalink to &quot;詞語編碼練習&quot;">​</a></h3><details><summary>練習：給出「三體」的編碼（四個字母）</summary><p>sjti</p><p>根據第一條規則，取兩個字的雙拼碼</p></details><details><summary>練習：給出「葉文潔」的編碼（四個字母）</summary><p>ywjx</p><p>根據第二條規則，前兩個字取首碼，最後一字取完整的雙拼碼</p></details><details><summary>練習：給出「降維打擊」的編碼（四個字母）</summary><p>jwdj</p><p>根據最後一條規則，取每個字的首碼</p></details><details><summary>練習：給出「地球三體組織」的編碼（四個字母）</summary><p>dqsv</p><p>根據最後一條規則，取前三字和最後一字的首碼</p></details><details><summary>試討論：如果嘗試打了某個詞，但這個詞不存在，或者碼表中存在的是另一個詞，應該怎麼辦？</summary><ol><li>可以使用造詞功能，或編輯碼表增加該詞。</li><li>逐字輸入這個詞。</li></ol><p>一般來說，除非某個詞真的很常用，否則通常更推薦逐字輸入的方法。在熟悉單字編碼後，逐字輸入的速度一般會比打兩字詞更快。這是因爲字的數量少，編碼更容易熟悉，所以擊鍵速度更快，也不用擔心這個詞是否存在，故而綜合來說會更快一些。對於超長的多字詞，一般打詞更快，但需要付出記憶成本，需要自己權衡。</p></details>',31)]))}const u=d(i,[["render",l]]);export{c as __pageData,u as default};
