<template>
    <button class="gulu-button" :class="`现在的主题是 - ${theme}`">
        <slot />
    </button>
</template>

<script lang="ts">
export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    }
}
</script>

<style lang="scss">
    div {border:1px solid red;}
</style>
