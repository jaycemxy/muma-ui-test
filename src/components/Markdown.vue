<template>
    <article class="markdown-body" v-html="md"></article>
</template>

<script lang="ts">
    export default {
        props: {
            path: {
                type: String,
                required: true
            }
        },
        setup(props){
            import(props.path)
        }
    }
</script>
