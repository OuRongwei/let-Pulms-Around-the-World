// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:''
  },

  login(){

    wx.login({
      success (res) {
        if (res.code) {
          console.log(res);
          //发起网络请求
          wx.request({
            url: 'http://localhost:3000/api/shop.json',
            data: {
              appid:'wx467d3995deab4d66',
              secret:'8aa1f24e6a632ef4554b78a223b31fac',
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })


    // wx.getUserProfile({
    //   desc:'获取登陆授权',
    //   success:res => {
    //     console.log(res);
    //     let user = res.userInfo
    //     this.setData({
    //       userInfo:user
    //     })
    //     wx.showToast({
    //       title: '登陆成功',
    //       icon:'success',
    //       duration:1000
    //     })
    //   },
    //   fail:res => {
    //     wx.showToast({
    //       title: '登陆失败',
    //       icon:'error',
    //       duration:1000
    //     })
    //   }
    // })
  },

  loginOut(){
    this.setData({
      userInfo:''
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