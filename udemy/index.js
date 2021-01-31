new Vue({
  el: '#app',
  data: {
    textColor: 'red',
    bgBlue: 'blue',
    // can below
    styleObject: {
      color: 'red',
      'background-color' : 'blue'
    },
    baseStyles: {
      fontSize: '80px'
    }
  }
})