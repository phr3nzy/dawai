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
          'Find any medicine you need by location. Manage your pharmacys inventory, sales and finances with a beautiful dashboard'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
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
    // Doc: https://axios.nuxtjs.org/usage'nuxt-helmet',
    [
      'nuxt-social-meta',
      {
        url: 'https://dawai.herokuapp.com',
        title: 'Dawai - Medicine Locator and Pharmacy Management',
        description:
          'Find any medicine you need by location. Manage your pharmacys inventory, sales and finances with a beautiful dashboard.',
        locale: 'en-US',
        twitter: '@_phr3nzy',
        img: '/logo-text-whitebg.png',
        themeColor: '#3A005F'
      }
    ],
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Manifest setup
   */
  manifest: {
    name: 'Dawai - Medicine Locator and Pharmacy Management',
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
    hostname: 'https://dawai.herokuapp.com',
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
          accent: colors.grey.darken3,
          secondary: '#64D977',
          info: colors.teal.lighten1,
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
