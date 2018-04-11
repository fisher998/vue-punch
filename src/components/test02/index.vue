<template>
    <div>
        <!-- <pu-header /> -->
        <!-- <location /> -->
        <!-- <div id="container" tabindex="0"></div> -->
        <!-- <circle-button></circle-button> -->
        <!-- <manually-locate></manually-locate> -->
        <!-- <router-view/> -->
        <Collapse v-for="(items, key, index) in attendance.att" :key="index" :attendance="items" :index="index"/>
    </div>
</template>

<script>
// import {Vue, Component} from 'vue-property-decorator';
import PuHeader from 'components/header/index.vue';
import CircleButton from 'components/circle-button/index.vue';
import Top from 'components/top/index.vue';
import ManuallyLocate from '../../views/manually-locate/index.vue';
import location from 'components/location';
import Collapse from 'components/collapse';
export default {
    data () {
        return {
            attendance: {
                'att': [
                    {
                        'days': {
                            'name': '应出勤天数',
                            'day': '22'
                        },
                        'info': [
                            '2018-01-02(星期一) 06:00',
                            '2018-01-02(星期一) 06:00',
                            '2018-01-02(星期一) 06:00'
                        ]
                    },
                    {
                        'days': {
                            'name': '应出勤天数',
                            'day': '0'
                        },
                        'info': [
                            '2018-01-02(星期一) 06:00',
                            '2018-01-02(星期一) 06:00',
                            '2018-01-02(星期一) 06:00'
                        ]
                    },
                    {
                        'days': {
                            'name': '应出勤天数',
                            'day': '22'
                        },
                        'info': [
                            '2018-01-02(星期一) 06:00',
                            '2018-01-02(星期一) 06:00',
                            '2018-01-02(星期一) 06:00'
                        ]
                    }
                ]
            }
        };
    },
    components: {
        PuHeader,
        location,
        CircleButton,
        Top,
        ManuallyLocate,
        Collapse
    },
    mounted() {
        // var map = new AMap.Map('container',{
        //     resizeEnable: true,
        //     zoom: 6,
        //     center: [116.43897,39.92334]
        // });
        // var marker = new AMap.Marker({
        //     position: [116.43897,39.92334]
        // });
        // marker.setMap(map);
        // var circle = new AMap.Circle({
        //     // 传入公司坐标
        //     center: [116.43897,39.92334],
        //     redius: 50,
        //     fillOpacity:0.1,
        //     fillColor:'#09f',
        //     strokeColor:'#09f',
        //     strokeWeight:1
        // })
        // circle.setMap(map);
        // console.log(circle.contains());
        // map.setFitView()
        // var info = new AMap.InfoWindow({
        //     content: '<div class="title">高德地图</div><div class="content">'+
        //             '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>',
        //     offset:new AMap.Pixel(0,-28),
        //     size:new AMap.Size(200,0)
        // })
        // info.open(map,marker.getPosition())
    }
}
</script>

<style lang="less" scoped>
    #container{
        width: 100%;
        height: 408px;
    }
</style>
