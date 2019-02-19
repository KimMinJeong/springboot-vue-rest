<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post" v-bind:key="item">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('FETCH_NEWS')

    const name = this.$route.name

    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS')
    } else if (name === 'ask') {
      this.$store.dispatch('FETCH_ASK')
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS')
    }
  },
  computed: {
    listItems () {
      const name = this.$route.name

      if (name === 'news') {
        return this.$store.state.news
      } else if (name === 'ask') {
        return this.$store.state.ask
      } else if (name === 'jobs') {
        return this.$store.state.jobs
      }
    }
  }
}
</script>

<style scoped>
  .news-list {
    margin: 0px;
    padding: 0px;
  }
  .post {
    display: flex;
    list-style: none;
    align-items: center;
    boder-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    heigth: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .news-title {
    margin: 0;
  }
  .link-text {

  }
</style>
