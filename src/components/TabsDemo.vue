<template>
    <div>Tabs示例</div>

    <h1>示例1</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航一" selected>内容一</Tab>
        <Tab title="导航二22">内容二</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from 'vue'

export default {
    components: {
        Tabs,
        Tab
    },
    setup(){
        const x = ref('导航二22')
        return {x}
    }
}
</script>
