new Vue({
  el: '#app',
  data: {
    isActive: true,
    color: 'red',
    bg: 'bg-blue'
  },
  computed: {
    classObject () {
      return {
        red: this.isActive,
        'bg-blue': !this.isActive
      }
    }
    
  }
})