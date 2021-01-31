new Vue({
  el: '#app',
  data: {
    counter: 0,
    otherCounter: 0
    // date同士は参照できない
    // NG:　lessThanThree: this.count
  },
  // 算出プロパティ
  // dataプロパティのように扱う
  computed: {
    lessThanThreeComputed(){
      console.log('computed');
      return this.counter > 3  ? 'up 3' : 'down 3'
    }
  },
  methods: {
    // 関係ないクリックイベントが発火した時も再描画されるので、問題
    lessThanThreeMethod(){
      console.log('methods');
      return this.counter > 3  ? 'up 3' : 'down 3'
    }
  }
})