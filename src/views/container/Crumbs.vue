<!-- 面包屑 -->
<template>
    <div class="crumbs">
        <ul class="crumbs-list">
            <li
                class="crumbs-list-item"
                v-for="(item, index) in list"
                :key="`list_item_${index}`"
            >
                <i
                    :class="`ivu-icon ivu-icon-${item.icon}`"
                    :style="{ backgroundColor: item.color }"
                ></i>
                <strong>{{ item.num }} </strong>
                <span> {{ item.name }}</span>
            </li>
        </ul>
        <div class="crumbs-wxCode">
            <a href="javascript:;"
                ><img src="../../assets/img/QR-code.png" alt=""
            /></a>
            <div class="crumbs-wxCode-content">
                <h5>海洋百科知识服务</h5>
                <p>来一场知识盛宴</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Crumbs',
    components: {},
    data() {
        return {
            list: [
                {
                    name: '个词条',
                    num: 1000,
                    icon: 'ios-paper',
                    color: 'rgba(46, 119, 188, 1)'
                },
                {
                    name: '次编辑',
                    num: 1000,
                    icon: 'md-brush',
                    color: 'rgba(207, 48, 59, 1)'
                },
                {
                    name: '人搜索',
                    num: 1000,
                    icon: 'md-contacts',
                    color: 'rgba(55, 144, 157, 1)'
                }
            ]
        }
    },
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.crumbs {
    width: 200px;
    height: 300px;
    background: #fff;
    position: absolute;
    right: -200px;
    top: 0;
    &-list {
        width: 100%;
        &-item {
            width: 100%;
            height: 60px;
            margin-bottom: 5px;
            i {
                width: 60px;
                height: 100%;
                font-size: 30px;
                color: #fff;
                line-height: 60px;
                margin-right: 20px;
            }
            strong {
                margin-right: 10px;
                font-size: 16px;
            }
            span {
                color: #c1c1c1;
            }
        }
    }
    &-wxCode {
        width: 100%;
        display: flex;
        justify-content: space-between;
        a {
            width: 90px;
            height: 90px;
            img {
                display: block;
                width: 90px;
                height: 90px;
            }
        }
        &-content {
            padding-left: 10px;
            padding-top: 20px;
            h5 {
                width: 60%;
                color: #4183c2;
                text-align: center;
            }
            p {
                color: #c1c1c1;
            }
        }
    }
}
</style>
