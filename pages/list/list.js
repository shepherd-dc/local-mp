// pages/list/list.js

const fetch = require('../../utils/fetch')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: {},
    shops: [],
    pageIndex: 0,
    pageSize: 10,
    hasMore: true
  },

  loadMore () {
    if (!this.data.hasMore) return
    let { pageIndex, pageSize } = this.data
    return fetch(`categories/${this.data.categories.id}/shops`, {_page: ++pageIndex, _limit: pageSize}).then(res=>{
      // console.log(res.header)
      let total = parseInt(res.header['X-Total-Count'])
      let hasMore = total > pageIndex * pageSize
      let shops = this.data.shops.concat(res.data)
      this.setData({ shops, pageIndex, hasMore })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    fetch(`categories/${options.cat}`).then(res=>{
      // console.log(res)
      this.setData({categories: res.data})
      wx.setNavigationBarTitle({
        title: res.data.name
      })

      // 加载分类信息之类再请求商铺信息
      this.loadMore()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.categories.name) {
      wx.setNavigationBarTitle({
        title: this.data.categories.name
      })
    }
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
    this.setData({shops: [], pageIndex: 0, hasMore: true})
    this.loadMore().then(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    
  }
})