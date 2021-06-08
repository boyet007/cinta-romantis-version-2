import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3485de4e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5265e626 = () => interopDefault(import('..\\pages\\google.vue' /* webpackChunkName: "pages/google" */))
const _12d2a496 = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages/icons" */))
const _4beda938 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _327e11d0 = () => interopDefault(import('..\\pages\\regular.vue' /* webpackChunkName: "pages/regular" */))
const _753f8ce6 = () => interopDefault(import('..\\pages\\rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _7a8e84c1 = () => interopDefault(import('..\\pages\\starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _0ebad474 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _0fa3ea3a = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages/typography" */))
const _2d1af87f = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _09819e78 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _3485de4e,
    name: "index___ar"
  }, {
    path: "/google",
    component: _5265e626,
    name: "google___en"
  }, {
    path: "/icons",
    component: _12d2a496,
    name: "icons___en"
  }, {
    path: "/notifications",
    component: _4beda938,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _327e11d0,
    name: "regular___en"
  }, {
    path: "/rtl",
    component: _753f8ce6,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _7a8e84c1,
    name: "starter-page___en"
  }, {
    path: "/test",
    component: _0ebad474,
    name: "test___en"
  }, {
    path: "/typography",
    component: _0fa3ea3a,
    name: "typography___en"
  }, {
    path: "/user",
    component: _2d1af87f,
    name: "user___en"
  }, {
    path: "/ar/google",
    component: _5265e626,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _12d2a496,
    name: "icons___ar"
  }, {
    path: "/ar/notifications",
    component: _4beda938,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _327e11d0,
    name: "regular___ar"
  }, {
    path: "/ar/rtl",
    component: _753f8ce6,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _7a8e84c1,
    name: "starter-page___ar"
  }, {
    path: "/ar/test",
    component: _0ebad474,
    name: "test___ar"
  }, {
    path: "/ar/typography",
    component: _0fa3ea3a,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _2d1af87f,
    name: "user___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _09819e78,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _09819e78,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _3485de4e,
    name: "index___en"
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
