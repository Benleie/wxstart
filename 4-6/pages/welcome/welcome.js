Page({
  data: {
    motto: 'Hello World',
    
  },
  //事件处理函数
  bindViewTap: function(event) {
    wx.redirectTo({
      url: '../posts/post'
    });
  }
  
})
