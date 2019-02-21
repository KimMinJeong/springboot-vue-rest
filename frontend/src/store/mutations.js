// store/index.js mutation 부분 모듈화
export default {
  SET_USER (state, user) {
    state.user = user
  },
  SET_ITEM (state, item) {
    state.item = item
  },
  SET_LIST (state, list) {
    state.list = list
  }
}
