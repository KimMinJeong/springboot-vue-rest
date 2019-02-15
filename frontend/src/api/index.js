import axios from 'axios'

// 1. HTTP Request & Response와 관련된 설정
const config = {
  baseUrl: 'http://localhost:8445/v1/login/'
}

// 2. API 함수들을
// L1000
function fetchL1000List () {
  // return axios.get(config.baseUrl + 'L1000')
  return axios.get(`${config.baseUrl}L1000`)
}

function fetchL1001List () {
  return axios.get(`${config.baseUrl}L1001`)
}

function fetchL1002List () {
  return axios.get(`${config.baseUrl}L1002`)
}

export {
  fetchL1000List,
  fetchL1001List,
  fetchL1002List
}
