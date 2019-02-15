<template>
  <div>
    <div v-for="p in person">{{ p.gender }}</div>
  </div>
</template>

<script>
import { fetchL1000List } from '../api/index.js'

export default {
  data () {
    return {
      person: []
    }
  },
  created () {
    var vm = this
    fetchL1000List()
      .then(function (response) {
        console.log(response)
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
