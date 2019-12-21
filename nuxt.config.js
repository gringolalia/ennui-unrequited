const pkg = require('./package')

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.1/js/uikit.min.js' },
      { src: 'node_modules/uikit/dist/js/uikit.min.js' },
      { src: 'node_modules/uikit/dist/js/uikit-icons.min.js' }

    ],
    title: "You Initiate Kendo",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/csss', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.1/css/uikit.min.css'},
      { rel: 'stylesheet', type: 'text/csss', href: 'https://fonts.googleapis.com/css?family=News+Cycle|Material+Icons' },
      { rel: 'stylesheet', type: 'text/csss', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#607d8b' },

  /*
  ** Global CSS
  */
  css: [
      // '@/assets/scss/main.css'
      // '@/assets/scss/custom.scss'
      '@/node_modules/uikit/dist/css/uikit.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/vuetify',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  generate: {
    dir: 'public'
  }
}