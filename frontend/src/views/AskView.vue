<template>
  <div>
    <div v-for="p in person">{{ p.nickname }}</div>
  </div>
</template>

<script>
  import { fetchL1002List } from '../api/index.js'

  export default {
    data () {
      return {
        person: []
      }
    },
    created () {
      var vm = this
      fetchL1002List()
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
