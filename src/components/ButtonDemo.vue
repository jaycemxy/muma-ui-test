<template>
    <div>button示例</div>
    <h1>支持theme属性</h1>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h1>支持size属性</h1>
    <div>
        <Button>你好</Button>
        <Button size="big">你好</Button>
        <Button size="small">你好</Button>
    </div>
    <h1>支持level属性</h1>
    <div>
        <Button>你好</Button>
        <Button level="main">你好</Button>
        <Button level="danger">你好</Button>
    </div>
    <h1>支持disabled属性</h1>
    <div>
        <Button>你好</Button>
        <Button disabled>你好</Button>
        <Button :disabled="true">你好</Button>
    </div>
    <h1>支持loading属性</h1>
    <div>
        <Button loading>加载中</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        components: {Button},
        setup(){
            const onClick = ()=>{
                console.log('hi')
            }
            return {onClick}
        }
    }
</script>
