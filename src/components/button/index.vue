<template>
    <button
        @click="handleClick"
        :class="classes"
        :disabled="disabled"
        :round="round"
        :style="styles"
    ><slot></slot></button>
</template>

<script>
import {oneOf} from 'utils';

const prefixCls = 'pui-button';

export default {
    name: 'Button',
    props: {
        size: {
            type: String,
            validator (value) {
                return oneOf(value, ['small', 'default']);
            }
        },
        type: {
            type: String,
            default: 'default',
            validator (value) {
                return oneOf(value, ['primary', 'success', 'default', 'error']);
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        isFill: {
            type: Boolean,
            default: false
        },
        long: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                this.isFill ? `bg-${this.type}` : 'bgwh',
                {
                    [`${prefixCls}-${this.size}`]: !!this.size,
                    [`${prefixCls}-${this.type}`]: !!this.type,
                    [`${prefixCls}-round`]: this.round,
                    [`${prefixCls}-long`]: this.long
                }
            ];
        },
        styles () {
            return {
                color: this.isFill ? '#fff' : ''
            };
        }
    },
    methods: {
        handleClick () {
            this.$emit('click', event);
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/variable.less";

.pui-button{
    border: 1px solid @primary-color;
    color: @primary-color;
    font-size: 12px;
    outline: none;
    letter-spacing: 1px;
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer;
    &-small{
        text-align: center;
        white-space: nowrap;
    }
    &-success {
        border-color: @success-color;
        color: @success-color;
    }
    &-error {
        border-color: @error-color;
        color: @error-color;
    }
    &-round {
        border-radius: 20px;
    }
    &[disabled] {
        background: #f7f7f7;
        border-color: #dddee2;
        color: #bbbec5 !important;
        cursor: not-allowed;
    }
    &-long {
        width: 100%;
    }
}
</style>
