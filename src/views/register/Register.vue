<!-- 登录页 -->
<template>
    <div class="lo-bg">
        <div class="register">
            <section class="register-top">
                <hgroup></hgroup>
            </section>
            <section class="register-nav">
                <div class="register-nav-logo">
                    <a href="javascript:;">
                        <img src="../../assets/img/logo.png" alt="" />
                    </a>
                    <div class="register-nav-logo-title">
                        <h1>海洋知识服务平台</h1>
                        <span>|</span>
                        <span>欢迎注册</span>
                    </div>
                </div>
                <div class="register-nav-list">
                    <router-link
                        tag="span"
                        v-for="(item, index) in nav"
                        :key="`nav_item_${index}`"
                        :to="{ path: item.pathName }"
                        class="topbar-item"
                    >
                        {{ item.name }}
                    </router-link>
                </div>
            </section>
            <section class="register-content">
                <div class="register-content-box">
                    <div class="register-content-box-left">
                        <div class="register-content-box-left-main">
                            <img src="../../assets/img/QR-code.png" alt="" />
                            <strong>欢迎关注海洋出版社微信公众号</strong>
                            <p>守护蔚蓝星球 守护海洋————</p>
                            <span>PROTECTING THE BLUE OCEAN</span>
                        </div>
                    </div>
                    <div class="register-content-box-right">
                        <div class="register-content-box-right-side">
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
                                <span @click="goLogin">
                                    已有账号，直接登录</span
                                >
                            </p>
                        </div>
                        <div class="register-content-box-right-form">
                            <span class="register-content-box-right-form-title">
                                手机注册
                            </span>

                            <div class="tabs-warpper-container"><Form /></div>
                            <div class="register-agreement">
                                <strong
                                    >注册代表你已同意【海洋知识服务平台用户协议】</strong
                                >
                            </div>
                            <p>
                                温馨提示：海洋知识服务平台不会以任何名义向您征收费用，如有此类信息请用户提高警惕，谨防诈骗。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Form from './RegisterFrom'
export default {
    name: 'register',
    components: { Form },
    data() {
        return {
            nav: [
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
    methods: {
        goLogin() {
            this.$router.push({
                path: '/login'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.lo-bg {
    width: 100%;
    height: 100%;
    background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0)
        ),
        url(../../assets/img/login-bg.png) no-repeat center;
    background-size: cover;
    position: relative;
    .register {
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
        .register-nav {
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
                span {
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
                    &-main {
                        width: 100%;
                        padding: 60px 100px;
                        padding-right: 400px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        color: #253288;
                        img {
                            width: 115px;
                            height: 115px;
                            margin-bottom: 20px;
                        }
                        strong {
                            font-size: 16px;
                            margin-bottom: 20px;
                        }
                        p {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                        span {
                            font-size: 12px;
                        }
                    }
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
                                cursor: pointer;
                            }
                        }
                    }
                    &-form {
                        width: 434px;
                        padding: 40px 20px 10px 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        &-title {
                            width: 100%;
                            font-size: 20px;
                            color: #429ef4;
                            font-weight: bold;
                        }
                        .register-agreement {
                            width: 100%;
                            text-align: center;
                            color: #429ef4;
                            cursor: pointer;
                        }
                        p {
                            width: 100%;
                            display: flex;
                            align-items: flex-end;
                        }
                    }
                }
            }
        }
    }
}
</style>
