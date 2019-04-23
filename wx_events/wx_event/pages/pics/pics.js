// pages/pics/pics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // pics: [
    //   { name: "1" }, 
    //   { name: "2" }, 
    //   { name: "3" }
    // ]
    pics: [
      { name: "村舍", src:"../../images/cottage.jpg" },
      { name: "灯塔", src:"../../images/lighthouse.jpg" },
      { name: "山泉", src:"../../images/mountainwater.jpg" },
      { name: "星空", src:"../../images/starnight.jpg" },
    ],
    sign:[4]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    for(var i=0;i<=3;i++){
      this.data.pics[this.data.sign[0]] = { name: "村舍", src: "../../images/cottage.jpg" };
      this.data.pics[this.data.sign[0]+1] = { name: "灯塔", src: "../../images/lighthouse.jpg" };
      this.data.pics[this.data.sign[0] + 2] = { name: "山泉", src: "../../images/mountainwater.jpg" };
      this.data.pics[this.data.sign[0] + 3] = { name: "星空", src: "../../images/starnight.jpg" };
      this.data.sign[0] += 4
    }
    this.setData({
      pics: this.data.pics
    })
    // console.log(this.data.pics);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})