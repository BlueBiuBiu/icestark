<template>
  <div class="main" v-loading="loading">
    <div id="container"></div>
    <router-view  v-if="!microAppsActive"></router-view>
  </div>
</template>

<script setup>
const props = defineProps({
  microAppsActive: {
    type: Boolean,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  },
})
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
