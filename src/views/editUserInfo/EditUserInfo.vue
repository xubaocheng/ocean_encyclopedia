<!-- 用户编辑个人信息 -->
<template>
    <div class="user">
        <div class="user-info">
            <Button type="text" @click="handlerToPersonal"
                ><Icon type="md-arrow-round-back" :size="18" /> 个人中心</Button
            >
            <div class="user-info-edit">
                <Form
                    ref="formEditUser"
                    :model="formEditUser"
                    :rules="ruleEditUser"
                    :label-width="80"
                >
                    <FormItem label="用户名" prop="name">
                        <i-input
                            type="text"
                            v-model="formEditUser.name"
                        ></i-input>
                    </FormItem>
                    <FormItem label="头像">
                        <div class="user-header">
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                @change="onchangeImgFun"
                                class="header-upload-btn user-header-com"
                            />
                            <img
                                alt=""
                                :src="imgStr"
                                class="user-header-img user-header-com"
                            />
                            <p class="tip">
                                图片限制50kb
                                <span class="error">{{ errorStr }}</span>
                            </p>
                        </div>
                    </FormItem>
                    <FormItem label="邮箱" prop="email">
                        <i-input
                            v-model="formEditUser.email"
                            placeholder="请输入邮箱"
                        ></i-input>
                    </FormItem>
                    <FormItem label="手机" prop="tel">
                        <i-input
                            v-model="formEditUser.tel"
                            placeholder="请输入手机号"
                        ></i-input>
                    </FormItem>
                    <FormItem label="地址" prop="address">
                        <i-input
                            type="text"
                            v-model="formEditUser.address"
                        ></i-input>
                    </FormItem>
                    <FormItem label="密码" prop="passwd">
                        <i-input
                            type="password"
                            v-model="formEditUser.passwd"
                            placeholder="请输入新密码"
                        ></i-input>
                    </FormItem>

                    <FormItem>
                        <Button
                            type="primary"
                            @click="handleSubmit('formEditUser')"
                            >确定</Button
                        >
                        <Button
                            @click="handleReset('formEditUser')"
                            style="margin-left: 8px"
                            >重置</Button
                        >
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditUserInfo',
    components: {},
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'))
            } else {
                callback()
            }
        }
        const emailReg = (rule, value, callback) => {
            let reg = new RegExp(
                '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
            ) //正则表达式
            if (value === '') {
                callback(new Error('邮箱不能为空'))
            } else if (!reg.test(value)) {
                callback(new Error('邮箱有误，请重填'))
            } else {
                callback()
            }
        }
        const telReg = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('手机号不能为空'))
            } else if (!/^1[3456789]\d{9}$/.test(value)) {
                callback(new Error('手机号码有误，请重填'))
            } else {
                callback()
            }
        }
        return {
            formEditUser: {
                name: '',
                portrait: '',
                email: '',
                tel: '',
                address: '',
                passwd: ''
            },
            ruleEditUser: {
                name: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    }
                ],
                email: [
                    {
                        required: true,
                        validator: emailReg,
                        trigger: 'change'
                    }
                ],
                tel: [
                    {
                        required: true,
                        validator: telReg,
                        trigger: 'change'
                    }
                ],
                passwd: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ]
            },
            imgStr: require('../../assets/img/photo.png'),
            errorStr: ''
        }
    },
    methods: {
        handlerToPersonal() {
            this.$router.push({
                path: '/Personal'
            })
        },
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('Success!')
                } else {
                    this.$Message.error('Fail!')
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields()
        },
        onchangeImgFun(e) {
            var file = e.target.files[0]
            console.log(file)
            if (!file) return
            // 获取图片的大小，做大小限制有用
            let imgSize = file.size
            console.log(imgSize)
            var _this = this // this指向问题，所以在外面先定义
            // 比如上传头像限制5M大小，这里获取的大小单位是b
            if (imgSize <= 50 * 1024) {
                // 合格
                _this.errorStr = ''
                console.log('大小合适')
                // 开始渲染选择的图片
                // 本地路径方法 1
                // this.imgStr = window.URL.createObjectURL(e.target.files[0])
                // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

                // base64方法 2
                var reader = new FileReader()
                reader.readAsDataURL(file) // 读出 base64
                reader.onloadend = function() {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result
                    console.log(dataURL)
                    _this.imgStr = dataURL
                    // 下面逻辑处理
                }
            } else {
                console.log('大小不合适')
                _this.errorStr = '图片大小超出范围'
            }
        }
    }
}
</script>
<style lang="less" scoped>
.user {
    width: 100%;
    border-top: 6px solid #0e38ae;
    padding: 50px 60px;
    &-info {
        width: 100%;
        &-edit {
            width: 50%;
            padding-top: 50px;
            margin: 0 auto;
            .user-header {
                position: relative;
                left: 150px;
                display: inline-block;
                .user-header-com {
                    width: 144px;
                    height: 144px;
                    display: inline-block;
                }
                .header-upload-btn {
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;
                    cursor: pointer;
                    /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
                }
                // .user-header-img {
                //     cursor: pointer;
                // }
                .tip {
                    font-size: 14px;
                    color: #666;
                    text-align: center;
                }
                /* error是用于错误提示 */
                .error {
                    font-size: 12px;
                    color: tomato;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
