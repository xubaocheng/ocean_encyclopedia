<!-- 表单主文件 -->
<template>
    <div class="warpper">
        <XForm :model="model" :rules="rules" ref="loginForm">
            <XFormtItem label="用户名" prop="userName">
                <!-- <XFormtItem prop="userName"> -->
                <XInput v-model="model.userName" placeholder="请输入用户名" />
            </XFormtItem>
            <XFormtItem label="密码" prop="password">
                <!-- <XFormtItem prop="password"> -->
                <XInput
                    v-model="model.password"
                    type="password"
                    placeholder="请输入密码"
                />
            </XFormtItem>
            <XFormtItem>
                <div class="login-box">
                    <button class="login-button" @click="onLogin">登录</button>
                </div>
            </XFormtItem>
        </XForm>
    </div>
</template>

<script>
import XInput from './XInput'
import XFormtItem from './XFormItem'
import XForm from './XForm'
export default {
    name: '',
    components: {
        XInput,
        XFormtItem,
        XForm
    },
    data() {
        return {
            model: {
                userName: 'xxx',
                password: ''
            },
            rules: {
                userName: [
                    {
                        required: true,
                        message: '用户名必填'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '密码必填'
                    }
                ]
            }
        }
    },
    mounted() {},
    methods: {
        onLogin() {
            this.$refs.loginForm.validate(isValid => {
                if (isValid) {
                    alert('通过')
                } else {
                    alert('有错误')
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.warpper {
    padding: 20px;
    .login-box {
        width: 100%;
        text-align: center;
        .login-button {
            /* 按钮美化 */
            width: 150px; /* 宽度 */
            height: 40px; /* 高度 */
            border-width: 0px; /* 边框宽度 */
            border-radius: 3px; /* 边框半径 */
            background: #1e90ff; /* 背景颜色 */
            cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
            outline: none; /* 不显示轮廓线 */
            font-family: Microsoft YaHei; /* 设置字体 */
            color: white; /* 字体颜色 */
            font-size: 17px; /* 字体大小 */
        }
        .login-button:hover {
            /* 鼠标移入按钮范围时改变颜色 */
            background: #5599ff;
        }
    }
}
</style>
