// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //  
  

  list:[{
    id:1,
    question:'1+1=',
    answer:"AA",
    ans:[{
      a:'AA'
    },{
      a:'BB'
    },{
      a:'CC'
    },{
      a:'DD'
    }]
  },
  {
    id:2,
    question:'1+1=',
    answer:"AA",
    ans:[{
      a:'AA'
    },{
      a:'BB'
    },{
      a:'CC'
    },{
      a:'DD'
    }]
  }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let subject = list[0]
    this.setData({
      subject:subject,
      total:list.length
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  selectOne(item){
    var select =  item.currentTarget.dataset;
    console.log(select);
  }

})