<template>
  <div>
    <div v-for="p in itemAsk" :key="p.title">{{ p.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // #3
    ...mapGetters({
      itemAsk: 'fetchedAsk'
    })
    // #2
    // ...mapState({
    //  fechedAsk: state => state.ask
    // })

    // #1
    // ask () {
    //  return this.$store.state.ask()
    // }
  },
  created () {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>
</style>
