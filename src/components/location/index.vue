<template>
    <div>
        <div class="location">
            <!-- <p class="location-address f12">已进入签退范围：独墅湖校区二期独墅湖校区二期<span></span><router-link to="" class="relocation">去重新定位</router-link></p> -->
            <p class="location-address f12">
                {{ lnglatXY ? '已进入签到范围' : '未进入签到范围' }}
                {{ address }}
                <span></span>
                <router-link to="/manually-locate" class="relocation">去重新定位</router-link>
            </p>
        </div>
        <div>{{ isLocation }}</div>
    </div>
</template>

<script>
import AMap from 'AMap';
export default {
    data () {
        return {
            address: '定位中···',
            lnglatXY: false,
            defeated: null,
            punchAddress: null
        };
    },
    created () {
        // 请求打卡地点详细信息: 地址详情、坐标
        this.punchAddress = [116.43897, 39.92334];
    },
    mounted () {
        var mapObj = new AMap.Map('iCenter');
        mapObj.plugin('AMap.Geolocation', function () {
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
                useNative: true,
                panToLocation: true,
                extensions: 'base',
                zoomToAccuracy: true
            });
            mapObj.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);
            AMap.event.addListener(geolocation, 'error', onError);
        });
        var _this = this;
        var lnglatXY = [];
        function onComplete (data) {
            lnglatXY.push(data.position.getLng());
            lnglatXY.push(data.position.getLat());
            console.log(data.formattedAddress);
            _this.lnglatXY = lnglatXY;
            // new AMap.Geocoder({
            // }).getAddress(lnglatXY, function (status, result) {
            //     if (status === 'complete' && result.info === 'OK') {
            //         geocoderCallBack(result);
            //     }
            // });
        }
        // function geocoderCallBack (data) {
        //     console.log(data);
        //     _this.address = data.regeocode.formattedAddress; // 返回地址描述
        // }
        // 解析定位错误信息
        function onError (data) {
            console.log(data);
        }
    },
    computed: {
        isLocation () {
            return (new AMap.Circle({
                // 传入公司坐标
                center: this.punchAddress,
                redius: 50,
                fillOpacity: 0.1,
                fillColor: '#09f',
                strokeColor: '#09f',
                strokeWeight: 1
            }).contains(this.lnglatXY));
        }
    }
};
</script>

<style lang="less" scoped>
    .location{
        width: 100%;
        display: flex;
        justify-content: center;
        .location-address{
            width: 246px;
            line-height: 25px;
            letter-spacing: 0.5px;
            color: #666;
            position: relative;
            .relocation{
                color: #2AA7F7;
                margin-left: 5px;
            }
            span{
                position: absolute;
                width: 16px;
                height: 16px;
                top: 4px;
                left: -18px;
                background-image: url(../../image/success.png);
            }
        }
    }
</style>
