import Vue from 'vue'
import Vuex from 'vuex'
import { fetchL1000List, fetchL1001List, fetchL1002List } from '../api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  mutations: {
    SET_NEWS (state, news) {
      state.news = news
    },
    SET_ASK (state, ask) {
      state.ask = ask
    },
    SET_JOBS (state, jobs) {
      state.jobs = jobs
    }
  },
  actions: {
    FETCH_NEWS (context) {
      fetchL1000List()
        .then(response => {
          console.log(response)
          // Actions에서 commit을 해서 mutation에 값을 넘길 수 있다.
          context.commit('SET_NEWS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    FETCH_ASK (context) {
      fetchL1002List()
        .then(response => {
          console.log(response)
          context.commit('SET_ASK', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    FETCH_JOBS ({ commit }) {
      fetchL1001List()
        .then(({ data }) => {
          console.log(data)
          commit('SET_JOBS', data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
