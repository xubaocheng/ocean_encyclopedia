<!-- table body列表盒子 -->
<template>
    <ul class="table-werpper-body">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'TableBody',
    components: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.table-werpper-body {
    width: 100%;
}
</style>
