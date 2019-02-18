<template>
  <div>
    <div v-for="p in this.$store.state.jobs" :key="p.title">{{ p.title }}</div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>
</style>
