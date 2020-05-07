// page/component/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '../../../image/banli.png',
        "iconText": '售出'
      },
      {
        "iconUrl": '../../../image/fenxiang.png',
        "iconText": '挂单'
      },
      {
        "iconUrl": '../../../image/yonghu.png',
        "iconText": '客户'
      },
      {
        "iconUrl": '../../../image/renwuguanli.png',
        "iconText": '商品'
      },
      {
        "iconUrl": '../../../image/yingyong.png',
        "iconText": '库存'
      },
      {
        "iconUrl": '../../../image/quxiao.png',
        "iconText": '更多'
      }
    ],
    itemArray: [
      {
        "itemUrl": '../../../image/weixinzhifu.png',
        "itemText": '微信支付',
        "itemMoney": '67'
      },
      {
        "itemUrl": '../../../image/zhifupingtai-zhifubao.png',
        "itemText": '支付宝支付',
        "itemMoney": '67'
      },
      {
        "itemUrl": '../../../image/xianjin.png',
        "itemText": '现金支付',
        "itemMoney": '67'
      },
      {
        "itemUrl": '../../../image/xinyongqiazhifu.png',
        "itemText": '刷卡支付',
        "itemMoney": '67'
      }
    ]
  },
  cusImageLoad: function (e) {
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
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