<!-- 问答or词条列表 -->
<template>
    <div class="guess-compont">
        <ul class="guess-compont-list">
            <li
                class="guess-compont-list-item"
                v-for="(item, index) in guessData"
                :key="`guessData_item_${index}`"
            >
                <a
                    class="guess-compont-list-item-img"
                    href="javasceript:;"
                    v-if="item.img != ''"
                    ><img :src="item.img" alt=""
                /></a>
                <div class="guess-compont-list-item-content">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                    <div class="synopsis">
                        <div class="synopsis-left">
                            <span
                                class="synopsis-left-photo"
                                :style="{
                                    backgroundImage:
                                        'url(' + item.headSculpture + ')',
                                    backgroundSize: 'cover'
                                }"
                            ></span>
                            <span class="synopsis-left-author">{{
                                item.author
                            }}</span>
                            <span class="synopsis-left-count"
                                >回答{{ item.count }}次</span
                            >
                        </div>
                        <div class="synopsis-right">
                            <span class="synopsis-right-date">{{
                                item.date
                            }}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GuessCompont',
    components: {},
    props: {
        selectActive: {
            type: String,
            default: ''
        },
        guessData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {}
    },
    mounted() {
        //滚动事件触发
        var self = this
        window.onscroll = function() {
            if (
                self.getScrollTop() + self.getClientHeight() >=
                self.getScrollHeight()
            ) {
                console.log('到底部了')
                self.$emit('scroll-state', true)
            }
        }
    },
    methods: {
        //获取滚动条当前的位置
        getScrollTop() {
            var scrollTop = 0
            if (
                document.documentElement &&
                document.documentElement.scrollTop
            ) {
                scrollTop = document.documentElement.scrollTop
            } else if (document.body) {
                scrollTop = document.body.scrollTop
            }
            return scrollTop
        },
        //获取当前可视范围的高度
        getClientHeight() {
            var clientHeight = 0
            if (
                document.body.clientHeight &&
                document.documentElement.clientHeight
            ) {
                clientHeight = Math.min(
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                )
            } else {
                clientHeight = Math.max(
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                )
            }
            return clientHeight
        },
        //获取文档完整的高度
        getScrollHeight() {
            return Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            )
        }
    }
}
</script>
<style lang="less" scoped>
.guess-compont {
    width: 100%;
    &-list {
        width: 100%;
        &-item {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #ababab;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            &:last-child {
                border-bottom: none;
            }
            &-img {
                width: 200px;
                height: 130px;
                display: block;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            &-content {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 20px;
                h4 {
                    width: 100%;
                    font-weight: 600;
                    line-height: 30px;
                }
                p {
                    line-height: 30px;
                }
                .synopsis {
                    width: 100%;
                    color: #d7d7d7;
                    display: flex;
                    justify-content: space-between;
                    &-left {
                        width: 200px;
                        height: 25px;
                        display: flex;
                        align-items: center;

                        &-photo {
                            width: 25px;
                            height: 100%;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                        &-author {
                            margin-right: 20px;
                        }
                        &-count {
                        }
                    }
                    &-right {
                        &-date {
                        }
                    }
                }
            }
        }
    }
    .more {
        padding: 20px 0;
        text-align: center;
    }
}
</style>
