<template>
    <div>button示例</div>
    <div>
        <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">(*´▽｀)你好</Button>
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
