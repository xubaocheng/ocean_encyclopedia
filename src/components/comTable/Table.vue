<!-- table 盒子 -->
<template>
    <div class="table-warpper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TableWarpper',
    components: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.table-warpper {
    width: 100%;
    border: 1px solid #0d0d0d;
}
</style>
