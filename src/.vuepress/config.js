const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Financiamiento Comunitario [Docs]',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1252F7' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Concepto',
        link: '/concepto/',
      },
      {
        text: 'Versiones',
        link: '/versiones/'
      },
      {text: 'Repositorio',
    link: 'https://github.com/postdigitalist/fondo-comunitario-somosgay'}
    ],
    sidebar: {
      '/concepto/': [
        {
          title: 'Concepto',
          collapsable: true,
          children: [
            '',
            'nuestros-usuarios',
            'user-personas',
            'glosario'
          ]
        }
      ],
      '/versiones/': [
        {
          title: 'Versiones',
          collapsable: true,
          children: [
            '',
            'flujos-beta'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
