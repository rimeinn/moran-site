import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "魔然",
  description: "魔改自然碼",
  markdown: {
    math: true
  },
  locales: {
    root: {
      label: '傳承字',
      lang: 'zh-Hant',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/' },
          { text: '說明書', link: '/book' },
          { text: '查字', link: '/moran' },
        ],
      }
    },
    'zh-Hans': {
      label: '简化字',
      lang: 'zh-Hans',
      link: '/zh-Hans',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-Hans' },
          { text: '说明书', link: '/zh-Hans/book' },
          { text: '查字', link: '/zh-Hans/lookup' },
        ],
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rimeinn/rime-moran' }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文檔",
                buttonAriaLabel: "搜索文檔",
              },
              modal: {
                noResultsText: "無法找到相關結果",
                resetButtonTitle: "清除查詢條件",
                footer: {
                  selectText: "選擇",
                  navigateText: "切換",
                },
              },
            }
          },
          'zh-Hans': {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['fcitx5-rime'],
    },
  },
};

const bookSidebarRootOptions = {
  collapsed: true,
  collapseDepth: 2,
  excludeFilesByFrontmatterFieldName: 'exclude',
  sortMenusByFrontmatterOrder: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
}

const vitePressSidebarOptions = [{
  scanStartPath: 'book',
  resolvePath: '/book/',
  ...bookSidebarRootOptions
}, {
  scanStartPath: 'zh-Hans/book',
  resolvePath: '/zh-Hans/book/',
  ...bookSidebarRootOptions
}];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
