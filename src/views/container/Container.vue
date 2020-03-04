<!-- 内容区域 -->
<template>
    <div class="wrapper">
        <div class="content">
            <Advert/>
            <div class="container-view">
                <div class="swiper">
                    <Carousel
                        v-model="value"
                        :autoplay="setting.autoplay"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :height="setting.height"
                        :arrow="setting.arrow">
                        <CarouselItem>
                            <div class="swiper-carousel">1</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="swiper-carousel">2</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="swiper-carousel">3</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="swiper-carousel">4</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div class="recommended">
                    <div class="recommended-entry">
                        <h2><Icon type="ios-paper" size="18" /> 推荐词条</h2>
                    </div>
                    <div class="recommended-qanda">
                        <h2><Icon type="md-help-circle" size="18" /> 推荐问答</h2>
                    </div>
                </div>
            </div>
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
            value: 0,
            setting: {
                autoplay: true,
                autoplaySpeed: 2000,
                dots: 'inside',
                radiusDot: true,
                trigger: 'click',
                arrow: 'hover',
                height:250
            }
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
    background-color: rgb(242,242,242);
    padding-top: 20px;
    .content{
        width: 1600px;
        margin: 0 auto;
        display: flex;
        .container-view{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            .swiper{
                width: 800px;
                height: 250px;
                margin-bottom: 20px;
                &-carousel{
                    width: 100%;
                    height: 100%;
                    line-height: 250px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    color: #fff;
                    background: green;
                }
            }
            .recommended{
                width: 400px;
                height: 250px;
                display: flex;
                justify-content: space-between;
                .recommended-entry,.recommended-qanda{
                    width: 199px;
                    height: 100%;
                    background: #fff;
                    h2{
                        font-size: 16px;
                        text-align: center;
                        line-height: 70px;
                    }
                }
            }

        }
    }
}

</style>
