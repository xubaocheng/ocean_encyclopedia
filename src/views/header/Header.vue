<!-- 顶部区域 -->
<template>
    <div class="header-view">
        <div class="top">
            <div class="top-bar">
                <span><Icon type="md-help-circle" size="18" color="#557" />帮助</span>
                <span>登录/注册</span>
            </div>
            <div class="top-nav">
                <h1>海洋出版社</h1>
                <div class="top-nav-list">
                    <div class="top-nav-list-content">
                        <span class="active">首页</span>
                        <span>海洋百科</span>
                        <span>海洋问答</span>
                    </div>
                </div>
                <div class="personal">个人中心</div>
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

        };
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='less' scoped>
.header-view{
    width: 100%;
    height: 125px;
    .top{
        width: 100%;
        height: 35px;
        background: #999;
        &-bar{
            width: 1200px;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            margin: 0 auto;
            span{
                line-height: 35px;
                font-size: 12px;
                color: #fff;
                padding-left: 20px;
                cursor: pointer;
            }
        }
        &-nav{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 90px;
            h1{
                width: 255px;
                height: 50px;
                text-indent: -999999em;
                background: url('../../assets/img/logo.png') no-repeat;
            }
            &-list{
                width: 870px;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                &-content{
                    width: 600px;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    span{
                        width: 100px;
                        text-align: center;
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 92px;
                        cursor: pointer;
                        &.active{
                            background-color: rgba(242, 242, 242, 1);
                            border-bottom: 4px solid rgba(46, 119, 188);
                        }
                    }
                    span:hover{
                        background-color: rgba(242, 242, 242, 1);
                        border-bottom: 4px solid rgba(46, 119, 188);
                    }
                }
            }
        }
        .personal{
            width: 85px;
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>
