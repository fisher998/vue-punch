<template>
    <div class="title">
        <Icon type="back" size="17" color="#777D90" class="icon" @click.native="goBack"></Icon>
        <div>
            {{ title }}
        </div>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import Icon from 'components/icon';
export default Vue.extend({
    props: {
        title: {
            type: String,
            required: true
        }
    },
    components: {
        Icon
    },
    methods: {
        goBack () {
            // 设置后退事件，直到首页后不再退
            if (this.$route.path !== '/') {
                this.$router.go(-1);
            }
        }
    }
});
</script>

<style lang="less" scoped>
    .title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        color: #5C5C57;
        text-align: center;
        position: relative;
        .icon{
            position: absolute;
            top: 50%;
            margin-top: -9px;
            left: 18px;
        }
    }
</style>
