import{_ as a,c as i,a4 as e,o as n}from"./chunks/framework.NOSrbWr_.js";const r=JSON.parse('{"title":"實例：替換輔助碼","description":"","frontmatter":{"order":102,"title":"實例：替換輔助碼"},"headers":[],"relativePath":"book/tools/schemagen/example-auxcode.md","filePath":"book/tools/schemagen/example-auxcode.md"}'),t={name:"book/tools/schemagen/example-auxcode.md"};function p(l,s,h,d,c,o){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="實例-替換輔助碼" tabindex="-1">實例：替換輔助碼 <a class="header-anchor" href="#實例-替換輔助碼" aria-label="Permalink to &quot;實例：替換輔助碼&quot;">​</a></h1><h2 id="數據準備" tabindex="-1">數據準備 <a class="header-anchor" href="#數據準備" aria-label="Permalink to &quot;數據準備&quot;">​</a></h2><p>將想要的輔助碼按「一行一字、空格分隔」的格式寫入 <code>data/userdb.txt</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我 ab</span></span>
<span class="line"><span>我 cd</span></span>
<span class="line"><span>你 ef</span></span></code></pre></div><p>其中，一個字可以含有多個輔助碼。第一個輔助碼被稱作「正碼」，剩下的被視作容錯碼。</p><h2 id="單字" tabindex="-1">單字 <a class="header-anchor" href="#單字" aria-label="Permalink to &quot;單字&quot;">​</a></h2><p>涉及 <code>moran.chars.dict.yaml</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schemagen.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --auxiliary-code=user</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  gen-chars</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果主要使用簡化字，請設置相應拼音表。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schemagen.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --pinyin-table=data/pinyin_simp.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --auxiliary-code=user</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  gen-chars</span></span></code></pre></div></div><h2 id="整句詞庫" tabindex="-1">整句詞庫 <a class="header-anchor" href="#整句詞庫" aria-label="Permalink to &quot;整句詞庫&quot;">​</a></h2><p>涉及 chars 和 fixed 之外的 compact dict。compact dict 中所有詞都有完整編碼，比較易於識別。也可以查看 <code>update-compact-dicts.sh</code> 中的列表。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schemagen.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --auxiliary-code=user</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  update-compact-dict</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rime-dict=../moran.foo.dict.yaml</span></span></code></pre></div><h2 id="簡碼詞庫" tabindex="-1">簡碼詞庫 <a class="header-anchor" href="#簡碼詞庫" aria-label="Permalink to &quot;簡碼詞庫&quot;">​</a></h2><p>建議使用 <code>gen-fixed</code> 重新生成簡碼。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schemagen.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --auxiliary-code=user</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  gen-fixed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --charset=data/trad_chars.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --input-dict=data/trad_words.txt</span></span></code></pre></div>`,15)]))}const g=a(t,[["render",p]]);export{r as __pageData,g as default};
