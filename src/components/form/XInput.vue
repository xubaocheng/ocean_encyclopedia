<!-- 最底层文件 -->
<template>
    <div class="warpper-input">
        <!-- 自定义组件要实现v-model必须要实现:value,@input -->
        <!-- $attrs 存储的是props之外的部分 -->
        <input class="Xinput" :value="value" @input="onInput" v-bind="$attrs" />
    </div>
</template>

<script>
export default {
    name: '',
    inheritAttrs: false, // 避免顶层容器继承属性
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    components: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {
        onInput(e) {
            // 通知父组件数值变化
            this.$emit('input', e.target.value)

            //通知FormItem校验
            this.$parent.$emit('validate')
        }
    }
}
</script>
<style lang="less" scoped>
.warpper-input {
    width: 80%;
    .Xinput {
        width: 100%;
        line-height: 35px;
        border: 1px solid #e1e1e1;
        text-indent: 2em;
        border-radius: 8px;
        outline: none;
    }
}
</style>
