import Vue from 'vue'
import Router from 'vue-router'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import CreateListView from '../views/CreateListView'

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
      name: 'news',
      // component: NewsView
      component: CreateListView('NewsView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView
      component: CreateListView('JobsView')
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView
      component: CreateListView('AskView')
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
