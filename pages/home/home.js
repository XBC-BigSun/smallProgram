// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '肖宝成',
    age: new Date().toLocaleDateString(),
    count: 0,
    animalArr: [{
        id: 1,
        name: 'cat',
        age: 2
      },
      {
        id: 2,
        name: 'dog',
        age: 3
      },
      {
        id: 3,
        name: 'fish',
        age: 4
      },
      {
        id: 4,
        name: 'pig',
        age: 5
      },
      {
        id: 5,
        name: 'chicken',
        age: 6
      }
    ]
  },

  addHandleBtnClick() {
    //错误做法：界面不会刷新
    // this.data.count += 1; 
    // console.log(this.data.count)

    this.setData({
      count:this.data.count+1
    })
  },


  reduceHandleBtnClick() {
    this.setData({
      count: this.data.count - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})