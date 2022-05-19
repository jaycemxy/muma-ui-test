<template>
<div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
        <div class="gulu-tabs-nav-item" :class="{selected: t===selected}"
            v-for="(t,index) in titles" :key="index" @click="select(t)"
            :ref="el => {if (t===selected )selectedItem = el }">
            {{t}}
        </div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
        <component :is="current" :key="current.props.title"/>
    </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed, ref, onMounted, watchEffect} from 'vue'

export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props,context) {
        const selectedItem = ref<HTMLDivElement>(null)  // ref<...> typeScript的语法，表示传入的参数是一个HTMLDiv元素的数组
        const indicator = ref<HTMLDivElement>(null)  // 获取到选中条
        const container = ref<HTMLDivElement>(null)
        // onMounted(x)  // 只在第一次渲染时执行
        // onUpdated(x)  // 用户操作后重新渲染、更新页面
        onMounted(()=>{
            watchEffect(()=>{
                const {width} = selectedItem.value.getBoundingClientRect()  // 获取元素宽度
                indicator.value.style.width = width + 'px'

                const {left:left1} = container.value.getBoundingClientRect()
                const {left: left2} = selectedItem.value.getBoundingClientRect()
                const left = left2 - left1
                indicator.value.style.left = left + 'px'
            })
        })


        const defaults = context.slots.default()  // 用JS获取插槽内容
        // console.log(defaults[0].type === Tab)  检查子组件的类型是否为Tab
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
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
            selectedItem,
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
    }
}
</style>
