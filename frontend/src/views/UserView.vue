<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
    <p>about: {{ userInfo.about }}</p>
  </div>
</template>

<script>
export default {
  // computed userInfo 축약
  computed: {
    userInfo () {
      return this.$store.state.user
    }
  },
  created () {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>
</style>
