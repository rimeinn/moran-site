import{_ as e,c as r,a2 as i,o as d}from"./chunks/framework.CJ3Fe3Yg.js";const p=JSON.parse('{"title":"桌面平臺","description":"","frontmatter":{},"headers":[],"relativePath":"moran-docs/02.安装与维护/安装/桌面平台.md","filePath":"moran-docs/02.安装与维护/安装/桌面平台.md"}'),a={name:"moran-docs/02.安装与维护/安装/桌面平台.md"};function o(l,t,c,m,n,b){return d(),r("div",null,t[0]||(t[0]=[i('<h1 id="桌面平臺" tabindex="-1">桌面平臺 <a class="header-anchor" href="#桌面平臺" aria-label="Permalink to &quot;桌面平臺&quot;">​</a></h1><p>與 <a href="https://rime.im/download/" target="_blank" rel="noreferrer">鼠鬚管</a> (Squirrel) 和 <a href="https://github.com/fcitx-contrib/fcitx5-macos/" target="_blank" rel="noreferrer">fcitx5-macos</a> 兼容。</p><ul><li>鼠鬚管用戶目錄： <code>~/Library/Rime</code></li><li>fcitx5-macos 用戶目錄： <code>~/.local/share/fcitx5/rime</code></li></ul><p>與 <a href="https://rime.im/download/" target="_blank" rel="noreferrer">小狼毫 (Weasel)</a> 兼容。</p><p>與 ibus-rime、fcitx-rime 和 fcitx5-rime 兼容，請根據實際使用的輸入法平臺選擇合適的 Rime 前端。</p><p>由於「魔然」和「魔然·輔篩」方案的核心功能由 Lua 實作，因此您需要安裝 librime-lua 插件。如果不安裝，則無法使用這兩個方案，但您可以使用不依賴於 Lua 的「魔然·整句」和「魔然·字詞」。</p><p>依賴的版本信息：</p><ul><li><code>librime</code> &gt;= 1.8.5</li><li><code>librime-lua</code> &gt;= 2023 年 8 月</li><li><code>librime-octagram</code> (可選)</li></ul><h3 id="librime-插件信息彙總" tabindex="-1">librime 插件信息彙總 <a class="header-anchor" href="#librime-插件信息彙總" aria-label="Permalink to &quot;librime 插件信息彙總&quot;">​</a></h3><p>部分已知可用的發行版及其插件名：</p><table><thead><tr><th width="277">發行版</th><th>librime-lua 插件對應包</th><th>librime-octagram 插件對應包</th></tr></thead><tbody><tr><td>AOSC OS</td><td>✅ 已內置於 librime</td><td>✅ 已內置於 librime</td></tr><tr><td>Arch Linux</td><td>✅ 已內置於 librime</td><td>✅ 已內置於 librime</td></tr><tr><td>Debian &gt;= 13 &quot;trixie&quot;</td><td><code>librime-plugin-lua</code></td><td><code>librime-plugin-octagram</code></td></tr><tr><td>Ubuntu &gt;= 24.04</td><td><code>librime-plugin-lua</code></td><td><code>librime-plugin-octagram</code></td></tr><tr><td>openSUSE Tumbleweed</td><td><code>librime-lua</code></td><td>❌ 無打包</td></tr><tr><td>Fedora = 40</td><td><code>librime-lua</code></td><td>❌ 無打包</td></tr><tr><td>Fedora &gt;= 41</td><td><code>librime-lua</code></td><td>❌ 無打包</td></tr></tbody></table><p>其他發行版請自行查閱相關信息。</p>',12)]))}const s=e(a,[["render",o]]);export{p as __pageData,s as default};
