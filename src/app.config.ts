export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/component/errorPage/404',
    'pages/component/test',

  ],
  tabBar: {
    custom: false,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/home-fill-2.png',
        iconPath: 'images/home-fill.png',
        text: '主页'
      },
      {
        pagePath: 'pages/component/test',
        selectedIconPath: 'images/QRcode-2.png',
        iconPath: 'images/QRcode.png',
        text: '测试'
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
