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
      { text: '教程', link: '/moran-docs' }
    ],

    sidebar: {
      "/moran-docs": set_sidebar("moran-docs") ,
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
      // VitePress Sidebar's options here..
      documentRootPath: '/',
      collapsed: true,
      // sortMenusByFrontmatterOrder: true,
      prefixSeparator: '.',
      removePrefixAfterOrdering: true,
      excludeFilesByFrontmatterFieldName: 'exclude',
      scanStartPath: 'moran-docs',
      resolvePath: '/moran-docs/',
      // sortFolderTo:  'bottom',
      // useTitleFromFrontmatter: true,
    },
  {
    // // VitePress Sidebar's options here..
    // documentRootPath: '/',
    // collapsed: false,
    // capitalizeFirst: true,
    // sortMenusByFrontmatterOrder: true,
    // excludeFilesByFrontmatterFieldName: 'exclude',
    // scanStartPath: 'config',
    // resolvePath: '/config/',
    // useTitleFromFrontmatter: true,
  }
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));