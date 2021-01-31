new Vue({
	el: '#app',
  data: {
    message: 'hello lworld',
    number: 2,
    disabled: true,
    html: '<h1>h1 desu </h1>',
    url: 'https://google.com',
    number: 1,
    attribute: 'href',
    hrefObject: {
      href: 'https://google.com',
      id: 222
    },
    x: 0,
    y: 0
  },
  methods: {
    reverseMessage: function(){
      this.message  = this.message.split('').reverse().join('')
    },
    say: function(a='222'){
      this.message = 'fefefffefe'
      return this.message;
    },
    countUp(){
      this.number += 1
    },
    // イベントオブジェクト
    changeMousePosition(text, event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    //.stopイベント修飾子は以下メソッドをやってくれている
    noEvent(event){
      event.stopPropagation();
    },
    // デフォの挙動を妨げる
    noClickEvent(event){
      event.preventDefault();
    }
  }
})