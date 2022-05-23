<template>
  <article class="markdown-body" v-html="md">
  </article>

  <!-- <Markdown path="../markdown/intro.md"/> -->
</template>

<script>
import md from '../markdown/intro.md'
// import Markdown from '../components/Markdown.vue'

export default {
  // components: {Markdown},
  data(){
      return {md}
  }
}
</script>
