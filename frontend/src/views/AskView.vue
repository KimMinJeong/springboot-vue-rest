<template>
  <div>
    <div v-for="item in itemAsk" :key="item.title">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by
        <router-link v-bind:to="`item/${item.id}`">{{ item.id }}</router-link>
      </small>
    </div>
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
