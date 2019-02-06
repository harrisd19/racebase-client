import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _14020fcc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _ca9b4a84 = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _667a3f8c = () => interopDefault(import('../pages/developers.vue' /* webpackChunkName: "pages/developers" */))
const _053ce4b0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _01f47e67 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _2da14582 = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _75662c87 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _3685e82c = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _4490ae74 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _fd5766e6 = () => interopDefault(import('../pages/races/notfound.vue' /* webpackChunkName: "pages/races/notfound" */))
const _54aea296 = () => interopDefault(import('../pages/signup/claim.vue' /* webpackChunkName: "pages/signup/claim" */))
const _252ca980 = () => interopDefault(import('../pages/team/notfound.vue' /* webpackChunkName: "pages/team/notfound" */))
const _2d3343b4 = () => interopDefault(import('../pages/user/settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _3819db20 = () => interopDefault(import('../pages/user/log/week/_date.vue' /* webpackChunkName: "pages/user/log/week/_date" */))
const _7bbed076 = () => interopDefault(import('../pages/news/post/_name.vue' /* webpackChunkName: "pages/news/post/_name" */))
const _5f332bf2 = () => interopDefault(import('../pages/races/all/_page.vue' /* webpackChunkName: "pages/races/all/_page" */))
const _23a0fee5 = () => interopDefault(import('../pages/user/content/_page.vue' /* webpackChunkName: "pages/user/content/_page" */))
const _ddd457e2 = () => interopDefault(import('../pages/user/log/_date.vue' /* webpackChunkName: "pages/user/log/_date" */))
const _d7b3442e = () => interopDefault(import('../pages/athlete/_id.vue' /* webpackChunkName: "pages/athlete/_id" */))
const _e1b6b462 = () => interopDefault(import('../pages/search/_query.vue' /* webpackChunkName: "pages/search/_query" */))
const _5bdb17c6 = () => interopDefault(import('../pages/races/_id/_gender/_event.vue' /* webpackChunkName: "pages/races/_id/_gender/_event" */))
const _727679b7 = () => interopDefault(import('../pages/team/_id/_gender/_year.vue' /* webpackChunkName: "pages/team/_id/_gender/_year" */))
const _33b9ea91 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _15be5f1e = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _14020fcc,
      name: "about"
    }, {
      path: "/contribute",
      component: _ca9b4a84,
      name: "contribute"
    }, {
      path: "/developers",
      component: _667a3f8c,
      name: "developers"
    }, {
      path: "/login",
      component: _053ce4b0,
      name: "login"
    }, {
      path: "/news",
      component: _01f47e67,
      name: "news"
    }, {
      path: "/press",
      component: _2da14582,
      name: "press"
    }, {
      path: "/privacy",
      component: _75662c87,
      name: "privacy"
    }, {
      path: "/signup",
      component: _3685e82c,
      name: "signup"
    }, {
      path: "/terms",
      component: _4490ae74,
      name: "terms"
    }, {
      path: "/races/notfound",
      component: _fd5766e6,
      name: "races-notfound"
    }, {
      path: "/signup/claim",
      component: _54aea296,
      name: "signup-claim"
    }, {
      path: "/team/notfound",
      component: _252ca980,
      name: "team-notfound"
    }, {
      path: "/user/settings",
      component: _2d3343b4,
      name: "user-settings"
    }, {
      path: "/user/log/week/:date?",
      component: _3819db20,
      name: "user-log-week-date"
    }, {
      path: "/news/post/:name?",
      component: _7bbed076,
      name: "news-post-name"
    }, {
      path: "/races/all/:page?",
      component: _5f332bf2,
      name: "races-all-page"
    }, {
      path: "/user/content/:page?",
      component: _23a0fee5,
      name: "user-content-page"
    }, {
      path: "/user/log/:date?",
      component: _ddd457e2,
      name: "user-log-date"
    }, {
      path: "/athlete/:id?",
      component: _d7b3442e,
      name: "athlete-id"
    }, {
      path: "/search/:query?",
      component: _e1b6b462,
      name: "search-query"
    }, {
      path: "/races/:id?/:gender?/:event?",
      component: _5bdb17c6,
      name: "races-id-gender-event"
    }, {
      path: "/team/:id?/:gender?/:year?",
      component: _727679b7,
      name: "team-id-gender-year"
    }, {
      path: "/",
      component: _33b9ea91,
      name: "index"
    }, {
      path: "/*",
      component: _15be5f1e,
      name: "all"
    }],

    fallback: false
  })
}