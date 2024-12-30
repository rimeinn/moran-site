import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.CJ3Fe3Yg.js";const t="/assets/image%20(83).CH4zcGeQ.png",E=JSON.parse('{"title":"特性說明","description":"","frontmatter":{},"headers":[],"relativePath":"moran-docs/07.其他模式/01.魔然辅筛方案/特性说明.md","filePath":"moran-docs/07.其他模式/01.魔然辅筛方案/特性说明.md"}'),l={name:"moran-docs/07.其他模式/01.魔然辅筛方案/特性说明.md"};function p(h,s,r,o,d,k){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="特性說明" tabindex="-1">特性說明 <a class="header-anchor" href="#特性說明" aria-label="Permalink to &quot;特性說明&quot;">​</a></h1><h2 id="固定一簡或二簡" tabindex="-1">固定一簡或二簡 <a class="header-anchor" href="#固定一簡或二簡" aria-label="Permalink to &quot;固定一簡或二簡&quot;">​</a></h2><p>編輯 <code>moran_aux.custom.yaml</code> ，按如下格式設置自己喜歡的固定一簡或二簡。目前不支持三簡以上的設定。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">patch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  moran/fix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">啊</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">不</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">次</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 以此類推</span></span></code></pre></div><h2 id="掛接固定碼表" tabindex="-1">掛接固定碼表 <a class="header-anchor" href="#掛接固定碼表" aria-label="Permalink to &quot;掛接固定碼表&quot;">​</a></h2><p>所謂的掛接是指將字詞模式的碼表作爲首選輸出出來，從而提升確定性，實現高速盲打。配置已經包含了相關設置，但默認被禁用了。</p><p>開啓掛接的方法是，編輯 <code>moran_aux.schema.yaml</code> ，解除 <code>engine/translators</code> 中 <code>table_translator@fixed</code> 一行的註釋。可以搜索「掛接」二字定位到這一行。</p><figure><img src="`+t+'" alt=""><figcaption></figcaption></figure>',8)]))}const g=a(l,[["render",p]]);export{E as __pageData,g as default};
