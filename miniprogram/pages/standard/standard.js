// pages/standard/standard.js

var config = require('../../config')
var util = require('../../utils/util.js')
var cache = require('../../utils/cache.js');
//引入文件
var WxParse = require('../../wxParse/wxParse.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '模板预览',
    winHeight: 1150,
  },
  pay: function(){
    let uploadData = {
      "total_fee": "666",
      "spbill_create_ip": "123.123.123.123"
    }
    wx.cloud.callFunction({
      //云函数的名字，这里我定义为payment
      name: "payment",
      //需要上传的数据
      data: uploadData
    }).then(res => {
      //这个res就是云函数返回的5个参数
      //通过wx.requestPayment发起支付
      wx.requestPayment({
        timeStamp: res.result.data.timeStamp,
        nonceStr: res.result.data.nonceStr,
        package: res.result.data.package,
        signType: res.result.data.signType,
        paySign: res.result.data.paySign,
        success: res => {
          //支付成功
        },
        fail: err => {
          //支付失败
        }
      })
    })
  },
  onLoad: function (options) {

  },
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
})