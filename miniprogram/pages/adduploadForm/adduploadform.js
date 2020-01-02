// pages/addform/addform.js
var config = require('../../config')
var util = require('../../utils/util.js')
var cache = require('../../utils/cache.js');
var app = getApp();



Page({
  data: {
    index: 0,
    precent_data: 0,

    radioItems: [
      { name: '男性', value: '0' },
      { name: '女性', value: '1', checked: true }
    ],

    questionnaire: {
      form_picker1: '您的姓名:',
      form_picker2: '您的性别是:',
      form_picker3: '您的孩子数目（没有则为0）:',
      form_picker3_1: '婚后子女与何方共同生活?',
      form_picker3_2: '支付抚养费一方的探望方式？',
      form_picker4: '您的住房数目（没有则为0）:',
      form_picker4_1: '是否有房贷且需要变更？',
      form_picker5: '您是否重新分配存款:',
      form_picker6: '您是否有其他婚前财产:',
      form_picker7: '双方是否存在共同债务',
    },

    questionnaire_index: {
      form_picker2: 0,
      form_picker3: 0,
      form_picker3_1: 0,
      form_picker3_2: 0,
      form_picker4: 0,
      form_picker4_1: 0,
      form_picker5: 0,
      form_picker6: 0,
      form_picker7: 0,
    },

    questionnaire_data: {
      form_picker2: ['男', '女'],
      form_picker3: [0, 1, 2, 3],
      form_picker3_1: ['男方', '女方'],
      form_picker3_2: ['探望', '短期生活'],
      form_picker4: [0, 1, 2],
      form_picker4_1: ['需要', '不需要'],
      form_picker5: ['是', '否'],
      form_picker6: ['是', '否'],
      form_picker7: ['是', '否'],
    },

    winHeight: 1150,
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },

  recover_qindex: function (e) {
    console.log('picker发送选择改变')
    this.setData({
      qindex: 0
    })
  },

  bindAccountChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      qindex: e.detail.value
    })
  },
  //index+1
  indexPlus: function () {
    console.log('index选择改变，携带值为')
    var that = this;
    var tempindex = this.data.index + 1;
    this.setData({
      index: tempindex,
    })
  },

  
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.navigateTo({
      url: '../formsuccess/formsuccess',
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
    return {
      title: '法律协议一键生成',
      desc: '法律协议一键生成',
      path: '/pages/index/index'
    }
  }
})