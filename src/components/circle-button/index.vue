<template>
    <div
        :class="classes"
        @click="handleClick">
        <div class="text">{{text}}</div>
        <div class="time">{{time}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
const prefixCls = 'pui-circle-button';
export default Vue.extend({
    name: 'CircleButton',
    props: {
        text: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    computed: {
        classes (): (string | { [x: string]: boolean })[] {
            return [
                `${prefixCls}`
            ];
        }
    },
    methods: {
        handleClick (event: Object): void {
            this.$emit('click', event);
        }
    }
});
</script>

<style lang="less" scoped>
    @import "~styles/variable.less";
    @import "~styles/mixin.less";
    .pui-circle-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 136px;
        height: 136px;
        border-radius: 50%;
        background: radial-gradient(#00eb6a, #00d941);
        color: #fff;
        cursor: pointer;
        .text {
            font-size: 18px;
            .text-overflow();
        }
        .time {
            padding-top: 5px;
            font-size: @font-size-base;
            .text-overflow();
        }
    }
</style>
