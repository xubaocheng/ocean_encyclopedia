<!-- 个人中心 -->
<template>
    <div class="personal">
        <div class="personal-information">
            <div class="personal-top">
                <div class="personal-top-user">
                    <i class="ivu-icon ivu-icon-md-settings"></i>
                    <div class="personal-top-user-photo">
                        <img src="../../../src/assets/img/photo.png" alt="" />
                    </div>
                    <h6>用户名字</h6>
                    <ul class="personal-top-user-grade">
                        <li
                            class="personal-top-user-grade-item"
                            v-for="(item, index) in gradeList"
                            :key="`gradeList_item_${index}`"
                        >
                            <span :class="{ isReaching: item.reaching }"></span>
                            <em>{{ item.name }}</em>
                        </li>
                    </ul>
                </div>
                <div class="kailong"></div>
                <div class="personal-top-quick">
                    <ul class="personal-top-quick-btnGroup">
                        <li
                            class="personal-top-quick-btnGroup-item"
                            v-for="(item, index) in quickList"
                            :key="`quickList_item_${index}`"
                            :class="{ active: quickCurrentindex == index }"
                            @click="handlerQuick(index)"
                        >
                            <div class="personal-top-quick-btnGroup-item-box">
                                <strong>{{ item.num }}</strong>
                                <span>{{ item.name }}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="personal-top-quick-pass">
                        <span
                            v-for="(item, index) in passList"
                            :key="`quickList_item_${index}`"
                            >{{ item.name }}： {{ item.val }}</span
                        >
                    </div>
                    <div class="personal-top-quick-integral">
                        <span>积分:</span>
                        <strong>150</strong>
                        <Button class="personal-top-quick-integral-btn"
                            >立即使用</Button
                        >
                    </div>
                </div>
            </div>
            <div class="personal-bottom">
                <div
                    class="tabs-item"
                    v-for="(item, index) in tabsBtnList"
                    :key="`tabsBtnList_item_${index}`"
                    :class="{ active: tabsBtnCurrentIndex == index }"
                    @click="handlerTabsBtn(index)"
                >
                    <i :class="`ivu-icon ivu-icon-${item.icon}`"></i>
                    <span>{{ item.tabsName }}</span>
                    <Badge dot :count="item.count">
                        <em>( {{ item.num }} )</em>
                    </Badge>
                </div>
            </div>
        </div>
        <div class="personal-table"></div>
    </div>
</template>

<script>
export default {
    name: 'Personal',
    components: {},
    data() {
        return {
            gradeList: [
                {
                    reaching: true,
                    name: 'V1'
                },
                {
                    reaching: true,
                    name: 'V2'
                },
                {
                    reaching: false,
                    name: 'V2'
                }
            ],
            quickList: [
                {
                    name: '创建通过',
                    num: 5
                },
                {
                    name: '编辑通过',
                    num: 52
                },
                {
                    name: '提问通过',
                    num: 35
                },
                {
                    name: '回答并采纳',
                    num: 23
                }
            ],
            quickCurrentindex: -1,
            passList: [
                {
                    name: '词条通过率',
                    val: '80%'
                },
                {
                    name: '问答通过率',
                    val: '80%'
                }
            ],
            tabsBtnList: [
                {
                    tabsName: '我的消息',
                    icon: 'ios-mail-outline',
                    num: 199,
                    count: 10
                },
                {
                    tabsName: '我创建的词条',
                    icon: 'md-create',
                    num: 3,
                    count: 0
                },
                {
                    tabsName: '我编辑的词条',
                    icon: 'md-color-filter',
                    num: 20,
                    count: 10
                },
                {
                    tabsName: '我的提问',
                    icon: 'md-help',
                    num: 15,
                    count: 10
                },
                {
                    tabsName: '我的问答',
                    icon: 'ios-chatboxes-outline',
                    num: 2880,
                    count: 10
                }
            ],
            tabsBtnCurrentIndex: -1
        }
    },
    mounted() {},
    methods: {
        handlerQuick(index) {
            this.quickCurrentindex = index
        },
        handlerTabsBtn(index) {
            this.tabsBtnCurrentIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
.personal {
    width: 100%;
    height: 800px;
    border-top: 6px solid #0e38ae;
    background: #fff;
    &-information {
        width: 100%;
        .personal-top {
            width: 700px;
            margin: 0 auto;
            padding-top: 30px;
            display: flex;
            margin-bottom: 30px;
            &-user {
                width: 120px;
                padding-top: 15px;
                margin-right: 20px;
                position: relative;
                i {
                    font-size: 30px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    cursor: pointer;
                }
                &-photo {
                    width: 100%;
                    background: yellow;
                    border-radius: 50%;
                    margin-bottom: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                h6 {
                    width: 100%;
                    font-size: 16px;
                    line-height: 28px;
                    text-align: center;
                    margin-bottom: 10px;
                }
                &-grade {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    &-item {
                        width: 100%;
                        span {
                            width: 100%;
                            display: inline-block;
                            background: #f2f6f7;
                            height: 20px;
                            border-right: 1px solid #f2f6f7;
                        }
                        .isReaching {
                            background: #28c4f7;
                        }
                        em {
                            width: 100%;
                            display: inline-block;
                            text-align: center;
                            font-weight: bold;
                        }
                    }
                }
            }
            .kailong {
                margin-top: 70px;
                width: 0;
                height: 0;
                border-top: 30px solid transparent;
                border-bottom: 30px solid transparent;
                border-right: 30px solid #e1fafe;
            }
            &-quick {
                width: 500px;
                padding: 20px 30px;
                background: #e1fafe;
                &-btnGroup {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    &-item {
                        width: 80px;
                        height: 80px;
                        border: 1px solid #4876c1;
                        border-radius: 50%;
                        background: #fff;
                        &-box {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            cursor: pointer;
                            strong {
                                width: 100%;
                                text-align: center;
                                font-size: 16px;
                            }
                            span {
                                width: 100%;
                                padding-bottom: 20px;
                                text-align: center;
                                font-size: 12px;
                            }
                        }
                    }
                    &-item.active {
                        background: #28c4f7;
                        color: #fff;
                    }
                }
                &-pass {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #9fb1b3;
                    span {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }
                }
                &-integral {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    strong {
                        color: #fe9003;
                        margin: 0 20px;
                    }
                    &-btn {
                        background: #fe9003;
                        color: #fff;
                    }
                }
            }
        }
        .personal-bottom {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ededed;
            .tabs-item {
                width: 100%;
                text-align: center;
                i {
                    font-size: 20px;
                    padding-right: 10px;
                }
                span {
                    font-size: 16px;
                    cursor: pointer;
                }
                em {
                    font-style: normal;
                    color: #fe9003;
                    font-weight: bold;
                    font-size: 14px;
                }
                &.active,
                &:hover {
                    span {
                        color: #0913ffe6;
                    }
                }
            }
        }
    }
}
</style>
