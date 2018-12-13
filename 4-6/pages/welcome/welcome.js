Page({
  data: {
    motto: '点击触发事件跳转',
    
  },
  //事件处理函数
  bindViewTap: function(event) {
    wx.redirectTo({
      url: '../posts/post'
    });
    console.log("redirectTo!")
  }
  
})
