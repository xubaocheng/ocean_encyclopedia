<!-- 1.给input预留solt 2.能够展示label和校验信息 3.能够进行校验 -->
<template>
    <div class="warpper-item">
        <div class="warpper-item-top">
            <label v-if="label"> {{ label }} : </label>
            <slot></slot>
        </div>
        <div class="warpper-item-bottom">
            <span></span>
            <p v-if="errorMessage">*{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import Schema from 'async-validator'

export default {
    name: '',
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: String
    },
    components: {},
    data() {
        return {
            errorMessage: ''
        }
    },
    mounted() {
        //监听校验事件 并执行监听
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            //执行组件校验
            //1.获取校验规则
            const rules = this.form.rules[this.prop]
            //2.获取数据
            const value = this.form.model[this.prop]
            //3.执行校验
            const desc = {
                [this.prop]: rules
            }
            const schema = new Schema(desc)
            // 参数1是值 参数2是校验错误对象数组
            // return 返回的Promies<boolean>
            return schema.validate({ [this.prop]: value }, errors => {
                if (errors) {
                    this.errorMessage = errors[0].message
                } else {
                    this.errorMessage = ''
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.warpper-item {
    width: 100%;
    &-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        label {
            // max-width: 100px;
            width: 15%;
            text-align: right;
        }
    }
    &-bottom {
        width: 100%;
        height: 25px;
        display: flex;
        align-items: center;
        span {
            width: 15%;
        }
        p {
            font-size: 12px;
            line-height: 20px;
            color: red;
            text-indent: 2em;
        }
    }
}
</style>
