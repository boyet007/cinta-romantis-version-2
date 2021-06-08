import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3485de4e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _96a3e984 = () => interopDefault(import('..\\pages\\pendaftaran.vue' /* webpackChunkName: "pages/pendaftaran" */))
const _510680f4 = () => interopDefault(import('..\\pages\\Template\\index.vue' /* webpackChunkName: "pages/Template/index" */))
const _0ebad474 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _09819e78 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _4a60bf07 = () => interopDefault(import('..\\pages\\Template\\google.vue' /* webpackChunkName: "pages/Template/google" */))
const _2f53473c = () => interopDefault(import('..\\pages\\Template\\icons.vue' /* webpackChunkName: "pages/Template/icons" */))
const _2db06fec = () => interopDefault(import('..\\pages\\Template\\notifications.vue' /* webpackChunkName: "pages/Template/notifications" */))
const _34b8ef84 = () => interopDefault(import('..\\pages\\Template\\regular.vue' /* webpackChunkName: "pages/Template/regular" */))
const _1ab4a10c = () => interopDefault(import('..\\pages\\Template\\rtl.vue' /* webpackChunkName: "pages/Template/rtl" */))
const _2876bb5b = () => interopDefault(import('..\\pages\\Template\\starter-page.vue' /* webpackChunkName: "pages/Template/starter-page" */))
const _38071ffd = () => interopDefault(import('..\\pages\\Template\\typography.vue' /* webpackChunkName: "pages/Template/typography" */))
const _36486919 = () => interopDefault(import('..\\pages\\Template\\user.vue' /* webpackChunkName: "pages/Template/user" */))

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
    path: "/pendaftaran",
    component: _96a3e984,
    name: "pendaftaran___en"
  }, {
    path: "/Template",
    component: _510680f4,
    name: "Template___en"
  }, {
    path: "/test",
    component: _0ebad474,
    name: "test___en"
  }, {
    path: "/ar/pendaftaran",
    component: _96a3e984,
    name: "pendaftaran___ar"
  }, {
    path: "/ar/Template",
    component: _510680f4,
    name: "Template___ar"
  }, {
    path: "/ar/test",
    component: _0ebad474,
    name: "test___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _09819e78,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/Template/google",
    component: _4a60bf07,
    name: "Template-google___en"
  }, {
    path: "/Template/icons",
    component: _2f53473c,
    name: "Template-icons___en"
  }, {
    path: "/Template/notifications",
    component: _2db06fec,
    name: "Template-notifications___en"
  }, {
    path: "/Template/regular",
    component: _34b8ef84,
    name: "Template-regular___en"
  }, {
    path: "/Template/rtl",
    component: _1ab4a10c,
    name: "Template-rtl___en"
  }, {
    path: "/Template/starter-page",
    component: _2876bb5b,
    name: "Template-starter-page___en"
  }, {
    path: "/Template/typography",
    component: _38071ffd,
    name: "Template-typography___en"
  }, {
    path: "/Template/user",
    component: _36486919,
    name: "Template-user___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _09819e78,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/ar/Template/google",
    component: _4a60bf07,
    name: "Template-google___ar"
  }, {
    path: "/ar/Template/icons",
    component: _2f53473c,
    name: "Template-icons___ar"
  }, {
    path: "/ar/Template/notifications",
    component: _2db06fec,
    name: "Template-notifications___ar"
  }, {
    path: "/ar/Template/regular",
    component: _34b8ef84,
    name: "Template-regular___ar"
  }, {
    path: "/ar/Template/rtl",
    component: _1ab4a10c,
    name: "Template-rtl___ar"
  }, {
    path: "/ar/Template/starter-page",
    component: _2876bb5b,
    name: "Template-starter-page___ar"
  }, {
    path: "/ar/Template/typography",
    component: _38071ffd,
    name: "Template-typography___ar"
  }, {
    path: "/ar/Template/user",
    component: _36486919,
    name: "Template-user___ar"
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
