import axios from 'axios'

// 1. HTTP Request & Response와 관련된 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을
function fetchList (pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo (username) {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchItemInfo (item) {
  return axios.get(`${config.baseUrl}item/${item}.json`)
}
export {
  fetchList,
  fetchUserInfo,
  fetchItemInfo
}
