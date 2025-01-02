import{_ as a,c as s,a4 as i,o as e}from"./chunks/framework.NOSrbWr_.js";const k=JSON.parse('{"title":"技术细节","description":"","frontmatter":{"order":3,"title":"技术细节"},"headers":[],"relativePath":"zh-Hans/book/schemas/zici/implementation.md","filePath":"zh-Hans/book/schemas/zici/implementation.md"}'),n={name:"zh-Hans/book/schemas/zici/implementation.md"};function l(d,t,h,r,p,o){return e(),s("div",null,t[0]||(t[0]=[i(`<h1 id="技术细节" tabindex="-1">技术细节 <a class="header-anchor" href="#技术细节" aria-label="Permalink to &quot;技术细节&quot;">​</a></h1><h2 id="造词键的实现" tabindex="-1">造词键的实现 <a class="header-anchor" href="#造词键的实现" aria-label="Permalink to &quot;造词键的实现&quot;">​</a></h2><p>约束条件：</p><ul><li>希望主翻译器可以不受调频影响</li><li>希望用户词语出现在系统词语之后</li></ul><p>已知：</p><ul><li>Rime 自带的造词机能依赖于 sentence</li></ul><p>依次可导出三个 translator：</p><table tabindex="0"><thead><tr><th>翻译器命名空间</th><th>用途</th><th>enable_user_dict</th><th>enable_sentence</th></tr></thead><tbody><tr><td>translator</td><td>主翻译器，只显示系统词</td><td>false</td><td>false</td></tr><tr><td>fixed</td><td>读取用户词，放置在系统词之后</td><td>true</td><td>false</td></tr><tr><td>zkci</td><td>只造词</td><td>false</td><td>true</td></tr></tbody></table><p>设计一个 pattern，使得某个特殊键（如 <code>&#39;</code> ）引导的输入进入 zkci 翻译器：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">recognizer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  import_preset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  patterns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    zkci</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^[a-z]*&#39;[a-z&#39;]*$&quot;</span></span></code></pre></div>`,10)]))}const m=a(n,[["render",l]]);export{k as __pageData,m as default};
