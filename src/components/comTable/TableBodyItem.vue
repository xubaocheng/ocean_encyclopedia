<!-- table body item -->
<template>
    <li class="table-werpper-body-item">
        <span
            class="table-werpper-body-item-child"
            v-for="(value, name, index) in tableItem"
            :key="`tableItem_item_${index}`"
            >{{ value }}</span
        >
    </li>
</template>

<script>
export default {
    name: 'TableBodyItem',
    components: {},
    props: {
        tableItem: {
            type: Object,
            default: () => ({})
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
.table-werpper-body-item {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    &-child {
        width: 25%;
        height: 100%;
        line-height: 40px;
        text-align: center;
    }
}
</style>
