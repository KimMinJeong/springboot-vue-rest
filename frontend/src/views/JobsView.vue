<template>
  <div>
    <div v-for="p in person">{{ p.name }}</div>
  </div>
</template>

<script>
import { fetchL1001List } from '../api/index.js'

export default {
  data() {
    return {
      person: []
    }
  },
  created() {
    // 화살표 함수 사용
    var vm = this
    fetchL1001List()
      .then(responseType => vm.person = responseType.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>
</style>
