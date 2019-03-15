Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput:true,

    textValue:"",
    inputValue:""
  },

  //点击添加按钮弹出文本框
  addText: function () {
    this.setData({
      inputValue:'',
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },

  //取消按钮  
  cancel: function () {
    this.setData({
      textValue:'',
      inputValue:''
    })
  },

  //确认  
  confirm: function () {
    if (this.data.inputValue === ''){
      this.setData({
        hiddenmodalput: true
      })
      
    }
    else{
      console.log(this.data.inputValue)
      this.setData({
        hiddenmodalput: true,
        textValue: ''
      })
    }
  },
  //获取输入框的文本
  getInputText:function(e){
    this.setData({
      inputValue: e.detail.value
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