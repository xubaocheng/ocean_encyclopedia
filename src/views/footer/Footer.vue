<!-- 底部区域 -->
<template>
    <div class="footer-view">
        <div class="footer-top">
            <div class="link-list">
                <p>友情链接：</p>
                <div class="link-list-item">
                    <span
                        v-for="(item, index) in linkListData"
                        :key="`linkListData_item_${index}`"
                        >{{ item.name }}</span
                    >
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <span
                >海洋出版社版权所有 京ICP备05083474号-1
                京公网安备11010802014450号</span
            >
        </div>
    </div>
</template>

<script>
import { linkList } from '@/api/Container'
export default {
    name: 'FooterView',
    components: {},
    data() {
        return {
            linkListData: []
        }
    },
    mounted() {
        this.getLinkList()
    },
    methods: {
        getLinkList() {
            linkList().then(res => {
                if (res.code == 200) {
                    this.linkListData = res.data.list
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.footer-view {
    width: 100%;
    .footer-top {
        width: 100%;
        background-color: rgba(215, 215, 215, 1);
        .link-list {
            width: 1200px;
            padding: 10px 20px;
            margin: 0 auto;
            p {
                margin-bottom: 10px;
                line-height: 40px;
            }
            &-item {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                line-height: 24px;
                span {
                    width: 232px;
                }
            }
        }
    }
    .footer-bottom {
        width: 100%;
        line-height: 80px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background-color: rgba(153, 153, 153, 1);
    }
}
</style>
