<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Toolbar></Toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
