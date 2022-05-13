<template>
    <div :size="size">
        <button v-bind="rest">
            <slot />
        </button>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
    setup(props,context){
        const {size, ...rest} = context.attrs  // 除了size，其他变量都放在rest里
        return {size,rest}
    }
}
</script>

<style lang="scss">
    div {border:1px solid red;}
</style>
