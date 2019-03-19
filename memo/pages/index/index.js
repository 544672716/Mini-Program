Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, // 当前tab栏
    count: 0, // 事项总数
    // 全部事项
    allEvents: [],
    // 待办事项
    todoEvents: [],
    // 已完成事项
    completeEvent: [],
    isInputModalHidden: true,
    addInputValue: "" // 添加输入框的值
  },

  // 点击切换tab栏
  changeTab: function (e) {
    console.log(e);
    console.log(this.data);
    if (this.data.currentTab == e.target.dataset.current) {
      console.log('点击的是当前页！')
    } else {
      console.log('点击切换了当前页！')
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  // 滑块切换
  swiperTab: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current
    })
  },

  // 点击完成事项
  completeEvent: function (e) {
    let that = this;
    wx.showModal({
      title: '提醒',
      content: '确认已完成该事项吗？',
      success(res) {
        if (res.confirm) {
          console.log(e.target.dataset.id);
          for (let item of that.data.allEvents) {
            if (e.target.dataset.id === item.id) {
              item.isComplete = true;
              that.data.completeEvent.push(item);
            }
          }

          that.data.todoEvents.map((item, index) => {
            if (e.target.dataset.id === item.id) {
              
            }
          })

          that.setData({
            allEvents: that.data.allEvents,
            todoEvents: that.data.todoEvents,
            completeEvent: that.data.completeEvent
          })
        } else if (res.cancel) {
          console.log(e.target.dataset.id);
        }
      }
    })
  },

  // 点击删除事项
  deleteEvent: function (e) {
    wx.showModal({
      title: '提醒',
      content: '确认删除该事项吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          console.log(e.target.dataset.id);
        } else if (res.cancel) {
          console.log('用户点击取消');
          console.log(e.target.dataset.id);
        }
      }
    })
  },


  //点击添加按钮弹出modal
  addEvents: function () {
    this.setData({
      isInputModalHidden: !this.data.isInputModalHidden
    })
  },

  //获取输入框的文本
  getInputValue: function (e) {
    this.setData({
      addInputValue: e.detail.value
    })
  },

  // 取消按钮  
  addModalCancel: function () {
    this.setData({
      isInputModalHidden: true,
      addInputValue: ''
    })
  },

  // 确认按钮
  addModalConfirm: function () {
    console.log(this.data.addInputValue);
    this.data.count += 1;
    let newEvent = {
      id: this.data.count,
      content: this.data.addInputValue,
      isComplete: false
    }
    this.data.allEvents.push(newEvent);
    this.data.todoEvents.push(newEvent);
    this.setData({
      count: this.data.count,
      allEvents: this.data.allEvents,
      todoEvents: this.data.todoEvents,
      isInputModalHidden: true,
      addInputValue: ''
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