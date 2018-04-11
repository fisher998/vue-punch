<template>
    <div class="box">
        <div class="el" @click="isShowTime()">
            <div class="el-collapse">
                <div class="el-collapse-out">
                    <div class="el-collapse-out-left" >{{ attendance.days.name }}</div>
                    <div class="el-collapse-out-right">{{ attendance.days.day }}天</div>
                    <Icon type="top" size="12" color="#000" class="icon el-collapse-out-icon" v-show="isShow"></Icon>
                    <Icon type="bottom" size="12" color="#000" class="icon el-collapse-out-icon" v-show="!isShow"></Icon>
                </div>
            </div>
            <div class="el-collapse-dates" v-for="item in attendance.info" :key="item.id" v-show="isShow">
                <div class="el-collapse-dates-date">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from 'components/icon';
export default {
    props: {
        attendance: {
            type: Object,
            required: true
        },
        index: {
            type: Number
        }
    },
    components: {
        Icon
    },
    data () {
        return {
            isShow: false
        };
    },
    methods: {
        isShowTime (data) {
            this.isShow = !this.isShow;
        }
    }
};
</script>

<style lang="less" scoped>
@import '~styles/mixin';
.el {
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    &-collapse {
        .border-bottom-1px(#000);
        position: relative;
        &-out {
            padding: 0 29px 0 15px;
            display: flex;
            align-content: center;
            justify-content: space-between;
            height: 45px;
            line-height: 45px;
            &-icon {
                position: absolute;
                right: 9px;
                top: 50%;
                margin-top: -6px;
            }
        }
    }
    &-collapse-dates {
        padding: 0 0 0 15px;
        background-color: #F6F9FA;
        &-date {
            display: flex;
            align-content: center;
            justify-content: space-between;
            height: 45px;
            line-height: 45px;
            .border-bottom-1px(#000);
        }
    }
}
</style>
