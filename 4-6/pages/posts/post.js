var postsData=require('../../data/posts-data.js')
Page({
  data:{
    
  }, 
  
  onLoad:function(){
    
    // this.data.postList = postsData.postList;
    this.setData({
      posts_key:postsData.postList
    });
  },

  onUnload(){
    console.log("Page post is unloaded!")
  },

  onPostTap:function(event){
    console.log(event.currentTarget)
    var postId =event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../posts/post-detail/post-detail?id=' + postId
   })
  }

 
  
  
})