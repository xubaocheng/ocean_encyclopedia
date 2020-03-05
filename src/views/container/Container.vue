<!-- 内容区域 -->
<template>
    <div class="wrapper">
        <div class="content">
            <Advert/>
            <div class="container-view">
                <div class="part1">
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
                            <div class="recommended-entry-list">
                                <span v-for="(item,index) in recommendedEntryList" :key="`recommendedEntryList_${index}`">{{item.name}}</span>
                            </div>
                            <div class="entry-create-btn">
                                <Button type="primary" shape="circle" size="large">创建词条</Button>
                            </div>
                        </div>
                        <div class="recommended-qanda">
                            <h2><Icon type="md-help-circle" size="18" /> 推荐问答</h2>
                            <div class="recommended-qanda-list">
                                <p v-for="(item,index) in recommendedQandAList" :key="`recommendedQandAList_${index}`">{{item.content}}</p>
                            </div>
                            <div class="qanda-create-btn">
                                <Button type="primary" shape="circle" size="large">我要提问</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="part2">
                    <div class="hot-word">
                        <span class="hot-word-item" v-for="(item,index) in hotwordList" :key="`hotwordList_${index}`" :style="{lineHeight:height[index],height:height1[index]}">{{item.name}}</span>
                    </div>
                    <div class="search">
                        <Input v-model="value13" size="large">
                            <Select v-model="select3" slot="prepend" style="width: 80px">
                                <Option value="day">Day</Option>
                                <Option value="month">Month</Option>
                            </Select>
                            <Button slot="append" icon="ios-search"></Button>
                        </Input>
                    </div>
                    <div class="hot-word">
                        <span class="hot-word-item" v-for="(item,index) in hotwordList" :key="`hotwordList_${index}`" :style="{lineHeight:height[index],height:height1[index]}">{{item.name}}</span>
                    </div>
                </div>
                <div class="part3"></div>
                <div class="part4">
                    <div class="hot-entries">

                    </div>
                    <div class="hot-qanda">

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
import { recommendedEntry, recommendedQandA, hotword } from "@/api/Container";
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
            },
            recommendedEntryList: [],
            recommendedQandAList: [],
            hotwordList: [],
            height:['80px','110px','50px','50px','20px','10px'],
            height1:['40px','50px','50px','50px','20px','60px'],
            value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
        };
    },
    mounted() {
        this.getRecommendedEntry()
        this.getRecommendedQandA()
        this.getHotword()

    },
    methods: {
        getRecommendedEntry(){
            recommendedEntry().then((res) => {
				if(res.code == 200){
					this.recommendedEntryList = res.data.list;
				}
            })
        },
        getRecommendedQandA(){
            let params = {
                pageIndex: 1,
                pageSize: 3
            }
            recommendedQandA(params).then((res) => {
				if(res.code == 200){
					this.recommendedQandAList = res.data.list;
				}
            })
        },
        getHotword(){
            let params = {
                pageIndex: 1,
                pageSize: 3
            }
            hotword(params).then((res) => {
                console.log(res)
				if(res.code == 200){
                    this.hotwordList = res.data.list
				}
            })
        }
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
            .part1{
                width: 100%;
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
                    .recommended-entry{
                        width: 199px;
                        height: 100%;
                        background: #fff;
                        h2{
                            font-size: 16px;
                            text-align: center;
                            line-height: 60px;
                        }
                        &-list{
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            padding: 0 20px;
                            box-sizing: border-box;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            span{
                                min-width: 60px;
                                line-height: 34px;
                            }
                        }
                        .entry-create-btn{
                            text-align: center;
                        }
                    }
                    .recommended-qanda{
                        width: 199px;
                        height: 100%;
                        background: #fff;
                        h2{
                            font-size: 16px;
                            text-align: center;
                            line-height: 60px;
                        }
                        &-list{
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            padding: 0 20px;
                            box-sizing: border-box;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            p{
                                min-width: 60px;
                                line-height: 34px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-break: break-all;
                            }
                        }
                        .qanda-create-btn{
                            text-align: center;
                        }
                    }
                }
            }
            .part2{
                width: 100%;
                height: 200px;
                display: flex;
                margin-bottom: 20px;
                background: #fff;
                .hot-word{
                    width: 300px;
                    padding: 0 20px;
                    display: flex;
                    flex-wrap: wrap;
                    &-item{
                        min-width: 80px;
                        text-align: center;
                        padding: 5px;
                    }
                }
                .search{
                    width: 600px;
                    padding-top: 80px;
                }
            }
            .part3{
                width: 100%;
                height: 100px;
                margin-bottom: 20px;
                background: yellow;
            }
            .part4{
                width: 100%;
                padding: 10px 20px;
                display: flex;
                .hot-entries{

                }
                .hot-qanda{

                }
            }
        }
    }
}

</style>
