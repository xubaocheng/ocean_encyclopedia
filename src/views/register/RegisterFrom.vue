<!-- 注册表单 -->
<template>
    <div class="register-from">
        <Form
            ref="formCustom"
            :model="formCustom"
            :rules="ruleCustom"
            :label-width="100"
        >
            <FormItem label="手机号" prop="mobile">
                <i-input
                    v-model="formCustom.mobile"
                    placeholder="请输入手机号"
                ></i-input>
            </FormItem>
            <FormItem label="密码" prop="passwd">
                <i-input
                    type="password"
                    placeholder="请输入密码"
                    v-model="formCustom.passwd"
                ></i-input>
            </FormItem>
            <FormItem label="确认密码" prop="passwdCheck">
                <i-input
                    type="password"
                    placeholder="请输入再次密码"
                    v-model="formCustom.passwdCheck"
                ></i-input>
            </FormItem>
            <FormItem label="验证码" prop="code">
                <div class="yz">
                    <i-input
                        type="text"
                        v-model="formCustom.code"
                        placeholder="请输入验证码"
                    ></i-input>
                    <div @click="refreshCode" class="yz_code">
                        <s-identify
                            :identifyCode="identifyCode"
                            :contentWidth="100"
                            :contentHeight="32"
                        ></s-identify>
                    </div>
                </div>
            </FormItem>
            <FormItem label="手机验证码" prop="mobileCode">
                <div class="mobile_code">
                    <i-input
                        type="text"
                        v-model="formCustom.mobileCode"
                        placeholder="请输入手机验证码"
                    ></i-input>
                    <Button type="info" class="mobile_code_btn"
                        >获取验证码</Button
                    >
                </div>
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    size="large"
                    style="width:80%;height:45px"
                    @click="handleSubmit('formCustom')"
                    >注册</Button
                >
            </FormItem>
        </Form>
    </div>
</template>

<script>
import SIdentify from '@/components/identify/index'
export default {
    name: 'RegisterFrom',
    components: { SIdentify },
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck')
                }
                callback()
            }
        }
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('俩次密码不一致'))
            } else {
                callback()
            }
        }
        // 验证码自定义验证规则
        const validateVerifycode = (rule, value, callback) => {
            let newVal = value.toLowerCase()
            let identifyStr = this.identifyCode.toLowerCase()
            if (newVal === '') {
                callback(new Error('请输入验证码'))
            } else if (newVal !== identifyStr) {
                console.log('validateVerifycode:', value)
                callback(new Error('验证码不正确!'))
            } else {
                callback()
            }
        }
        return {
            formCustom: {
                mobile: '',
                passwd: '',
                passwdCheck: '',
                mobileCode: '',
                code: ''
            },
            ruleCustom: {
                mobile: [
                    {
                        required: true,
                        message: '手机号不能为空',
                        trigger: 'blur'
                    }
                ],
                passwd: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    {
                        required: true,
                        validator: validatePassCheck,
                        trigger: 'blur'
                    }
                ],
                code: [
                    {
                        required: true,
                        validator: validateVerifycode,
                        trigger: 'blur'
                    }
                ],
                mobileCode: [
                    {
                        required: true,
                        message: '手机验证码不能为空',
                        trigger: 'blur'
                    }
                ]
            },
            identifyCodes: '1234567890ABCDEFGHIGKLMNoPQRSTUVWXYZ',
            identifyCode: ''
        }
    },
    mounted() {
        // 验证码初始化
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('注册成功!')
                } else {
                    this.$Message.error('注册失败!')
                }
            })
        },
        // 生成随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        // 切换验证码
        refreshCode() {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        },
        // 生成四位随机验证码
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ]
            }
            console.log(this.identifyCode)
        }
    }
}
</script>
<style lang="less" scoped>
.register-from {
    width: 100%;
    .yz {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .yz_code {
            margin-left: 20px;
        }
    }
    .mobile_code {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .mobile_code_btn {
            width: 120px;
            height: 32px;
            margin-left: 20px;
        }
    }
}
</style>
