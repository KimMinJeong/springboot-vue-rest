<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Toolbar></Toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
</style>
