<template>
    <div class="home">
        <Header/>
        <Container/>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/header/Header.vue'
import Container from '@/views/container/Container.vue'
import Footer from '@/views/footer/Footer.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Container,
        Footer
    }
}
</script>
<style lang="less" scoped>
.home{
    width: 100%;
    background: green;

}
</style>
