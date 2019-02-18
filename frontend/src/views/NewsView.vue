<template>
  <div>
    <div v-for="p in this.$store.state.news" :key="p.title">{{ p.title }}</div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>
</style>
