export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'authentication',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    // Auth
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                    // required: true,
                    type: 'Bearer'
                },
                user: {
                    property: 'user',
                    // autoFetch: true
                },
                endpoints: {
                    login: { url: '/request-token/', method: 'post' },
                    logout: { url: '/session/logout/', method: 'post' },
                    user: { url: '/session/user/', method: 'get' }
                }
            }
        },
        redirect: {
            logout: '/login',
        },
        watchLoggedIn: true,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    router: {
        middleware: ['auth']
    },

    // Authentication URL

    axios: {
        baseURL: 'https://auth.dxs.cloud',
        /*
        headers: {
            'Access-Control-Allow-Origin': 'https://auth.dxs.cloud',
            'Vary': 'Origin',
        }*/
    }

    /*
    axios: {
        proxy: true
    },

    proxy: {
        '/request-token/': { target: 'https://auth.dxs.cloud/', changeOrigin: true },
        '/session/logout/': { target: 'https://auth.dxs.cloud/', changeOrigin: true },
        '/session/user/': { target: 'https://auth.dxs.cloud/', changeOrigin: true }
    }
    */
}