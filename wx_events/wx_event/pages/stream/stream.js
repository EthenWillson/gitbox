// pages/stream/stream.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:[1,2,3],
    sign:[0],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var i=1;i<40;i++){
      this.data.number[this.data.sign[0]] = this.data.sign[0];
      this.data.sign[0] += 1;
    }
    this.setData({
      number:this.data.number
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    for (var i = 1; i < 40; i++) {
      this.data.number[this.data.sign[0]] = this.data.sign[0];
      this.data.sign[0] += 1;
    }
    this.setData({
      number: this.data.number
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})