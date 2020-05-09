<!-- 海洋问答 -->
<template>
    <div class="oceanQandA">
        <section class="part1">
            <div class="part1-wheel">
                <transition-group tag="ul" class="slide-ul" name="list">
                    <li
                        v-for="(list, index) in lempListData"
                        :key="`lempListData_item_${index}`"
                        v-show="index === currentIndex"
                        @mouseenter="stop"
                        @mouseleave="go"
                    >
                        <a :href="list.clickUrl">
                            <img :src="list.img" alt="" />
                        </a>
                    </li>
                </transition-group>
                <div class="carousel-items">
                    <span
                        v-for="(item, index) in lempListData.length"
                        :class="{ active: index === currentIndex }"
                        @mouseover="change(index)"
                        :key="`lempListData_item_Btn_${index}`"
                    ></span>
                </div>
            </div>
            <div class="part1-question">
                <h6>{{ questionModal.title }}</h6>
                <p class="part1-question-desc">{{ questionModal.desc }}</p>
                <p class="part1-question-data">
                    已经帮助<span>{{ questionModal.peopleNum }}</span
                    >人
                </p>
                <p class="part1-question-data">
                    已经提出<span>{{ questionModal.questionNum }}</span
                    >个问题
                </p>
                <div class="part1-question-box">
                    <Button
                        class="part1-question-box-btn"
                        type="info"
                        shape="circle"
                        size="large"
                        >我要提问</Button
                    >
                </div>
            </div>
        </section>
        <div class="part2">
            <hotWord :hotwordList="hotwordList"></hotWord>
            <searchModular></searchModular>
            <hotWord :hotwordList="hotwordList"></hotWord>
        </div>
        <div class="part3"></div>
        <div class="part4">
            <div class="classify">
                <classify :classifyListData="classifyListData" />
                <div class="classify-main">
                    <div class="classify-main-top">
                        <h3>
                            <Icon type="ios-list-box" size="20" /> 热门问答分类
                        </h3>
                        <div class="classify-main-top-list">
                            <div
                                class="classify-main-top-list-item"
                                v-for="(item,
                                index) in hotEntryClassifyListData"
                                :key="`hotEntryClassifyListData_item_${index}`"
                                :style="{ background: item.color }"
                            >
                                <span>{{ item.name }}</span>
                                <p>{{ item.content }}</p>
                                <div
                                    class="classify-main-top-list-item-pos"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="classify-main-bottom">
                        <h3>
                            <Icon type="ios-list-box" size="20" /> 热门问答TOP10
                        </h3>
                        <div class="classify-main-bottom-list">
                            <div
                                class="classify-main-bottom-list-item"
                                v-for="(item,
                                index) in hotEntryClassifyListRank"
                                :key="`hotEntryClassifyListRank_item_${index}`"
                            >
                                <div class="item-index">{{ index + 1 }}</div>
                                <div class="item-img" v-if="item.img">
                                    <a href="javascript:;"
                                        ><img :src="item.img" alt=""
                                    /></a>
                                </div>
                                <div class="item-main">
                                    <div class="item-main-title">
                                        <h4>{{ item.title }}</h4>
                                        <Icon size="20" type="md-arrow-up" />
                                    </div>
                                    <div class="item-main-content">
                                        <p>{{ item.content }}</p>
                                    </div>
                                    <div class="item-main-bottom">
                                        <div class="item-main-bottom-author">
                                            <span
                                                class="item-main-bottom-author-img"
                                                v-if="item.headSculpture"
                                                :style="{
                                                    backgroundImage:
                                                        'url(' +
                                                        item.headSculpture +
                                                        ')',
                                                    backgroundSize: 'cover'
                                                }"
                                            ></span
                                            ><span>{{ item.author }}</span>
                                        </div>
                                        <div class="item-main-bottom-date">
                                            <span>{{ item.date }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { hotword } from '@/api/Container'
import {
    QandAlempList,
    QandAclassifyList,
    hotQandAClassify,
    hotQandAClassifyRank
} from '@/api/OceanQandA'
export default {
    name: 'OceanQandA',
    components: {},
    data() {
        return {
            questionModal: {
                title: '我来试试',
                desc:
                    '这是所有海洋人都可参与协作的海洋百科全书，如有问题您可以在平台提问会有百万同僚为您解答。',
                peopleNum: 100,
                questionNum: 120
            },
            hotwordList: [],
            currentIndex: 0,
            timer: '',
            lempListData: [],
            classifyListData: [],
            hotEntryClassifyListData: [],
            hotEntryClassifyListRank: [],
            pageIndex: 1,
            pageSize: 10
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    },
    mounted() {
        this.getHotword()
        this.getLempList()
        this.getClassifyList()
        this.getHotEntryClassifList()
        this.getHotEntryClassifRank()
    },
    methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.lempListData.length - 1) {
                this.currentIndex = 0
            }
        },
        getHotword() {
            let params = {
                pageIndex: 1,
                pageSize: 3
            }
            hotword(params).then(res => {
                if (res.code == 200) {
                    this.hotwordList = res.data.list
                }
            })
        },
        getLempList() {
            let params = {
                num: 3
            }
            QandAlempList(params).then(res => {
                if (res.code == 200) {
                    this.lempListData = res.data.list
                }
            })
        },
        //获取侧边栏分类数据
        getClassifyList() {
            QandAclassifyList().then(res => {
                if (res.code == 200) {
                    this.classifyListData = res.data.list
                }
            })
        },
        //热门词条分类
        getHotEntryClassifList() {
            hotQandAClassify().then(res => {
                if (res.code == 200) {
                    this.hotEntryClassifyListData = res.data.list
                }
            })
        },
        //热门词条前10
        getHotEntryClassifRank() {
            let params = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }
            hotQandAClassifyRank(params).then(res => {
                console.log(res)
                if (res.code == 200) {
                    this.hotEntryClassifyListRank = res.data.list
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.oceanQandA {
    width: 1200px;
    background-color: rgba(242, 242, 242, 1);
    .part1 {
        width: 100%;
        height: 420px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        &-wheel {
            width: 960px;
            height: 100%;
            overflow: hidden;
            position: relative;
            .slide-ul {
                width: 100%;
                height: 100%;
                li {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .carousel-items {
                position: absolute;
                z-index: 10;
                top: 380px;
                width: 100%;
                margin: 0 auto;
                text-align: center;
                font-size: 0;
                span {
                    display: inline-block;
                    height: 6px;
                    width: 30px;
                    margin: 0 3px;
                    background-color: #b2b2b2;
                    cursor: pointer;
                }
                .active {
                    background-color: orange;
                }
            }

            .list-enter-to {
                transition: all 1s ease;
                transform: translateX(0);
            }

            .list-leave-active {
                transition: all 1s ease;
                transform: translateX(-100%);
            }

            .list-enter {
                transform: translateX(100%);
            }

            .list-leave {
                transform: translateX(0);
            }
        }
        &-question {
            width: 240px;
            height: 100%;
            padding: 40px 10px;
            box-sizing: border-box;
            background: #fff;
            h6 {
                width: 100%;
                line-height: 50px;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                color: rgb(255, 102, 0);
            }
            &-desc {
                width: 100%;
                line-height: 30px;
                color: rgb(153, 153, 153);
                margin-bottom: 20px;
            }
            &-data {
                width: 100%;
                padding: 10px 10px;
                span {
                    color: rgb(255, 102, 0);
                }
            }
            &-box {
                width: 100%;
                padding-top: 40px;
                margin-left: 50px;
                &-btn {
                    width: 100px;
                    height: 50px;
                }
            }
        }
    }
    .part2 {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        background: #fff;
    }
    .part3 {
        width: 100%;
        height: 100px;
        margin-bottom: 20px;
        background: yellow;
    }
    .part4 {
        width: 100%;
        margin-bottom: 20px;
        .classify {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            &-main {
                width: 910px;
                border: 1px solid #e5e5e5;
                padding: 10px 40px;
                background: #fff;
                &-top {
                    width: 100%;
                    h3 {
                        width: 100%;
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    &-list {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        &-item {
                            width: 19%;
                            height: 230px;
                            padding: 10px 20px;
                            margin-bottom: 20px;
                            cursor: pointer;
                            position: relative;
                            span {
                                display: block;
                                width: 100%;
                                height: 50px;
                                line-height: 50px;
                                font-size: 18px;
                                font-weight: bold;
                                text-align: center;
                            }
                            p {
                                text-indent: 2em;
                                line-height: 20px;
                            }
                            &-pos {
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                background: #000;
                                opacity: 0.5;
                                &:hover {
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }
                &-bottom {
                    width: 100%;
                    h3 {
                        width: 100%;
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    &-list {
                        width: 100%;
                        &-item {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            cursor: pointer;
                            .item-index {
                                min-width: 30px;
                                font-size: 18px;
                                font-weight: bold;
                            }
                            .item-img {
                                width: 200px;
                                height: 100px;
                                margin-right: 10px;
                            }
                            .item-main {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                &-title {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                }
                                &-content {
                                    width: 100%;
                                    p {
                                        width: 100%;
                                        line-height: 20px;
                                        // text-indent: 2em;
                                        font-size: 12px;
                                        margin-bottom: 10px;
                                    }
                                }
                                &-bottom {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    &-author {
                                        font-size: 12px;
                                        color: #9e9e9e;
                                        display: flex;
                                        &-img {
                                            width: 20px;
                                            height: 20px;
                                            display: inline-block;
                                            border-radius: 50%;
                                            margin-right: 10px;
                                        }
                                    }
                                    &-date {
                                        font-size: 12px;
                                        color: #9e9e9e;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
