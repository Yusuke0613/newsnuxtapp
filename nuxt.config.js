const pkg = require("./package");

module.exports = {
  mode: "spa",
  router: {
    middleware: "check-auth"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#9ccc65" },
  /*
  ** Global CSS
  */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-material" },
    //{ src: "~/plugins/vue-masonry" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
  ** Axios module configuration
  */
  env :{
    NEWS_API_KEY: "944460e459b64cc0a3429dc2341a33ae"
  },
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: {"^/api/": ""}
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD1rBldrq51xGXYvfIShh0VWEZZIFupSJg",
      pathRewrite: { "^/register/": "" }
    },
    "/login/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD1rBldrq51xGXYvfIShh0VWEZZIFupSJg",
      pathRewrite: { "^/login/": "" }
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
};
