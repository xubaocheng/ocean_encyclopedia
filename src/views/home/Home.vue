<template>
    <div class="home">
        <Header />
        <div class="wrapper">
            <div class="content">
                <Advert />
                <router-view></router-view>
                <Crumbs />
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
export default {
    name: 'Home',
    components: {
        Header,
        Advert,
        Crumbs,
        Footer
    }
}
</script>
<style lang="less" scoped>
.home {
    width: 100%;
    background: url('../../../src/assets/img/login-bg.png') no-repeat center;
    background-size: cover;
    .wrapper {
        width: 100%;
        padding-top: 20px;
        .content {
            width: 1600px;
            margin: 0 auto;
            display: flex;
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
