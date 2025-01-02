import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "魔然",
  description: "moran",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/book' }
    ],

    sidebar: {
      "/book": set_sidebar("book") ,
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
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


    socialLinks: [
      { icon: 'github', link: 'https://github.com/rimeinn/rime-moran' }
    ]
  }
};

const vitePressSidebarOptions = [
    {
        documentRootPath: '/',
        scanStartPath: 'book',
        resolvePath: '/book/',
        collapsed: true,
        collapseDepth: 2,
        excludeFilesByFrontmatterFieldName: 'exclude',
        sortMenusByFrontmatterOrder: true,
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
    },
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
