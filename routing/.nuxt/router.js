import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _390a867e = () => interopDefault(import('../pages/mountains.vue' /* webpackChunkName: "pages/mountains" */))
const _a6907a3c = () => interopDefault(import('../pages/parent.vue' /* webpackChunkName: "pages/parent" */))
const _476b17e5 = () => interopDefault(import('../pages/parent/index.vue' /* webpackChunkName: "pages/parent/index" */))
const _71e0af2f = () => interopDefault(import('../pages/parent/child.vue' /* webpackChunkName: "pages/parent/child" */))
const _6b663fda = () => interopDefault(import('../pages/parent/child2.vue' /* webpackChunkName: "pages/parent/child2" */))
const _22c2bc6c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _262ffefc = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))
const _6c0328ca = () => interopDefault(import('../pages/_continent/_mountain.vue' /* webpackChunkName: "pages/_continent/_mountain" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/mountains",
    component: _390a867e,
    name: "mountains"
  }, {
    path: "/parent",
    component: _a6907a3c,
    children: [{
      path: "",
      component: _476b17e5,
      name: "parent"
    }, {
      path: "child",
      component: _71e0af2f,
      name: "parent-child"
    }, {
      path: "child2",
      component: _6b663fda,
      name: "parent-child2"
    }]
  }, {
    path: "/",
    component: _22c2bc6c,
    name: "index"
  }, {
    path: "/:slug",
    component: _262ffefc,
    name: "slug"
  }, {
    path: "/:continent/:mountain?",
    component: _6c0328ca,
    name: "continent-mountain"
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
