<template>
    <div class="pui-step">
        <div class="step-line">
            <div :class="headClasses"></div>
            <div :class="tailClasses"></div>
        </div>
        <div class="main">
            <div class="title">{{title}}</div>
            <div class="content"><slot></slot></div>
        </div>
    </div>
</template>

<script>
import {oneOf} from 'utils';

export default {
    name: 'Step',
    props: {
        status: {
            type: String,
            default: 'wait',
            validator (value) {
                return oneOf(value, ['wait', 'finish']);
            }
        },
        title: {
            type: String
        }
    },
    data () {
        return {
            showTail: true
        };
    },
    computed: {
        headClasses () {
            return [
                'head',
                `head-${this.status}`
            ];
        },
        tailClasses () {
            return [
                'tail',
                {
                    dn: !this.showTail
                }
            ];
        }
    }
};
</script>

<style lang="less" scoped>
@import '~styles/variable';
    .pui-step {
        display: flex;
        .step-line {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .head {
                width: 9px;
                height: 9px;
                // border: 2px solid #fff;
                border-radius: 50%;
                &-wait {
                    background: #ccc;
                }
                &-finish {
                    background: @success-color;
                }
            }
            .tail {
                flex: 1;
                width: 2px;
                background: #dedede;
            }
        }
        .main {
            flex: 1;
            padding: 3px 10px 16px;
            .title {
                font-size: @font-size-base;
                color: #666;
                padding-bottom: 10px;
            }
        }
    }
</style>
