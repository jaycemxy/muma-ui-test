<template>
<div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
        <div class="gulu-tabs-nav-item" :class="{selected: t===selected}"
            v-for="(t,index) in titles" :key="index" @click="select(t)"
            :ref="el => {if (el) navItems[index] = el}">
            {{t}}
        </div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item" :class="{selected: c.props.title === selected}"
                v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed, ref, onMounted, onUpdated} from 'vue'

export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props,context) {
        const navItems = ref<HTMLDivElement[]>([])  // ref<...>  这里是TypeScript的语法，表示传入的参数是一个HTMLDiv元素的数组
        const indicator = ref<HTMLDivElement>(null)  // 获取到选中条
        const container = ref<HTMLDivElement>(null)
        const x = () => {
            // console.log(...navItems.value)  // 获取导航里的所有div
            const divs = navItems.value
            const result = divs.filter(div => div.classList.contains('selected'))[0]
            // 另一种用find的写法，但在一些老的浏览器上不支持
            // const result = divs.find(div => div.classList.contains('selected')
            console.log(result)
            const {width} = result.getBoundingClientRect()  // 获取到元素宽度
            indicator.value.style.width = width + 'px'

            const {left:left1} = container.value.getBoundingClientRect()
            const {left: left2} = result.getBoundingClientRect()
            const left = left2 - left1
            indicator.value.style.left = left + 'px'
        }
        onMounted(x)  // 只在第一次渲染时执行

        onUpdated(x)  // 用户操作后重新渲染页面

        const defaults = context.slots.default()
        // console.log(defaults[0].type === Tab)  检查子组件的类型是否为Tab
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const current = computed(()=>{
            return defaults.filter((tag)=>{
                return tag.props.title === props.selected
            })[0]
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        const select = (title:string) =>{
            context.emit('update:selected', title)
        }
        return {
            defaults,
            titles,
            current,
            select,
            navItems,
            indicator,
            container
        }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $blue;
            }
        }
        &-indicator {
            position:absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }

    }
    &-content {
        padding: 8px 0;
        
        &-item {
            display: none;
            &.selected {
                display: block;
            }
        }
    }
}
</style>
