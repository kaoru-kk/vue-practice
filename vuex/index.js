// storeの作成
const store = new Vuex.Store({
  state: {
    count: 0,
    two: 2
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
  }
})

const Counter = {
  template: `<div> {{ count }} </div>`,
  computed: {
    count (){
      return this.$store.state.count + this.$store.state.two
    }
  }
}


const app = new Vue({
  el: '#app',
  // "store" オプションで指定されたストアは、全ての子コンポーネントに注入されます
  store,
  components: { Counter },
  template: `
    <div class="app">
      <Counter></Counter>
    </div>
  `
})