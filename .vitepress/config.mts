import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GoldGiveaway",
  titleTemplate: ":title • GoldGiveaway",
  description: "Open-source Telegram бот для розыгрышей",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Перейти в бот', link: 'https://t.me/GoldGiveaway_bot' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoldGiveaway/telegram-bot' },
      { icon: 'telegram', link: 'https://t.me/isSteam' },
    ]
  }
})
