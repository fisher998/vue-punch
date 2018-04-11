<template>
    <div id="app">
        <top v-bind="topProps" />
        <router-view/>
    </div>
</template>

<script>
import Top from 'components/top';

export default {
    name: 'App',
    components: {
        Top
    },
    data () {
        return {
            topProps: {
                title: '信息工程学院打卡'
            }
        };
    }
};
</script>

<style lang="less">
@import "./styles/index.less";
#app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
}
</style>
