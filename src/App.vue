<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false:true)  // 通过获取页面宽度，决定 asideVisible变量 的初始值为true或false
    provide('asideVisible', asideVisible)
    router.afterEach(()=>{
      if( width <= 500 ){
        asideVisible.value = false
      }
    })
  }
}
</script>
