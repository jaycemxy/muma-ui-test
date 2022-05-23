<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    setup(props){
        const content = ref<string>(null)
        import(props.path).then(result=>{  // 动态import，异步获取结果
            content.value = result.default
        })
        return {content}
    }
}
</script>
