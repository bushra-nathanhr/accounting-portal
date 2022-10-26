const colors = require('vuetify/es5/util/colors').default
const webpack = require("./node_modules/webpack");

module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/manifest.json' },
        ]
    },
    router: {
    },
    /*
     ** Customize the progress-bar color
     */
    env: {

    },
    /*
     ** Customize the progress-bar color
     */
    // loading: { color: '#fff' },
    /*
     ** Global CSS
     */
     css: [
        '@/assets/scss/global'
      ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
        '~/plugins/filters.js',
        '~/plugins/vue-excel.js',

        { src: '~plugins/quillEditorjs.js', ssr: false, mode: 'client' },
        { src: "~plugins/chartjs", ssr: false },
        // { src: "~plugins/emojiPicker", ssr: false }
        { src: '@/plugins/apexcharts', mode: 'client' },
    ],

    loading: false,

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',

    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        // '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/proxy',
        "@nuxtjs/auth-next",
    ],
   
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        // credentials: false,
        // baseURL: 'https://erpapi-dev.nathanhr.com/',
        // crossDomain: true,
        // https: true,
        // baseURL: 'http://localhost:4001/',
        // crossDomain: false,
        // https: false

        //proxy: true // Can be also an object with default options
    },
    //   auth module
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        treeShake: true,
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            light: true,
            themes: {
                light: {
                    primary: '#24576a',
                    // accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
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
        postcss:false,
        plugins: [
            
            new webpack.ProvidePlugin({
                _: "lodash",
                'window.Quill': 'quill/dist/quill.js',
                'Quill': 'quill/dist/quill.js'
            })
        ],
        extend(config, ctx) { }
    },
    server: {
        port: 5101,
    },
    telemetry: false
}
