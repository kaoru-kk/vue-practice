new Vue({
	el: '#app',
  data: {
    number: 0
  },
  methods: {
    countUp(){
      this.number += 1
    }
  }
})