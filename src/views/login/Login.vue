<!-- 登录页 -->
<template>
    <div class="lo-bg">
        <div class="login">
            <section class="login-top">
                <hgroup></hgroup>
            </section>
            <section class="login-nav">
                <div class="login-nav-logo">
                    <a href="javascript:;">
                        <img src="../../assets/img/logo.png" alt="" />
                    </a>
                    <div class="login-nav-logo-title">
                        <h1>海洋知识服务平台</h1>
                        <span>|</span>
                        <span>个人中心</span>
                    </div>
                </div>
                <ul class="login-nav-list">
                    <li v-for="(item, index) in nav" :key="`nav_item_${index}`">
                        {{ item.name }}
                    </li>
                </ul>
            </section>
            <section class="login-content">
                <div class="login-content-box">
                    <div class="login-content-box-left">
                        <div class="login-content-box-left-main">
                            <img src="../../assets/img/QR-code.png" alt="" />
                            <strong>欢迎关注海洋出版社微信公众号</strong>
                            <p>守护蔚蓝星球 守护海洋————</p>
                            <span>PROTECTING THE BLUE OCEAN</span>
                        </div>
                    </div>
                    <div class="login-content-box-right">
                        <div class="login-content-box-right-side">
                            <ul class="numerical">
                                <li
                                    class="numerical-item"
                                    v-for="(item, index) in numberical"
                                    :key="`numberical_item_${index}`"
                                >
                                    <i
                                        :class="
                                            `ivu-icon ivu-icon-${item.icon}`
                                        "
                                    ></i>
                                    <div class="numerical-item-decnum">
                                        <strong>{{ item.num }}</strong>
                                        <span> {{ item.name }} </span>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                还不是会员？<span>
                                    免费注册<i
                                        class="ivu-icon ivu-icon-ios-arrow-round-forward"
                                    ></i
                                ></span>
                            </p>
                        </div>
                        <div class="login-content-box-right-tab">
                            <div class="tabs-btn-grounp">
                                <span class="active">密码登录</span>
                                <span>验证码登录</span>
                            </div>
                            <div class=""></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    components: {},
    data() {
        return {
            nav: [
                {
                    name: '首页'
                },
                {
                    name: '海洋百科'
                },
                {
                    name: '海洋问答'
                }
            ],
            numberical: [
                {
                    icon: 'ios-paper',
                    name: '个词条',
                    num: 33345699
                },
                {
                    icon: 'ios-create',
                    name: '次编辑',
                    num: 33345699
                },
                {
                    icon: 'md-people',
                    name: '人搜索',
                    num: 33345699
                },
                {
                    icon: 'md-recording',
                    name: '海量知识',
                    num: '来一场知识盛宴'
                }
            ]
        }
    },
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.lo-bg {
    width: 100%;
    height: 100%;
    // background: url('../../assets/img/login-bg.jpg') no-repeat;
    background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0)
        ),
        url(../../assets/img/login-bg.png) no-repeat center;
    background-size: cover;
    position: relative;
    .login {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.3);
        &-top {
            width: 100%;
            hgroup {
                height: 40px;
            }
        }
        .login-nav {
            width: 100%;
            height: 80px;
            background: rgb(40, 45, 160);
            color: #fff;
            display: flex;
            justify-content: space-around;
            &-logo {
                display: flex;
                align-items: center;
                a {
                    display: inline-block;
                    width: 270px;
                    height: 40px;
                    padding-right: 20px;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                &-title {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    h1 {
                        font-size: 16px;
                    }
                    span {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    span:nth-child(3) {
                        cursor: pointer;
                    }
                }
            }
            &-list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                li {
                    margin-right: 80px;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
        &-content {
            width: 100%;
            padding-top: 100px;
            &-box {
                width: 1446px;
                height: 516px;
                margin: 0 auto;
                display: flex;
                &-left {
                    width: 800px;
                    height: 100%;
                    background: url('../../assets/img/tut.png') no-repeat;
                    background-size: cover;
                    border-radius: 10px;
                }
                &-right {
                    width: 646px;
                    height: 100%;
                    border: 1px solid #8a8a8b;
                    border-radius: 10px;
                    padding-left: 20px;
                    background: #fff;
                    display: flex;
                    &-side {
                        width: 212px;
                        border-right: 1px dashed #b4b4b4;
                        .numerical {
                            width: 100%;
                            height: 460px;
                            padding: 40px 0px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            &-item {
                                width: 100%;
                                display: flex;
                                i {
                                    font-size: 60px;
                                    margin-right: 20px;
                                    color: #5eabf6;
                                }
                                &-decnum {
                                    display: flex;
                                    flex-direction: column;
                                    strong {
                                        font-size: 16px;
                                        margin-bottom: 5px;
                                    }
                                    span {
                                        font-size: 14px;
                                        color: #c3c3c3;
                                    }
                                }
                            }
                        }
                        p {
                            width: 100%;
                            font-size: 16px;
                            height: 40px;
                            line-height: 40px;
                            span {
                                color: #5eabf6;
                                i {
                                    cursor: pointer;
                                    font-size: 16px;
                                    font-weight: bold;
                                    color: #000;
                                    &:hover {
                                        color: #5eabf6;
                                    }
                                }
                            }
                        }
                    }
                    &-tab {
                        width: 434px;
                        padding: 40px 20px;
                        .tabs-btn-grounp {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            span {
                                font-size: 20px;
                                margin: 0 10px;
                                padding: 0 20px;
                                cursor: pointer;
                                padding-bottom: 10px;
                                &.active {
                                    border-bottom: 1px solid #439ff5;
                                    color: #5eabf6;
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
