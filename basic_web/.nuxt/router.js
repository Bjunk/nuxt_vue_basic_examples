import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _530123b2 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _59e9cc8e = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _ce0e0f9a = () => interopDefault(import('../pages/signin/index.vue' /* webpackChunkName: "pages/signin/index" */))
const _67dcbe02 = () => interopDefault(import('../pages/solutions/index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _1539c734 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _530123b2,
    name: "about"
  }, {
    path: "/login",
    component: _59e9cc8e,
    name: "login"
  }, {
    path: "/signin",
    component: _ce0e0f9a,
    name: "signin"
  }, {
    path: "/solutions",
    component: _67dcbe02,
    name: "solutions"
  }, {
    path: "/",
    component: _1539c734,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
