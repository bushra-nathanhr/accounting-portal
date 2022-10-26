const CryptoJS = require("crypto-js")
export default async function (context) {
  context.redirect(context.route.path)
  context.store.app.router.beforeEach((to, from, next) => {
    next()
  })
}
