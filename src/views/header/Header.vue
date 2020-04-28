<!-- 顶部区域 -->
<template>
    <div class="header-view">
        <div class="top">
            <div class="top-bar">
                <span
                    ><Icon
                        type="md-help-circle"
                        size="18"
                        color="#557"
                    />帮助</span
                >
                <span @click="goToLogin">登录/注册</span>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-nav">
                <h1>海洋出版社</h1>
                <div class="bottom-nav-list">
                    <div class="bottom-nav-list-content">
                        <router-link
                            tag="span"
                            v-for="(item, i) in menuList"
                            :key="i"
                            :to="{ path: item.pathName }"
                            class="bottombar-item"
                        >
                            {{ item.name }}
                        </router-link>
                    </div>
                </div>
                <div class="personal">
                    <span @click="goToPersonal"
                        ><i class="ivu-icon ivu-icon-md-person"></i
                        >个人中心</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderView',
    components: {},
    data() {
        return {
            menuList: [
                {
                    name: '首页',
                    pathName: '/homePage'
                },
                {
                    name: '海洋百科',
                    pathName: '/encycloped'
                },
                {
                    name: '海洋问答',
                    pathName: '/OceanQandA'
                }
            ]
        }
    },
    mounted() {},
    methods: {
        goToLogin() {
            this.$router.push({
                path: '/login'
            })
        },
        goToPersonal() {
            this.$router.push({
                path: '/Personal'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.header-view {
    width: 100%;
    height: 125px;
    .top {
        width: 100%;
        height: 35px;
        &-bar {
            width: 1200px;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            margin: 0 auto;
            span {
                line-height: 35px;
                font-size: 12px;
                color: #fff;
                padding-left: 20px;
                cursor: pointer;
            }
        }
    }
    .bottom {
        width: 100%;
        background: rgba(46, 53, 218, 0.9);
        color: #fff;
        &-nav {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 90px;
            h1 {
                width: 255px;
                text-indent: -999999em;
                background: url('../../assets/img/logo.png') no-repeat;
            }
            &-list {
                width: 870px;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                &-content {
                    width: 500px;
                    padding-right: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .bottombar-item {
                        width: 100px;
                        text-align: center;
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 92px;
                        cursor: pointer;
                        &:hover,
                        &.router-link-active {
                            border-bottom: 4px solid #f1af63;
                            height: 92px;
                        }
                    }
                }
            }
        }
        .personal {
            width: 130px;
            height: 92px;
            cursor: pointer;
            span {
                line-height: 92px;
                font-size: 18px;
                font-weight: bold;
                i {
                    font-size: 28px;
                    margin-right: 10px;
                }
            }
            &:hover {
                border-bottom: 4px solid #f1af63;
                span {
                    height: 92px;
                }
            }
        }
    }
}
</style>
