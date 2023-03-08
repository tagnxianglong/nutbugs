<template>
  <nut-tabs v-model="state.tab1value">
    <nut-tab-pane title="Tab 1">
      Tab 1
    </nut-tab-pane>
    <nut-tab-pane title="Tab 2">
      Tab 2
    </nut-tab-pane>
    <nut-tab-pane title="Tab 3">
      Tab 3
    </nut-tab-pane>
  </nut-tabs>
  </template>
  <script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        tab1value: '0',
      });
      return { state };
    }
  };
  </script>
  