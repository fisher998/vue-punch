<template>
    <div class="tabs">
        <ul class="tab-list">
            <li class="item" @click="handleClickTab" v-for="item in activeList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data () {
        return {
            activeList: [
                {
                    id: 1,
                    name: '早读'
                },
                {
                    id: 1,
                    name: '早读'
                },
                {
                    id: 1,
                    name: '早读'
                },
                {
                    id: 1,
                    name: '早读'
                },
                {
                    id: 1,
                    name: '早读'
                },
                {
                    id: 1,
                    name: '早读'
                },
                {
                    id: 1,
                    name: '早读'
                }
            ]
        };
    },
    methods: {
        handleClickTab () {

        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/variable";
.tabs {
    .tab-list {
        display: flex;
        overflow: scroll;
        border-bottom: 1px solid #ddd;
        .item {
            flex: 0 0 50px;
            margin: 0 20px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            &.active {
                border-bottom: 2px solid @primary-color;
            }
        }
    }
}
</style>
