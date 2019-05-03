'use strict'

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    dri: {}
  },
  created () {
    fetch('dri/dri13m1849.json')
      .then(response => response.json())
      .then(json => {
        this.dri = new Dri(json)
      })
  }
})
