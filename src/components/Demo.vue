<template>
<div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
        <component :is="component"/>
    </div>
    <div class="demo-actions" @click="toggleCode">
      {{ codeVisible ===true? '隐藏代码':'显示代码' }}
        <!-- <Button @click="codeVisible = !codeVisible">查看代码</Button> -->
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre v-html="html"></pre>
    </div>
</div>
</template>

<script lang="ts">
import { computed,ref } from 'vue'
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'
const Prism = (window as any).Prism

export default {
    props: {
        component: Object
    },
    components: {
        Button
    },
    setup(props){
        const codeVisible = ref(false)
        const toggleCode = ()=> codeVisible.value = !codeVisible.value
        const html = computed(()=>{
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        return {
            Prism, html, codeVisible, toggleCode
        }
    }
}
</script>


<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo:hover {
  box-shadow: 0 0 20px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  @media(max-width: 500px){
    
  }
  > h2 {
    font-size: 18px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    cursor: pointer;
    text-align: center;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    color: #ccc;
  }
  &-actions:hover {
    color: #91ceca;
    background-color: #f9fafc;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      overflow: auto;
    }
  }
}
</style>