import Vue from 'vue'
import Router from 'vue-router'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'

Vue.use(Router)

export default new Router({
  // 기본 http://locahost:8080/#/ 해쉬값 제거 기능
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
})
