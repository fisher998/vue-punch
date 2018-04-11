<template>
    <div class="home">
        <Header v-bind="headerProps" />
        <div class="calendar-wrapper">
            <Calendar></Calendar>
        </div>
        <div>
            <ul>
                <li><router-link to="/start">晨跑</router-link></li>
                <li>早读</li>
                <li>开会</li>
                <li>晚自习</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Calendar from 'components/calendar';
import Header from 'components/header';

export default {
    name: 'Home',
    components: {
        Calendar,
        Header
    },
    data () {
        return {
            headerProps: {
                name: 'tom',
                date: '2012-2-3'
            }
        };
    }
};
</script>

<style lang="less" scoped>
.home {
    background: #efefef;
    height: 100%;
    .calendar-wrapper {
        // margin-top: 10px;
    }
    li {
        background: #fff;
        margin: 5px 0;
        height: 50px;
        line-height: 50px;
    }
}
</style>


