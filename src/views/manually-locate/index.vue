<template>
    <div>
        <top title="定位打卡" />
        <div id="container"></div>
        <div class="my-location">
            <div class="my-location-top">
                <span class="mylocation">我的位置</span>
                <div class="local"><i>(</i>在<span>打卡范围</span><i>)</i><span>我要反馈</span></div>
            </div>
            <div class="my-location-center">
                <span class="normal">正常</span>
                {{ getAddress }}
            </div>
            <div class="my-location-bottom">
                <Button type="primary" class="btn" :long="true" :isFill='true'>{{ `${nowDate}     正常打卡` }}</Button>
            </div>
        </div>
    </div>
</template>

<script>
import AMap from "AMap";
import AMapUI from 'AMapUI';
import Top from 'components/top/index.vue';
import Button from 'components/button/index.vue';
import { getNowTime } from 'utils';
export default {
    data () {
        return {
            lnglatXY: [],
            islocation: null,
            address: null,
            nowDate: null
        }
    },
    components: {
        Top,
        Button
    },
    created () {
        this.nowDate = getNowTime (new Date());
    },
    mounted () {
        var _this = this;
        var map, geolocation, circle;
        map = new AMap.Map('container', {
            resizeEnable: true,
        });
        map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({
                buttonOffset: new AMap.Pixel(310, 10),
                zoomToAccuracy: true,
                enableHighAccuracy: true,// 是否使用高精度定位，默认:true
                timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           // 定位结果缓存0毫秒，默认：0
                convert: true,           // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        // 显示定位按钮，默认：true
                // buttonPosition: 'LB',    // 定位按钮停靠位置，默认：'LB'，左下角
                showMarker: true,        // 定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        // 定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     // 定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:true      // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);
            AMap.event.addListener(geolocation, 'error', onError);
        });
        // 解析定位结果
        function onComplete(data) {
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                // 启动页面
                initPage(SimpleMarker, data);
            });
            console.log(data);
            _this.address = data.formattedAddress;
            _this.lnglatXY = [data.position.getLng(), data.position.getLat()];
            console.log(_this.lnglatXY);
        }
        // 解析定位错误信息
        function onError(data) {

        }
        // 打卡范围
        circle = new AMap.Circle({
            // 传入公司坐标
            center: [116.43887, 39.92334],
            radius: 50,
            fillOpacity: 0.1,
            fillColor: '#09f',
            strokeColor: '#09f',
            strokeWeight: 1
        });
        circle.setMap(map);
        // 加点坐标
        function initPage(SimpleMarker, data) {
            // 创建SimpleMarker实例
            var marker1 = new SimpleMarker({
                iconLabel: {
                    innerHTML: '<i>我</i>', // 设置文字内容
                    style: {
                        color: '#fff' // 设置文字颜色
                    }
                },
                iconTheme: 'default',
                iconStyle: 'lightblue',
                // ...其他Marker选项...，不包括content
                map: map,
                position: [data.position.getLng(), data.position.getLat()]
            });
            var marker2 = new SimpleMarker({
                iconLabel: {
                    innerHTML: '<i>校</i>', // 设置文字内容
                    style: {
                        color: '#fff'
                    }
                },
                iconTheme: 'default',
                iconStyle: 'red',
                // ...其他Marker选项...，不包括content
                map: map,
                position: [116.43887, 39.92334]
            });
        }
        document.querySelector('.amap-logo').style.display = 'none';
        document.querySelector('.amap-copyright').style.visibility = 'hidden';
        let Time;
        if (timer) clearInterval(timer);
        var timer = setInterval(() => {
            this.nowDate = getNowTime (new Date());
        }, 1000);
    },
    computed: {
        getLocation () {
            this.islocation = new AMap.Circle({
                // 传入公司坐标
                center: [116.43897, 39.92334],
                redius: 50,
                fillOpacity: 0.1,
                fillColor: '#09f',
                strokeColor: '#09f',
                strokeWeight: 1
            }).contains(this.lnglatXY);
            return this.islocation;
        },
        getAddress () {
            return this.address;
        }
    }
};
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 460px;
}
.my-location {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 143px;
    background-color: #fff;
    justify-content: space-between;
    letter-spacing: 0.5px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .my-location-top {
        display: flex;
        align-content: center;
        padding: 14px 12px 0 12px;
        .mylocation {
            font-size: 15px;
            margin-right: 7px;
            color:#333;
        }
        .local {
            display: inline;
            font-size: 12px;
            span {
                color: #35CF50;
            }
            span:nth-of-type(2) {
                margin-left: 2px;
            }
            i {
                vertical-align: 1px;
            }
        }
    }
    .my-location-center {
        font-size: 12px;
        color: #999;
        margin: 0 12px;
        line-height: 18px;
        vertical-align: middle;
        .normal {
            color: #fff;
            font-size: 10px;
            background: #35CF50;
            border-radius: 12px;
            margin-right: 2px;
            padding-top: 2px;
            vertical-align: 1px;
            padding: 2px 3px 0 3px;
        }
    }
    .my-location-bottom {
        margin: 0 12px 7px 12px;
        .btn{
            padding-top: 13px;
            padding-bottom: 15px;
            font-size: 16px;
        }
    }
}
</style>
