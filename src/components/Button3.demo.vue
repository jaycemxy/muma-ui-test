<demo>
禁用 disabled
</demo>

<template>
  <Button size="big" disabled>禁用按钮</Button>
  <Button theme="default" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>