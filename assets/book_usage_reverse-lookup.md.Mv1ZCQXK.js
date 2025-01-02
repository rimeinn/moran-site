import{_ as i,a,b as t,c as l,d as e,e as n}from"./chunks/CleanShot 2024-09-23 at 20.18.19@2x.C86hKwEE.js";import{_ as d,c as o,a4 as r,o as p}from"./chunks/framework.NOSrbWr_.js";const A=JSON.parse('{"title":"反查方法","description":"","frontmatter":{"order":40,"title":"反查方法"},"headers":[],"relativePath":"book/usage/reverse-lookup.md","filePath":"book/usage/reverse-lookup.md"}'),h={name:"book/usage/reverse-lookup.md"};function c(k,s,u,g,m,y){return p(),o("div",null,s[0]||(s[0]=[r('<h1 id="反查方法" tabindex="-1">反查方法 <a class="header-anchor" href="#反查方法" aria-label="Permalink to &quot;反查方法&quot;">​</a></h1><p>內置有五種反查方式。不同方式的可用性依所用發行版有所區別。此外，您也可以使用<a href="/lookup/">在線查詢工具</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>小狼毫、鼠鬚管可以開箱即完整使用所有反查方式。其他發行版可能需要額外安裝一些方案（這些方案是鼠鬚管和小狼毫自帶的）。</p></div><table tabindex="0"><thead><tr><th>反查方式</th><th>示例</th><th>說明</th></tr></thead><tbody><tr><td>通配符反查</td><td><img src="'+i+'" alt="" data-size="original"></td><td><ul><li>輸入雙拼碼後按 <code>`</code> 鍵 （backquote）</li><li>總是可用</li></ul></td></tr><tr><td>虎碼反查（` 引導）</td><td><img src="'+a+'" alt="" data-size="original"></td><td><ul><li>按 <code>`</code> 鍵 （backquote）或或 <code>ohm</code> 後輸入虎碼編碼</li><li>總是可用</li></ul></td></tr><tr><td>兩分反查（olf 引導）</td><td><img src="'+t+'" alt="" data-size="original"></td><td><ul><li>輸入 <code>olf</code> 後輸入字海兩分編碼，其中每個部件使用自然碼雙拼輸入</li><li>總是可用</li></ul></td></tr><tr><td>倉頡反查（ocj 引導）</td><td><img src="'+l+'" alt="" data-size="original"></td><td><ul><li>輸入 <code>ocj</code> 後輸入倉頡五代編碼</li><li>Rime 發行版內置倉頡碼表時可用</li></ul></td></tr><tr><td>筆畫反查（obh 引導）</td><td><img src="'+e+'" alt="" data-size="original"></td><td><ul><li>輸入 <code>obh</code> 後輸入筆畫碼</li><li>Rime 發行版內置五筆畫碼表時可用</li></ul></td></tr><tr><td>注音符號反查（ovy 引導）</td><td><img src="'+n+`" alt="" data-size="original"></td><td><ul><li>輸入 <code>ovy</code> 後依大千式注音符號佈局輸入</li><li>Rime 發行版內置地球拼音（terra_pinyin）時可用</li></ul></td></tr></tbody></table><h2 id="自定義反引號反查" tabindex="-1">自定義反引號反查 <a class="header-anchor" href="#自定義反引號反查" aria-label="Permalink to &quot;自定義反引號反查&quot;">​</a></h2><p>默認反引號 <code>\`</code> 引導虎碼反查。若您想要修改該行爲，可以參考如下 patch：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">patch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  reverse_tick/dictionary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">zrlf</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 設置爲反查用的詞典</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  reverse_tick/tips</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;〔兩分〕&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 詞典參考：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # zrlf: 自然兩分</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # stroke: 五筆畫</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # luna_pinyin: 朙月拼音（注：繁體優先）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # cangjie5: 倉頡五代</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # \` 只能接受 [a-zA-Z]+ 式的編碼，不支持其他編碼格式，因此不能設置爲注音符號等。</span></span></code></pre></div>`,7)]))}const D=d(h,[["render",c]]);export{A as __pageData,D as default};
