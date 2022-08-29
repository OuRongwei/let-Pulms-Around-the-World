// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step: [
      {
        text: '物流状态一',
        desc: '重庆巫山',
        inactiveIcon: 'location-o',
        activeIcon: 'success',
      },
      {
        text: '物流状态二',
        desc: '重庆黔江',
        inactiveIcon: 'like-o',
        activeIcon: 'plus',
      },
      {
        text: '物流状态三',
        desc: '重庆巴南',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '物流状态四',
        desc: '重庆工程学院',
        inactiveIcon: 'phone-o',
        activeIcon: 'fail',
      },
    ],
    steps: [
      {
        text: '果树预定',
        desc: '预定成功',
        inactiveIcon: 'location-o',
        activeIcon: 'success',
      },
      {
        text: '果树购买',
        desc: '购买成功',
        inactiveIcon: 'like-o',
        activeIcon: 'plus',
      },
      {
        text: '果树生长期',
        desc: '成熟',
        inactiveIcon: 'star-o',
        activeIcon: 'cross',
      },
      {
        text: '果实发送',
        desc: '物流信息',
        inactiveIcon: 'phone-o',
        activeIcon: 'fail',
      },
    ],
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