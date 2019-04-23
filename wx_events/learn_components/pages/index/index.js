// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultname: "Your name",
    name:"",
    doneornot:false,
    alert:false,
  },

  focus: function(){
    this.setData({defaultname:""})
  },

  namesubmit: function(e){
    let name;
    this.setData({
      name : e.detail.value.inputname
    })
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
    this.dialog = this.selectComponent("#dialog");
  },
  showDialog() {
    if (this.data.name==""){
      this.setData({
        alert: true
      })
    }
    else{
      this.dialog.showDialog();
    }
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
    this.setData({doneornot:true})
  },
  //输入name事件
  userNameInput:function(e){
    this.setData({
      name:e.detail.value//把输入框的值同步到name中
    })
  },
  //获得焦点事件
  focus:function(){
    this.setData({
      defaultname:"",
      alert:false
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})