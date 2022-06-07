<template>
  <BaseLayout :microAppsActive="microAppsActive" :loading="loading"/>
</template>

<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { registerMicroApps, start } from '@ice/stark'
const router = useRouter()
let loading = ref(false)
let microAppsActive = ref(false)

onMounted(() => {
  const container = document.getElementById('container')
  registerMicroApps([
    {
      name: 'vueApp',
      activePath: '/vue',
      title: '商家平台',
      loadScriptMode: 'import',
      url: [
        'http://localhost:3000/vue/resource/vueApp.es.js',
        'http://localhost:3000/vue/resource/style.css',
      ],
      container,
    },
    {
      name: 'react',
      activePath: '/react',
      title: '小二平台',
      loadScriptMode: 'import',
      url: [
        '//unpkg.com/icestark-child-seller/build/js/index.js',
        '//unpkg.com/icestark-child-seller/build/css/index.css',
      ],
      container,
    },
  ])

  start({
    onLoadingApp: () => {
      loading.value = true
    },
    onFinishLoading: () => {
      loading.value = false
    },
    onRouteChange: (_, pathname) => {
      // 处理微应用间跳转无法触发 Vue Router 响应
      router.push(pathname).catch(() => {})
    },
    onActiveApps: (activeApps) => {
      microAppsActive.value = !!(activeApps || []).length
    },
  })
})
</script>

<style lang="less" scoped></style>
