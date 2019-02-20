import ListView from './ListView'
import bus from '../utils/bus.js'

// High Order Component - 컴포넌트 재활용 활용
export default function createListView (name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    created () {
      // spinner emit
      bus.$emit('start:spinner')

      // 시간 줘서 보이게
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched')
            bus.$emit('end:spinner')
          })
          .catch((error) => {
            console.log(error)
          })
        bus.$emit('end:spinner')
      }, 3000)
    },
    render (createElement) {
      return createElement(ListView)
    }
  }
}
