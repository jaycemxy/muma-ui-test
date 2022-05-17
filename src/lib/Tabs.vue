<template>
    <div>
        <div v-for="(t,index) in titles" :key="index">{{t}}</div>
        <component v-for="(c,index) in defaults" :is="c" :key="index"/>
        <!-- <component :is="defaults[0]"/>
        <component :is="defaults[1]"/> -->
    </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
    setup(props,context) {
        const defaults = context.slots.default()
        // console.log(defaults[0].type === Tab)  检查子组件的类型是否为Tab
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        return {
            defaults,titles
        }
    }
}
</script>