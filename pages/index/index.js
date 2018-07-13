// pages/index/index.js
const fetch = require('../../utils/fetch')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/assets/images/banner1.jpg',
      '/assets/images/banner2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    slides: [],
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: "https://locally.uieee.com/categories",
    //   success: (res) => {
    //     // console.log(res.data)
    //     this.setData({categories: res.data})
    //   }
    // })
    fetch('slides').then((res) => {
      // console.log(res.data)
      this.setData({slides: res.data})
    })
    fetch('categories').then((res) => {
      // console.log(res.data)
      this.setData({categories: res.data})
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
  
  }
})