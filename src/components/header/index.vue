<template>
    <div class="pu-box">
        <div class="pu-header">
            <div class="avatar" @click="goPersonal">
                <Avatar />
                <div class="avatar-message">
                    <div class="f16">{{name}}</div>
                    <time class="f12">{{date}}</time>
                </div>
            </div>
            <Button size="" type="primary" :isFill="false">扫码签到/退</Button>
        </div>
    </div>
</template>

<script>
import Avatar from 'components/avatar';
import Button from 'components/button';
export default {
    name: 'Header',
    props: {
        name: String,
        date: String
    },
    components: {
        Avatar,
        Button
    },
    data () {
        return {
            name: null,
            data: null
        }
    },
    methods: {
        goPersonal () {
            this.$router.push('personal');
        }
    }
};
</script>

<style lang="less" scoped>
@import '~styles/mixin';
    .pu-box{
        width: 100%;
        height: 58px;
        display: flex;
        align-content: center;
        padding: 1px 0;
        background: #fff;
        .border-top-1px(#ddd);
        .border-bottom-1px(#ddd);
        .pu-header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 16px;
        }
        .avatar{
            display: flex;
            align-items: center;
            .avatar-message{
                margin-left: 10px;
                height: 38px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: left;
                .f12{
                    color: #999999;
                }
            }
        }
    }
</style>
