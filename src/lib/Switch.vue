<template>
    <button class="gulu-switch" :class="{'gulu-checked': value}" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">

export default {
    props: {
        value: Boolean
    },
    setup(props, context){
        const toggle = ()=>{
            context.emit('update:value', !props.value)
            // this.$emit
        }
        return {toggle}
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
    position: relative;
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: calc($h/2);
    > span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
       border-radius: calc($h/2);
        transition: all 250ms;
    }
    &.gulu-checked { 
        background: #1890ff;
        > span { 
            left: calc(100% - #{$h2} - 2px);
        }
    }
    &:focus { 
        outline: none;
    }
    &:active {
        > span { 
            width: $h2 + 4px;
        }
    }
    &.gulu-checked:active {
        > span {
            width: $h2 + 4px; margin-left: -4px;
        }
    }
}
</style>
