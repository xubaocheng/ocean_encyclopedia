<!-- table 表头 -->
<template>
    <div class="table-warpper-header">
        <span
            class="table-warpper-header-item"
            v-for="(item, index) in tableHeader"
            :key="`tableHeader_item_${index}`"
            >{{ item.name }}</span
        >
    </div>
</template>

<script>
export default {
    name: 'TableHeader',
    components: {},
    props: {
        tableHeader: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>
<style lang="less" scoped>
.table-warpper-header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background: #eee;
    &-item {
        width: 25%;
        height: 100%;
        line-height: 40px;
        text-align: center;
    }
}
</style>
