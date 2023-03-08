import Taro from '@tarojs/taro';
import { createApp } from 'vue'
import './app.scss'
import './assets/font/iconfont.css';
import store from './store';

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  onLaunch: function() {
    const envt=process.env.TARO_ENV
    Taro.setStorageSync("environment", envt)
    let appId=""
    switch(envt){
      case "weapp":
        console.log("weapp")
        let res = wx.getSystemInfoSync()
        if(res&&res.environment&&res.environment=='wxwork'){
          Taro.setStorageSync("environment", 'wxwork')
        }else{
          Taro.setStorageSync("environment", 'wx')
        }
        const accountInfo = wx.getAccountInfoSync();
        appId=accountInfo.miniProgram.appId as string
        break;
      case "tt":
        console.log("tt")
        let ttRes=tt.getEnvInfoSync()
        appId=ttRes.microapp.appId
        break;
      case "h5":
        appId="H5"
        console.log("h5")
        break;
      default:
        console.log("不支持类型")
        break;

    }
    console.log("AppID"+appId)
    Taro.setStorageSync("appId", appId)
  },
  onPageNotFound() {
    Taro.redirectTo({url:"/pages/component/errorPage/404"});
  },
})
App.use(store)
export default App
