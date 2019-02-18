<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post" v-bind:key="item">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
    <!-- <div v-for="item in this.$store.state.news" :key="item.title">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by
        <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link>
      </small>
    </div> -->
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('FETCH_NEWS')
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
