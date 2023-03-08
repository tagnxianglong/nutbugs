<template>
<view>

<IconFont name="issue" color="#fa2c19" size="80px"/>
<view style="flex-direction:row;display: flex;text-align: center;">
<view style="color:brown;font-size: 60px;width: 180px; height: 90px;">4</view>
<view style="color:blue;font-size: 60px;width: 180px; height: 90px;">0</view>
<view style="color:brown;font-size: 60px;width: 180px; height: 90px;">4</view>
</view>
<view>页面走丢了</view>
</view>
</template>
<script lang="ts" setup>
import { IconFont } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
Taro.setNavigationBarTitle({title:'页面走丢了'})
</script>
<style lang="scss">
page{
  text-align: center;
  padding: 10px;
}
</style>
