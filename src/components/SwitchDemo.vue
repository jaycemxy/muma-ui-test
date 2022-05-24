<template>
    <div>
        <h1>Switch 组件示例</h1>
        <Demo :component="Switch1Demo"/>
        <Demo :component="Switch2Demo"/>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'
import 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'
const Prism = (window as any).Prism
import Demo from '../components/Demo.vue'

console.log(Switch1Demo.__sourceCode)  // 组件.__sourceCode 展示源码
console.log(Switch1Demo.__sourceCodeTitle)

export default {
    components: {Switch, Button, Demo},
    setup(){
        const bool = ref(false)
        return {
            bool, Switch1Demo, Switch2Demo, Prism
        }
    }
}
</script>

