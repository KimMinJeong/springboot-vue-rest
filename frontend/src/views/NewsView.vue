<template>
  <div>
    <div v-for="p in person">{{ p.name }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      person: []
    }
  },
  created () {
    var vm = this
    axios.get('http://localhost:8445/v1/test/ping')
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
