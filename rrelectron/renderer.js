'use strict'
// 渲染进程



document.getElementById('hhh').innerHTML="成功更改div  csdn的内容"



require(['Vue'], function (Vue) {
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
});
