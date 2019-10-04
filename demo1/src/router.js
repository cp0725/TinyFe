import Vue from 'vue'
import Router from 'vue-router'
import A from './components/a'
import B from './components/b'
import C from './components/c'

Vue.use(Router)

const R = new Router({
  routes: [
    {
      path: '/app1/a',
      name: 'a',
      component: A
    },
    {
      path: '/app1/b',
      name: 'b',
      component: B
    },
    {
      path: '/app1/c',
      name: 'c',
      component: C
    }
  ]
})

R.beforeEach((to, from, next) => {
  window.hashChange && window.hashChange(to, from, next)
  next()
})

export default R