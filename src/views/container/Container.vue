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
                        <Input v-model="searchValue" size="large">
                            <Select v-model="select" slot="prepend" style="width: 80px">
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
                        <div class="hot-title">
                            <h2><Icon type="ios-paper" size="18" /> 热门词条</h2>
                            <div class="hot-togger">
                                <span class="active">本月</span>
                                <b>|</b>
                                <span>上月</span>
                            </div>
                            <span>更多>></span>
                        </div>
                        <div class="hot-entries-list">
                            <div class="hot-entries-list-item"
                                v-for="(item,index) in hotEntryList"
                                :key="`item_${index}`"
                                 :class="index!==0 && index!==1 ? 'specialClass' : '' ">
                                <h4>{{item.title}}</h4>
                                <p v-if="index === 0 || index == 1">{{item.content}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="split-line"></div>
                    <div class="hot-qanda">
                        <div class="hot-title">
                            <h2><Icon type="md-help-circle" size="18" /> 热门问答</h2>
                            <div class="hot-togger">
                                <span class="active">本月</span>
                                <b>|</b>
                                <span>上月</span>
                            </div>
                            <span>更多>></span>
                        </div>
                        <div class="hot-qanda-list">
                            <div class="hot-qanda-list-item"
                                v-for="(item,index) in hotQandAList"
                                :key="`item_${index}`">
                                <div class="item-box" v-if="index !== 2">
                                    <div class="item-top">
                                        <span>{{item.classify}}</span>
                                        <h5>{{item.title}}</h5>
                                    </div>
                                    <div class="item-bottom">
                                        <div class="item-bottom-pic">
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div class="item-bottom-content">
                                            <p>{{item.content}}</p>
                                            <div class="item-bottom-content-tag">
                                                <span v-for="(childTag,i) in item.tag" :key="`item_childTag_${i}`">{{childTag}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-special-box" v-if="index === 2" :style="{backgroundImage: 'url('+ item.img +')',backgroundSize:'cover'}">
                                    <span>{{item.classify}}</span>
                                    <h5>{{item.title}}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="part5">
                    <Information :informationListData="informationListData" @scroll-state="scroll"><div class="more">{{moreStatus}}</div></Information>
                </div>
            </div>
            <Crumbs/>
        </div>
    </div>
</template>

<script>
import Advert from './Advert'
import Crumbs from './Crumbs'
import Information from "./Information";
import { recommendedEntry, recommendedQandA, hotword, hotEntry, hotQandA, informationList } from "@/api/Container";
export default {
    name: 'ContainerView',
    components: {
        Advert,
        Crumbs,
        Information
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
            searchValue: '',
            select: 'day',
            hotEntryList: [],
            hotQandAList: [],
            pageIndex: 1,
            pageSize: 4,
            total: 0,
            moreStatus: '向下加载更多',
            informationListData: [],

        };
    },
    mounted() {
        this.getRecommendedEntry()
        this.getRecommendedQandA()
        this.getHotword()
        this.getHotEntry()
        this.getHotQandA()
        this.getInformationList(this.pageIndex,this.pageSize)
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
				if(res.code == 200){
                    this.hotwordList = res.data.list
				}
            })
        },
        getHotEntry(){
            let params = {
                pageIndex: 1,
                pageSize: 8
            }
            hotEntry(params).then((res) => {
				if(res.code == 200){
					this.hotEntryList = res.data.list;
				}
            })
        },
        getHotQandA(){
            let params = {
                pageIndex: 1,
                pageSize: 3
            }
            hotQandA(params).then((res) => {
				if(res.code == 200){
					this.hotQandAList = res.data.list;
				}
            })
        },
        getInformationList(pageIndex,pageSize){
            let params = {
                pageIndex: pageIndex,
                pageSize: pageSize
            }
            informationList(params).then((res) => {
                console.log(res)
				if(res.code == 200){
					this.informationListData = res.data.list;
				}
            })
        },
        scroll(){
            this.pageIndex = 1;
            this.total = this.total + 1
            this.pageSize = this.pageSize + 4
            if(this.total >= 4){
                console.log('没有了')
                this.moreStatus = '已经加载全部'
            }else{
                this.getInformationList(this.pageIndex,this.pageSize)
            }
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
                background: #fff;
                margin-bottom: 20px;
                .hot-entries{
                    width: 570px;
                    .hot-title{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 20px;
                        h2{
                            font-size: 16px;
                            text-align: center;
                            line-height: 60px;
                        }
                        .hot-togger{
                            width: 100px;
                            display: flex;
                            justify-content: space-between;
                            span{
                                cursor: pointer;
                                &.active{
                                    color: rgb(46, 119, 188);
                                }
                            }
                        }
                        span{
                            cursor: pointer;
                        }
                    }
                    .hot-entries-list{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        &-item{
                            width: 565px;
                            height: 150px;
                            padding: 0 20px;
                            background: #ccc;
                            margin-bottom: 5px;
                            h4{
                                width: 100%;
                                line-height: 40px;
                                font-size: 14px;
                                font-weight: 600;
                            }
                            p{
                                line-height: 24px;
                                font-size: 12px;
                            }
                        }
                        .specialClass{
                            width: 280px;
                            display: flex;
                            align-items: center;
                            height: 80px;
                            margin-right: 5px;
                            box-sizing: border-box;
                        }
                    }
                }
                .split-line{
                    width: 2px;
                    margin: 20px 9px 0 9px;
                    border-left: 1px solid #ccc;
                }
                .hot-qanda{
                    width: 570px;
                    .hot-title{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 20px;
                        h2{
                            font-size: 16px;
                            text-align: center;
                            line-height: 60px;
                        }
                        .hot-togger{
                            width: 100px;
                            display: flex;
                            justify-content: space-between;
                            span{
                                cursor: pointer;
                                &.active{
                                    color: rgb(46, 119, 188);
                                }
                            }
                        }
                        span{
                            cursor: pointer;
                        }
                    }
                    &-list{
                        width: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        &-item{
                            margin-bottom: 20px;
                            .item-box{
                                width: 100%;
                                .item-top{
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    margin-bottom: 20px;
                                    span{
                                        padding: 5px 10px;
                                        background-color: rgba(23, 147, 242, 1);
                                        color: #fff;
                                    }
                                    h5{
                                        padding-left: 60px;
                                        font-size: 16px;
                                        font-weight: 500;
                                    }
                                }
                                .item-bottom{
                                    width: 100%;
                                    display: flex;
                                    &-pic{
                                        width: 200px;
                                        height: 130px;
                                        margin-right: 30px;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                            display: block;
                                        }
                                    }
                                    &-content{
                                        width: 260px;
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: space-between;
                                        p{
                                            font-size: 14px;
                                            line-height: 26px;
                                        }
                                        &-tag{
                                            display: flex;
                                            span{
                                                padding: 10px 20px;
                                                border: 1px solid #ccc;
                                                margin-right: 20px;
                                            }
                                        }
                                    }
                                }
                            }
                            .item-special-box{
                                height: 150px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                span{
                                    width: 72px;
                                    padding: 5px 10px;
                                    background-color: rgba(23, 147, 242, 1);
                                    color: #fff;
                                }
                                h5{
                                    padding: 10px 50px;
                                    align-self: flex-end;
                                    font-size: 16px;
                                    font-weight: 500;
                                }
                            }
                        }
                        &-item:last-child{
                            margin-bottom: 0;
                        }
                    }
                }
            }
            .part5{
                width: 100%;
                background: #fff;
                padding: 10px 20px;
            }
        }
    }
}

</style>
