Page({
  data: {
    isAuth: false,
    src: '',
    tempFilePaths: '',
    isTrue:false
  },
  onLoad() {
    const _this = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.camera']) {
          // 用户已经授权
          _this.setData({
            isAuth: true
          })
        } else {
          // 用户还没有授权，向用户发起授权请求
          wx.authorize({
            scope: 'scope.camera',
            success() { // 用户同意授权
              _this.setData({
                isAuth: true
              })
            },
            fail() { // 用户不同意授权
              _this.openSetting().then(res => {
                _this.setData({
                  isAuth: true
                })
              })
            }
          })
        }
      },
      fail: res => {
        console.log('获取用户授权信息失败')
      }
    })
  },

  // 打开授权设置界面
  openSetting() {
    const _this = this
    let promise = new Promise((resolve, reject) => {
      wx.showModal({
        title: '授权',
        content: '请先授权获取摄像头权限',
        success(res) {
          if (res.confirm) {
            wx.openSetting({
              success(res) {
                if (res.authSetting['scope.camera']) { // 用户打开了授权开关
                  resolve(true)
                } else { // 用户没有打开授权开关， 继续打开设置页面
                  _this.openSetting().then(res => {
                    resolve(true)
                  })
                }
              },
              fail(res) {
                console.log(res)
              }
            })
          } else if (res.cancel) {
            _this.openSetting().then(res => {
              resolve(true)
            })
          }
        }
      })
    })
    return promise;
  },

  chooseimage: function () {

    var that = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        that.setData({
          isTrue:true,
          tempFilePaths: res.tempFilePaths,
        })
      }
    })
  },
})

