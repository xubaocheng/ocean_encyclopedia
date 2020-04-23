<!-- 资讯推荐 -->
<template>
    <div class="scroll-more">
        <h3>资讯推荐</h3>
        <div class="information-list">
            <div
                class="information-list-item"
                v-for="(item, index) in informationListData"
                :key="`informationList_item_${index}`"
            >
                <div class="information-list-item-title">{{ item.title }}</div>
                <div class="information-list-item-bottom">
                    <div
                        class="information-list-item-bottom-pic"
                        v-if="item.img != ''"
                    >
                        <img :src="item.img" alt="" />
                    </div>
                    <div class="information-list-item-bottom-content">
                        <p>{{ item.content }}</p>
                        <div class="authorAndTime">
                            <strong>{{ item.author }}</strong>
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
// import { informationList } from '@/api/Container'
export default {
    name: '',
    components: {},
    props: {
        informationListData: {
            type: Array,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function() {
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
    destroyed() {
        // window.onscroll = null;
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
.scroll-more {
    width: 100%;
    h3 {
        width: 100%;
        line-height: 60px;
        font-size: 16px;
        font-weight: 600;
    }
    .information-list {
        width: 100%;
        &-item {
            width: 100%;
            &-title {
                font-size: 16px;
                font-weight: 400;
                line-height: 60px;
            }
            &-bottom {
                width: 100%;
                display: flex;
                &-pic {
                    width: 180px;
                    height: 115px;
                    margin-right: 30px;
                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
                &-content {
                    width: 950px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    p {
                        line-height: 28px;
                    }
                    .authorAndTime {
                        display: flex;
                        strong {
                            margin-right: 40px;
                            color: rgba(23, 147, 242, 1);
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
