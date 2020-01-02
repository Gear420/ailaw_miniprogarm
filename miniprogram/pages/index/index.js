//index.js

var config = require('../../config')
var util = require('../../utils/util.js')
var cache = require('../../utils/cache.js');

Page({
  data: {
    main_info:
      { 'title': '法律协议一键生成', 'mintitle': '只需五分钟,人工智能助您完成法律协议', },
    btnName: '固定模板一',
    btnName2: '固定模板二',
    btnName3: '人工智能自动生成',
    winHeight: 1150,

    //轮播图数据
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  standard: function (event) {
    wx.navigateTo({
      url: '../standard/standard'
    })
  },
  addform: function (event) {
    wx.navigateTo({
      url: '../adduploadForm/adduploadform'
    })
  },
  onShareAppMessage: function () {

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
})