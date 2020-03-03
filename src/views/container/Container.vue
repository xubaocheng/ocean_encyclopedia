<!-- 内容区域 -->
<template>
    <div class="wrapper">
        <div class="content">
            <Advert/>
            <div class="container-view"></div>
            <Crumbs/>
        </div>
    </div>
</template>

<script>
import Advert from './Advert'
import Crumbs from './Crumbs'
export default {
    name: 'ContainerView',
    components: {
        Advert,
        Crumbs
    },
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='less' scoped>
.wrapper{
    width: 100%;
    .content{
        width: 1400px;
        margin: 0 auto;
        display: flex;
        .container-view{
            width: 1200px;
            height: 800px;
            margin: 0 auto;
            background: blue;
        }
    }
}

</style>
