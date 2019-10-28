import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + 'Dawai',
    title: 'Dawai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Keep tabs on medicine on inventory, track your performance, manage expenses and finances, create invoices and more!'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#19E51C', height: '3px' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-helmet',
    [
      'nuxt-social-meta',
      {
        url: 'https://dawai-ph.herokuapp.com',
        title: 'Dawai - Your Complete Pharmacy Management System',
        description:
          'Keep tabs on medicine on inventory, track your performance, manage expenses and finances, create invoices and more!',
        locale: 'en-US',
        twitter: '@_phr3nzy',
        img: '/logo-text-whitebg.png',
        themeColor: '#3A005F'
      }
    ],
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-leaflet',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Manifest setup
   */
  manifest: {
    name: 'Dawai - Your Complete Pharmacy Management System',
    short_name: 'Dawai',
    lang: 'en',
    display: 'standalone',
    start_url: '/',
    orientation: 'portrait',
    background_color: '#fff',
    theme_color: '#3A005F'
  },
  /*
   ** Page Routing Transition
   */
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
   ** Layout change transition
   */
  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Web font loader configuration
   */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap']
    }
  },
  /*
   ** Sitemap module configuration
   */
  sitemap: {
    hostname: 'https://dawai-ph.herokuapp.com',
    gzip: true,
    routes: ['/']
  },
  /*
   ** Robots module configuration
   */
  robots: [{ UserAgent: '*', Disallow: '' }],
  /*
   ** Router configuration
   */
  router: {
    middleware: ['mobile']
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#3A005F',
          accent: '#2571BF',
          secondary: '#19E51C',
          info: colors.teal.lighten1,
          danger: colors.red.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
