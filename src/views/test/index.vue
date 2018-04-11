<template>
    <div class="container">
        <div class="box"></div>
        <br>
        <div class="box1"></div>
        <br>
        <div class="box2"></div>
        <br>
        <div class="box3"></div>
        <br>
        <div class="test"></div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
    .test {
        border-top: 1px solid #ddd;
    }
    .box {
        height: 10px;
        width: 100%;
        border-top: 1px solid #ddd;
        transform: scaleY(0.5);
    }
    .box1 {
        box-sizing: border-box;
        line-height: 0;
        background-color: rgb(239, 239, 239);
        width: 100%;
        height: 1px;
    }
    .box2 {
        border-bottom: 1px solid #eceef0;
        box-shadow: 0 1px 1px #fff;
    }
    .box3 {
        width: 100%;
        height: 1px;
        background-image: linear-gradient(0deg, #ddd 50%, transparent 50%);
    }
</style>
