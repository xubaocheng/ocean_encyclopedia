<!-- 广告模块 -->
<template>
    <div class="advert">
        <div class="advert-one">
            广告位
        </div>
        <div class="advert-two">
            广告位
        </div>
    </div>
</template>

<script>
export default {
    name: 'Advert',
    components: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.advert {
    width: 200px;
    height: 300px;
    background: orange;
    position: absolute;
    left: -200px;
    top: 0;
    &-one {
        width: 100%;
        height: 300px;
        background: orange;
        border: 10px solid #ccc;
    }
    &-two {
        width: 100%;
        height: 200px;
        background: green;
        border: 10px solid #ccc;
    }
}
</style>
