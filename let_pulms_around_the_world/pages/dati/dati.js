// pages/dati/dati.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curring:-1,
    detail: [
      {
        id: '1', title: '以下哪种水果最容易招虫子',answer:'2',array: [
          { name: '梨', usname: false }, { name: '香蕉', usname: false },
          { name: '李子', usname: false }, { name: '苹果', usname: false },
        ]
      },
      {
        id: '2', title: '从心理学角度看，孩子的第一个叛逆期一般在', answer: '1', array: [
          { name: '2-3岁', usname: false }, { name: '7-8岁', usname: false },
          { name: '13-14岁', usname: false }, { name: '17-18岁', usname: false },
        ]
      },
      {
        id: '3', title: 'CSDN：https://blog.csdn.net/qq_43764578 QQ:1010753897', answer: '4', array: [
          { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
          { name: '错误答案', usname: false }, { name: '正确答案', usname: false },
        ]
      },
      {
        id: '4', title: 'CSDN：https://blog.csdn.net/qq_43764578 QQ:1010753897', answer: '3',  array: [
          { name: '错误答案', usname: false }, { name: '错误答案', usname: false },
          { name: '正确答案', usname: false }, { name: '错误答案', usname: false },
        ]
      },
    ],
    number: 0,
    answer:0,

  },
  nextstep:function(e){
    let detail = this.data.detail
    let number = this.data.number
    let curring = this.data.curring
    let usname = 0;
    for(let i = 0;i<detail[number].array.length;i++){
      if(!detail[number].array[i].usname){
        usname++
      }
    }
    if(usname == detail[number].array.length){
      wx.showToast({
        title: '答题选项不能为空',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    curring++
    number++
    if (curring > 3){
      curring = -1
    }
    this.setData({
      curring: curring,
      number: number,
    })
  },
  subsic:function(e){
    let detail = this.data.detail
    let answer = 0
    let letter = ''
    for(let i = 0;i < detail.length;i++){
      for(let j = 0;j < detail[i].array.length;j++){
        if(detail[i].array[j].usname){
          letter = detail[i].answer-1
          if(letter == j){
            answer++
          }
        }
      }
    }
    wx.showToast({
      title: '答对了:' + answer + '题',
      icon: 'none',
      duration: 2000
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