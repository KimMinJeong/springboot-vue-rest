<template>
  <div>
    <div v-for="item in this.$store.state.jobs" :key="item.title">
      {{ item.title }}
      <a v-bind:href="item.url">{{ item.title }}</a>
    </div>
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
