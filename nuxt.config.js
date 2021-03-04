module.exports = {
  env: {
    name: 'Xedrum'
  },
  head: {
    title: 'Xedrum',
    htmlAttrs: {
      lang: 'uk-UA',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Xedrum - це місце, де можна отримати корисну і цікаву інформацію, яка допоможе рухатися далі...' },
      { name: 'theme-color', content: '#343434' },
      { name: 'msapplication-navbutton-color', content: '#343434' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#343434' },
    ],
    script: [
      // AdSense
      // {
      //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      //   async: true
      // },
      // {
      //   innerHTML: `
      //     (adsbygoogle = window.adsbygoogle || []).push({
      //       google_ad_client: "ca-pub-3387156752770615",
      //       enable_page_level_ads: true
      //     });
      //   `
      // },
      // Analytics
      // {
      //   src: 'https://www.googletagmanager.com/gtag/js?id=UA-147959953-1', 
      //   async: true
      // },
      // { 
      //   innerHTML: `
      //     window.dataLayer = window.dataLayer || [];
      //     function gtag(){dataLayer.push(arguments);}
      //     gtag('js', new Date());
      //     gtag('config', 'UA-147959953-1');
      //   `
      // }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/xedrum-font.css' }
    ]
  },
  generate: {
    routes: [
      '/',
      '/2',
      '/3',
      '/posts/new-way-of-healing',
      '/posts/after-school',
      '/posts/lose-to-win',
      '/posts/stop-wasting-your-life',
      '/posts/kill-laziness',
      '/posts/what-is-depression',
      '/posts/friends-forever',
      '/posts/confidence',
      '/posts/fear-of-exams',
      '/posts/child-mirror',
      '/posts/business-part-1',
      '/posts/how-to-show-love',
      '/posts/smoking',
      '/posts/boarding-school',
      '/categories/psychology',
      '/categories/psychology/2',
      '/categories/psychology/3',
      '/categories/tech',
    ],
    fallback: true
  },
  loading: { color: '#000' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}