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
  // watch: 特定のデータが変わったときに使用する
  // Computedでカバーできないときに使う（非同期処理とか
  watch: {
    counter: function(){
      // settimeout内でthisを使えないのでここで定義
      const vm = this;
      setTimeout(function() {
        vm.counter = 0
      }, 3000)
    }

  } 
})