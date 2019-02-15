<template>
  <div class="header">
    <router-link to="./news">News</router-link> |
    <router-link to="./jobs">Jobs</router-link> |
    <router-link to="./ask">Ask</router-link>
  </div>
</template>

<script>
</script>

<style scoped>
  .header {
    color: white;
    background-color: aquamarine;
    display: flex;
    padding: 8px;
  }
  .header .router-link-exact-active {
    color: blueviolet;
  }
  .header a {
    color: white;
  }
</style>
