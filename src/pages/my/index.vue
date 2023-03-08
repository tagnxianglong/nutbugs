<template>
  <view>
    <nut-cell>
        <nut-avatar :icon="userInfo.ico">
          <img :src="userInfo.ico" />
        </nut-avatar>
        <view class="head_avatar_name">
         <nut-ellipsis :content="userInfo.name" direction="middle" ></nut-ellipsis>
        </view>
    </nut-cell>
  </view>

  <view>
      <nut-cell-group title="" desc="">
        <nut-cell v-for="item in menuList" :key="item.menuName" :title="item.menuName"
        is-link @click="on_link_click(item.event)">
          <template v-slot:icon>
            <IconFont :name="item.ico"></IconFont>
          </template>
        </nut-cell>
      </nut-cell-group>
      <nut-cell>
        <nut-button block type="danger" @click="loginOut">{{loginBtn}}</nut-button>
      </nut-cell>
  </view>
</template>

<script lang="ts" setup >
import { ref,reactive } from 'vue';
import { useLoad } from '@tarojs/taro';
import { IconFont } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';



const menuList=reactive<{menuName:string,event:string,ico:string}[]>([
  // {menuName:"绑定工号",event:"/index",ico:"my"},
  // {menuName:"测试页面",event:"/pages/component/test",ico:"my"},
  // {menuName:"404",event:"/pages/component/errorPage/404",ico:"retweet"},
  // {menuName:"工号登录",event:"/pages/login/login",ico:"retweet"},

  ])
const userInfo=reactive({
  name:"微信用户",
  ico:"https://rcyyfile.oss-cn-chengdu.aliyuncs.com/ico/avatar/avatar_default.png"
})
const login=ref(false)
const loginBtn=ref("登录")
useLoad(() => {
  
})
const on_link_click = (event)=>{
  Taro.navigateTo({url:event});
  Taro
}
const loginOut = ()=>{
  console.log(login.value)
  if (login.value) {
    console.log("loginOut")
    userInfo.name="微信用户"
    userInfo.ico="https://rcyyfile-res.scrcyy.cn/ico/avatar/avatar_default.png"
    login.value=false
  } else {
    
  }
}

</script>

<style lang="scss">
.head_avatar_name {
  margin-top: 15px;
  margin-left: 10px;
}

</style>
