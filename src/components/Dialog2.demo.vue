<demo>
函数式调用（隐藏DOM结构，只暴露调用的API）
</demo>

<template>
<div>
  <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import {h} from 'vue'

export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '加粗的标题'),
        content: '对话框里的内容',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>