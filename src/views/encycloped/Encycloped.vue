<!-- 海洋百科 -->
<template>
    <div class="encycloped">
        <div class="part1">
            <div class="lemp-box">
                <Lemp :lempListData="lempListData" />
            </div>
            <div class="creat-entry-qanda">
                <h4>{{ modulTitle }}</h4>
                <p>{{ modulContent }}</p>
                <div class="create-btn">
                    <Button type="primary" shape="circle" size="large"
                        >创建词条</Button
                    >
                </div>
            </div>
        </div>
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
                            <Icon type="ios-list-box" size="20" /> 热门词条分类
                        </h3>
                        <div class="classify-main-top-list">
                            <div
                                class="classify-main-top-list-item"
                                v-for="(item,
                                index) in hotEntryClassifyListData"
                                :key="`hotEntryClassifyListData_item_${index}`"
                                :style="{ background: item.color }"
                            >
                                <span>{{ item.name }}</span
                                ><Icon size="28" :type="item.icon" />
                            </div>
                        </div>
                    </div>
                    <div class="classify-main-bottom">
                        <h3>
                            <Icon type="ios-list-box" size="20" /> 热门词条TOP10
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
    lempList,
    classifyList,
    hotEntryClassify,
    hotEntryClassifyRank
} from '@/api/Encycloped'
import Lemp from '_c/lemp/Lemp.vue'
export default {
    name: 'encycloped',
    components: {
        Lemp
    },
    data() {
        return {
            hotwordList: [],
            modulTitle: '我来试试',
            modulContent:
                '这是所有海洋人都可参与协作的海洋百科全书，您可以亲自创建词条为平台做出贡献。',
            lempListData: [],
            classifyListData: [],
            hotEntryClassifyListData: [],
            hotEntryClassifyListRank: [],
            pageIndex: 1,
            pageSize: 10
        }
    },
    mounted() {
        this.getHotword()
        this.getLempList()
        this.getClassifyList()
        this.getHotEntryClassifList()
        this.getHotEntryClassifRank()
    },
    methods: {
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
            lempList(params).then(res => {
                if (res.code == 200) {
                    this.lempListData = res.data.list
                    for (let i = 0; i < 3; i++) {
                        this.lempListData.push(res.data.list[i])
                    }
                }
            })
        },
        //获取侧边栏分类数据
        getClassifyList() {
            classifyList().then(res => {
                if (res.code == 200) {
                    this.classifyListData = res.data.list
                }
            })
        },
        //热门词条分类
        getHotEntryClassifList() {
            hotEntryClassify().then(res => {
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
            hotEntryClassifyRank(params).then(res => {
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
.encycloped {
    width: 1200px;
    .part1 {
        width: 100%;
        height: 340px;
        background: #eee;
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .lemp-box {
            width: 960px;
            height: 100%;
        }
        .creat-entry-qanda {
            width: 210px;
            height: 100%;
            padding: 20px 10px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            background: #fff;
            h4 {
                text-align: center;
                line-height: 80px;
                font-size: 16px;
                font-weight: bold;
                color: rgb(255, 102, 0);
            }
            p {
                text-indent: 2em;
                font-size: 14px;
                line-height: 28px;
                color: rgb(153, 153, 153);
            }
            .create-btn {
                text-align: center;
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
                            width: 21%;
                            height: 90px;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            margin-bottom: 20px;
                            animation-name: upAnimation; /*动画的名称*/
                            transform-origin: center bottom; /*设置动画旋转元素的基点为*/
                            cursor: pointer;
                            span {
                                font-size: 28px;
                                font-weight: bold;
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
                                        text-indent: 2em;
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
