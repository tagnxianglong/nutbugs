<template>
<view>
    
    <nut-tabs v-model="tabsValue" >
        <nut-tab-pane title="tab 1">
            Tab 1
        </nut-tab-pane>
        <nut-tab-pane title="tab 2">
            Tab 2
        </nut-tab-pane>
        <nut-tab-pane title="tab 3">
            Tab 3
        </nut-tab-pane>
    </nut-tabs>
    
</view>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const tabsValue=ref(0)

</script>
<style lang="scss">

</style>