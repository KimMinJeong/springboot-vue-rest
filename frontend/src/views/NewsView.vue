<template>
  <div>
    <div v-bind:key="user in person">{{ user }}</div>
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
    axios.get('http://localhost:8445/v1/test/ping')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
