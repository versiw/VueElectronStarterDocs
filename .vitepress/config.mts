import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VueElectronStarter',
  description: '基于 electron-vite 的 Vue 3 桌面应用起始模板项目',
  head: [['link', { rel: 'icon', href: 'src/public/logo.svg' }]],
  srcDir: 'src',
  base: '/VueElectronStarterDocs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/intro' },
      {
        text: '链接',
        items: [
          { text: 'Vue.js', link: 'https://cn.vuejs.org/', target: '_blank' },
          { text: 'electron-vite', link: 'https://cn.electron-vite.org/', target: '_blank' },
          {
            text: 'Electron',
            link: 'https://www.electronjs.org/zh/docs/latest/',
            target: '_blank'
          },
          { text: 'Naive UI', link: 'https://www.naiveui.com/zh-CN/os-theme', target: '_blank' },
          { text: 'Vite', link: 'https://cn.vitejs.dev/', target: '_blank' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/zh/', target: '_blank' }
        ]
      }
    ],

    sidebar: [
      {
        text: '指南',
        items: [{ text: '简介', link: '/intro' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/versiw/VueElectronStarter' }]
  }
})
