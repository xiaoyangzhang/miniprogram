Page({
  data: {
    latitude: 39.90469,
    longitude: 116.40717,
    markers: [{
      id: 1,
      latitude: 39.90469,
      longitude: 116.40717,
      title: "公司",
      zIndex:1
    },{
      id: 2,
      latitude: 38,
      longitude: 115,
      title: "家",
      zIndex:2
    }],
    // covers: [{
    //   latitude: 39,
    //   longitude: 116,
    //   iconPath: '../images/location.png'
    // }, {
    //   latitude: 39.90469,
    //   longitude: 116.40717,
    //   iconPath: '../images/location.png'
    // }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  getLocation:function(){
    wx.getLocation({
      type: "gcj02",
      altitude: 'false',
      isHighAccuracy: true,
      success:function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  }
})
