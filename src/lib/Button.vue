<template>
    <button class="gulu-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="gulu-loadingIndicator"></span>
        <span><slot /></span>
    </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props){
        const {theme, size, level, disabled, loading} = props
        const classes = computed (()=>{
            return {
                [`gulu-theme-${theme}`]: theme, 
                [`gulu-size-${size}`]: size,
                [`gulu-level-${level}`]: level,
                [`gulu-disabled-${disabled}`]: disabled,
                [`gulu-loading-${loading}`]: loading
            }
        })
        return {classes}
    }
}
</script>

<style lang="scss">
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.gulu-button {
    box-sizing: border-box;
    height: 35px;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
        margin-left: 8px;
    }
    &:hover, &:focus {
        color: white;
        border-color: $blue;
        background: $blue
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }

    // 主题theme
    &.gulu-theme-default {
        background: #fff;
        color: #4a4444;
        border: 1px solid #222831;

        &:hover, &:focus {
            color: #fff;
            border-color: #007bff;
            background-color: #40a9ff;
        }
    }
    &.gulu-theme-primary {
        background: #40babf;
        border: 1px solid #40babf;
        color: #4a4444;
        &:hover,&:focus {
            color: #40babf;
            border-color: #40babf;
            background: #fff;
        }
    }
    &.gulu-theme-warning {
        background: #f7e4a4;
        border: 1px solid #fce38a;
        color: #4a4444;
        &:hover, &:focus {
            color: #ffc107;
            border-color: #ffc107;
            background: #fff;
        }
    }
    &.gulu-theme-success {
        background: #28a745;
        border: 1px solid #28a745;
        color: #fff;
        &:hover, &:focus {
            color: #28a745;
            border-color: #28a745;
            background-color: #fff;
        }
    }
    &.gulu-theme-danger {
        background: #d72323;
        border: 1px solid #d72323;
        color: #eeeeee;
        &:hover, &:focus {
            color: #d72323;
            border-color: #d72323;
            background-color: #fff;
        }
    }
    &.gulu-theme-link {
        border: none;
        background: inherit;
        color: #4a4444;
        box-shadow: none;
        &:hover, &:focus {
            > span {
                color: #40a9ff;
                border-bottom: 1px solid #222831;
            }
        }
    }

    // 尺寸size
    &.gulu-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    &.gulu-size-normal {
        padding: 12px 24px;
    }
    &.gulu-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    // 加载中
    // .gulu-button-loading {
    //     pointer-events: none;
    // }
    > .gulu-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: gulu-spin 1s infinite linear;
    }
    @keyframes gulu-spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
}
</style>
