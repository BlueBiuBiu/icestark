<template>
  <div class="aside">
    <el-row>
      <el-col>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          default-active="2"
          text-color="#fff"
          class="el-menu-vertical-demo"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Baseball /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Vue">
              <el-menu-item index="1-1" @click="toVue">跳转到vue</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="React">
              <el-menu-item index="1-2" @click="toReact"
                >跳转到React</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { Baseball } from '@element-plus/icons-vue'
const router = useRouter()

const toVue = () => {
  router.push('/vue')
}

const toReact = () => {
  router.push('/react')
}
</script>

<style lang="less" scoped>
.aside {
}
</style>
