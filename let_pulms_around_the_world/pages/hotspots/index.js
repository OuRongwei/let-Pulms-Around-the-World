
Page({

  /**
   * 页面的初始数据
   */
  data: {
    djshu:4,//树的等级1，2，3，4
    tree:false,
    waternum:0,
    waterbool:false,
    animation:true,
    shutree:false,
    bottle:false,
    energy:200,
    pro:0
  },
  treeend(){//树动画结束

    this.setData({
      tree:false,
      shutree:false,
      animation:true,

    })
    var num=this.data.waternum
    if(num==1000){
      wx.showToast({
        title: '你已完成任务',
      })
      return false
    }
     this.setData({
      waternum:num+20
     })
  },
  before(){
    wx.navigateBack({
      delta: 1,
    })
  },
  bottlestart(){//水滴动画开始前
    this.setData({
      bottle:true
    })
  },
  bottleend(){//水滴动画结束
    this.setData({
      bottle:false,
      tree:false,
      waterbool:true,
    })
    setTimeout(()=>{
      this.setData({
        shutree:true,
        waterbool:false,
      })
    },500)
  },
  animation(){//动画事件启动
    var animation=this.data.animation

    let energy = this.data.energy

    let water = this.data.waternum

    if(energy>=20){
      if(animation){
        this.setData({
          animation:false,
          tree:true,
          energy:energy-20,
          pro:(water+20)/10,
        })
      }else{
        return false
      }
    }
    else{
      wx.showToast({
        title: '能量不足',
        icon:'error',
        duration:1000
      })
    }

   

    
  },
  answer(){
    wx.navigateTo({
      url: '/pages/dati/dati',
    })
  },
  tosign(){
    wx.navigateTo({
      url: '/pages/qiandao/qiandao',
    })
  },
  shaomiao(){
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },


  getwater:function(){
    var that = this
    wx.request({
      url: 'http://localhost:3000/api/shop.json',
      header:{
        "Content-Type":"application/X-www-from-urlencoded"
      },
      data:{
        energy:that.data.energy,
        waternum:that.data.waternum,
        pro:that.data.pro
      },
      success:function(res){
        console.log(res);
        that.setData({
          energy:parseInt(res.data.energy),
          waternum:parseInt(res.data.waternum),
          pro:parseInt(res.data.pro)
        })
      },
      fail:function(err){
        console.log(err);
      }
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getwater()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getwater()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getwater()
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.getwater()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.getwater()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getwater()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getwater()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    this.getwater()
  }
})
