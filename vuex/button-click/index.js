// storeの作成
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,

    // methods is equal below.
    // increment (state) {
    //   state.count++
    // },
    // decrement (state) {
    //   state.count--
    // },
  }
})

new Vue({
  el: '#app',
  computed: {
    count(){
      return store.state.count
    }
  },
  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
})
// console.log(store.state)
// console.log(store.state.count)
// // storeのincreamentメソッド呼ぶ
// store.commit('increment')
// console.log(store.state)
// console.log(store.state.count)
// // storeのdecreamentメソッド呼ぶ
// store.commit('decrement')
// console.log(store.state)
// console.log(store.state.count)