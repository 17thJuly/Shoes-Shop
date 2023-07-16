const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',
    ssr: false ,
    lintOnSave:true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s Store',
    title: 'Shoes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/animate.css/animate.css',
    '@/assets/mixin.scss',
     '@/assets/cart.scss',
     '@/assets/checkout.scss',
     '@/assets/home-page.scss',
     '@/assets/details.scss',
    '@/node_modules/element-ui/packages/theme-chalk/src/index.scss',
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/snackbar',
     '@/plugins/context',
     '@/plugins/validation',
     '@/plugins/croppie',
     '@/plugins/element-ui',
     '@/plugins/vue-numeric'
   ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/ArletLogin.vue",
    "~/components/UploadAvata.vue",
    "~/components/Pagination.vue",
    
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
   
    
  ],
  styleResources: {
    scss: [
      '~/node_modules/animate.css/animate.css',
      '~/assets/mixins.scss',
      '~/assets/cart.css'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:["three"],
    extend (config, ctx) {
    },
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },  
  
  
  serverMiddleware: [ 
  ]
}
