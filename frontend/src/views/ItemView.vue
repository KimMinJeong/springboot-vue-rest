<template>
  <div>
    <p>id : {{ itemInfo.id }}</p>
    <p>domain : {{ itemInfo.domain }}</p>
    <p>type : {{ itemInfo.type }}</p>
    <p>time : {{ itemInfo.time }}</p>
    <p>time_ago : {{ itemInfo.time_ago }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo () {
      return this.$store.state.item
    }
  },
  created () {
    const item = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', item)
  }
}
</script>

<style>
</style>
