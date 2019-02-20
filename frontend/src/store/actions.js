// store/index.js actions 부분 모듈화
import { fetchL1000List, fetchL1001List, fetchL1002List, fetchUserInfo, fetchItemInfo } from '../api/index.js'

export default {
  FETCH_NEWS (context) {
    fetchL1000List()
      .then(response => {
        console.log(response)
        // Actions에서 commit을 해서 mutation에 값을 넘길 수 있다.
        context.commit('SET_NEWS', response.data)
        return response
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_ASK ({ commit }) {
    fetchL1002List()
      .then(({ data }) => {
        console.log(data)
        commit('SET_ASK', data)
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
  },
  FETCH_USER ({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_ITEM ({ commit }, item) {
    fetchItemInfo(item)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
