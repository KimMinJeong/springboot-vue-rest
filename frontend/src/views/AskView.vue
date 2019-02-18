<template>
  <div>
    <div v-for="p in this.$store.state.ask" :key="p.title">{{ p.title }}</div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>
</style>
