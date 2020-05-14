<template>
    <div class="home">
        <Header />
        <div class="wrapper">
            <div class="content">
                <Advert v-if="acShow" />
                <router-view></router-view>
                <Crumbs v-if="acShow" />
            </div>
        </div>
        <Footer />
        <BackTop :height="100" :bottom="200">
            <div class="top">返回顶端</div>
        </BackTop>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/header/Header.vue'
import Advert from '@/views/container/Advert'
import Crumbs from '@/views/container/Crumbs'
import Footer from '@/views/footer/Footer.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Home',
    components: {
        Header,
        Advert,
        Crumbs,
        Footer
    },
    computed: {
        ...mapGetters(['acShow'])
    }
}
</script>
<style lang="less" scoped>
.home {
    width: 100%;
    background: url('../../../src/assets/img/bj.png') no-repeat;
    background-color: #fff;
    .wrapper {
        width: 100%;
        padding-top: 20px;

        .content {
            width: 1200px;
            position: relative;
            margin: 0 auto;
            // display: flex;
        }
    }
    .top {
        padding: 10px;
        background: rgba(0, 153, 229, 0.7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
}
</style>
