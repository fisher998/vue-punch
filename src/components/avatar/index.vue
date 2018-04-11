<template>
    <span
        @click="handleClick"
        :class="classes">
        <img :src="src" v-if="src" alt="avatar">
    </span>
</template>

<script lang="ts">
import Vue from 'vue';
const prefixCls = 'pui-avatar';

export default Vue.extend({
    name: 'Avatar',
    props: {
        src: {
            type: String
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
    .pui-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: inline-block;
        text-align: center;
        background: #ddd;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
    }
</style>
