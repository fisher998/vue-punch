<template>
    <svg :class="classes" :style="styles" aria-hidden="true">
        <use :xlink:href="iconType"></use>
    </svg>
</template>

<script>
const prefixCls = 'pui-icon';

export default {
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        iconType () {
            return `#icon-${this.type}`;
        },
        classes () {
            return `${prefixCls}`;
        },
        styles () {
            let style = {};

            if (this.size) {
                style.fontSize = `${this.size}px`;
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    }
};
</script>

<style lang="less" scoped>
    .pui-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
