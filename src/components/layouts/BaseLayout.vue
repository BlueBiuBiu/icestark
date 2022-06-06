<template>
  <div class="">
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="200px"><Aside /></el-aside>
        <el-main><Main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from './Aside.vue'
import Main from './Main.vue'
import Header from './Header.vue'
</script>

<style lang="less" scoped>
.el-header {
  border-bottom: 1px solid #dadada;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  background: #545c64;
  :deep(ul) {
    border-right: 1px solid #545c64;
  }
}
.el-main {
  background-color: #f0f2f5;
  color: #333;
  height: calc(100vh - 60px);
}
</style>
