import axios from 'axios'

// 1. HTTP Request & Response와 관련된 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을
// L1000
function fetchL1000List () {
  // return axios.get(config.baseUrl + 'L1000')
  return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchL1001List () {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchL1002List () {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchUserInfo (username) {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

export {
  fetchL1000List,
  fetchL1001List,
  fetchL1002List,
  fetchUserInfo
}
