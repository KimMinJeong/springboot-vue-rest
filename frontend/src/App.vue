<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Toolbar></Toolbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import Spinner from './components/Spinner'
import bus from './utils/bus.js'

export default {
  name: 'App',
  components: {
    Spinner,
    Toolbar
  },
  data () {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner () {
      this.loadingStatus = true
    },
    endSpinner () {
      this.loadingStatus = false
    }
  },
  created () {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy () {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
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
