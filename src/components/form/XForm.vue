<!-- 最外层容器 -->
<template>
    <div class="">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: '',
    provide() {
        return {
            form: this // 传递Form 实例给后代 比如FormItem 用来校验
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    components: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {
        validate(cb) {
            //map结果是若干Promise数组
            const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate())
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false))
        }
    }
}
</script>
<style lang="less" scoped></style>
