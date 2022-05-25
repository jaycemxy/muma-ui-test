<demo>
尺寸 size
</demo>

<template>
<div>
  <div>
    <Button size="big">大大大</Button>
    <Button size="normal">普普通通</Button>
    <Button size="small">小小小</Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>