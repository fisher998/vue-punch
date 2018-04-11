<template>
    <div class="start">
        <div>迎接新的一天，勿忘初心</div>
        <div class="steps-wrapper">
            <Steps>
                <Step v-bind="stepProps[0]">
                    <div v-if="isStartPunch" class="step-wrapper">
                        <span class="f20 g0 v-2">打卡时间09：30</span>
                        <span class="pl5"></span>
                        <Button type="success">正常</Button>
                        <Button type="error">迟到</Button>
                        <span class="pl2"></span>
                        <Button>极速打卡</Button>
                    </div>
                    <div v-else class="circle-button-wrapper">
                        <circle-button v-bind="startCircleButtonProps" @click="startPunch"></circle-button>
                    </div>
                    <div class="location-wrapper">
                        <Location />
                    </div>
                </Step>
                <step v-bind="stepProps[1]">
                    <div v-if="isEndPunch" class="step-wrapper">
                        <span class="f20 g0">打卡时间18：30</span>
                    </div>
                    <div v-if="isStartPunch && !isEndPunch" class="circle-button-wrapper">
                        <circle-button v-bind="endCircleButtonProps" @click="endPunch"></circle-button>
                    </div>
                </step>
            </Steps>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Steps from 'components/steps';
import CircleButton from 'components/circle-button';
import Button from 'components/button';
import Location from 'components/location';

const Step = Steps.Step;

export default {
    name: 'Start',
    components: {
        Steps,
        Step,
        CircleButton,
        Location,
        Button
    },
    data () {
        return {
            // 打卡状态总共有三种情况：
            // 开始打卡  结束打卡
            // false    false
            // true     false
            // true     true
            isStartPunch: false, // 开始打卡是否已完成
            isEndPunch: false, // 结束打卡是否已完成
            startCircleButtonProps: {
                text: '开始打卡',
                time: ''
            },
            endCircleButtonProps: {
                text: '结束打卡',
                time: ''
            }
        };
    },
    computed: {
        ...mapGetters([
        ]),
        stepProps () {
            return [
                {
                    title: '上班打卡09：30',
                    status: this.isStartPunch ? 'wait' : 'finish'
                },
                {
                    title: '下班时间18：30',
                    status: this.isEndPunch || !this.isStartPunch ? 'wait' : 'finish'
                }
            ];
        }
    },
    created () {
        this.GetPunchInfo({userid: '111', dates: '2018-04-04'});
    },
    mounted () {
        this.showTime();
    },
    methods: {
        // 实时显示时间
        showTime () {
            let nowTime = new Date();
            let h = nowTime.getHours();
            let m = nowTime.getMinutes();
            let s = nowTime.getSeconds();
            if (!this.isStartPunch) {
                this.startCircleButtonProps.time = `${h}:${m}:${s}`;
                setTimeout(this.showTime, 1000);
            } else if (this.isStartPunch && !this.isEndPunch) {
                this.endCircleButtonProps.time = `${h}:${m}:${s}`;
                setTimeout(this.showTime, 1000);
            }
        },
        // 点击开始打卡按钮
        startPunch () {
            this.isStartPunch = true;
        },
        // 点击结束打卡按钮
        endPunch () {
            this.isEndPunch = true;
        },
        ...mapActions([
            'GetPunchInfo'
        ])
    }
};
</script>

<style lang="less" scoped>
    .start {
        padding: 12px 10px;
        color: #666;
        .steps-wrapper {
            padding: 20px 0;
            .step-wrapper {
                padding-bottom: 50px;
            }
            .circle-button-wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }
    }
</style>
