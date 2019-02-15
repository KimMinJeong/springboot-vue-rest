<template>
  <div>
    <div v-for="p in person">{{ p.name }}</div>
  </div>
</template>

<script>
import { fetchL1001List } from '../api/index.js'

export default {
  data () {
    return {
      person: []
    }
  },
  created () {
    var vm = this
    fetchL1001List()
      .then(function (response) {
        console.log(response);
        vm.person = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
