<!-- table tabs -->
<template>
    <div class="table-tabs">
        <span
            class="table-tabs-item"
            v-for="(item, index) in tabs"
            :key="`tabs_item_${index}`"
            :class="{ active: tabsCurrentIndex === index }"
            @click="handlerTabsFn(item, index)"
            >{{ item.name }}</span
        >
    </div>
</template>

<script>
export default {
    name: 'TableTabs',
    components: {},
    props: {
        tabs: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            tabsCurrentIndex: 0
        }
    },
    mounted() {},
    methods: {
        //操作tabs方法
        handlerTabsFn(item, index) {
            this.tabsCurrentIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
.table-tabs {
    width: 100%;
    height: 60px;
    border: 1px solid #0d0d0d;
    background: #d9d9d9;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    &-item {
        width: 25%;
        height: 100%;
        line-height: 60px;
        text-align: center;
        font-weight: bold;
        color: #000;
        font-size: 16px;
        cursor: pointer;
        &:hover,
        &.active {
            background: #282da0;
            color: #fff;
        }
    }
}
</style>
