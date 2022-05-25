<demo>
基础用法 theme
</demo>

<template>
<div>
  <Button theme="default">默认按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="warning">警告按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="danger">危险按钮</Button>
  <Button theme="link">链接按钮</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    components: {
        Button
    }
}
</script>
