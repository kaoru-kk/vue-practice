new Vue({
  el: '#app',
  data: {
    counter: 0
    // date同士は参照できない
    // NG:　lessThanThree: this.count
  },
  // 算出プロパティ
  // dataプロパティのように扱う
  computed: {
    lessThanThree(){
      return this.counter > 3  ? 'up 3' : 'down 3'
    }
  }
})