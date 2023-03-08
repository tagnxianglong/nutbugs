<template>
  <web-view :src='webSrc' @message="handleMessage"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDidShow,useLoad,useShareAppMessage } from '@tarojs/taro'
const shareTitle=ref("")
const loadScene=ref("00")
const webSrc=ref("https://p.scrcyy.cn/")
const link=ref("https://p.scrcyy.cn/")
const handleMessage=(e)=>{
  if(e.detail){
    shareTitle.value=e.detail.data[e.detail.data.length-1].title
    loadScene.value=e.detail.data[e.detail.data.length-1].load_scene
    link.value=e.detail.data[e.detail.data.length-1].link
  }
}
useDidShow(() => {
  console.log('useDidShow')
})
useLoad((options?) => {
  if(options.link)
    webSrc.value=options.link
  else{
    if(options.key=='njk')
      webSrc.value="https://rcyyfile-res.scrcyy.cn/publicFile/jk/index.html"
  }
    let args="00000000"
    if(options.loadScene){
      args=options.loadScene+"000000"
    }
    args+='12345678901234567890123456789012'//32位token todo
    args+='tool'
    if(options.shareKey){
      args+=options.shareKey
    }else{
      args+="2071c69cca264f5f878219a8eb823860"//32位分享参数
    }
    webSrc.value+="?args="+args
})
const guid=()=>{
return 'xxxxxxxxxxxxxxxx4xxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
});
}
useShareAppMessage(res => {
  if (res.from === 'button') {
    // 来自页面内转发按钮
    console.log(res.target)
  }
  let shareKey=guid()
  return {
    title: shareTitle.value,
    path: '/pages/webview/index?key=njk&loadScene='+loadScene.value+'&shareKey='+shareKey+"&link="+link.value
  }
})

</script>
<script lang="ts">
export default definePageConfig({
  navigationBarTitleText: '',
  enableShareAppMessage: true
})

</script>
<style lang="scss">

</style>
