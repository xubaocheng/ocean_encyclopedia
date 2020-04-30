<!-- 创建的词条模块 -->
<template>
    <div class="personal-create">
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
        <div class="table-box">
            <Table stripe :columns="tableHeader" :data="tableData">
                <template slot-scope="{ row }" slot="versionArr">
                    <Select
                        v-model="row.versionArr[0].value"
                        style="width:200px"
                    >
                        <Option
                            v-for="(versionArrItem, index) in row.versionArr"
                            :value="versionArrItem.value"
                            :key="`versionArr_item_${index}`"
                            >{{ versionArrItem.version }}</Option
                        >
                    </Select>
                </template>
            </Table>
        </div>
    </div>
</template>

<script>
import { createEctry } from '@/api/Personal'
export default {
    name: 'PersonalCreate',
    components: {},
    data() {
        return {
            tabs: [
                {
                    name: '已通过版本'
                },
                {
                    name: '待通过版本'
                },
                {
                    name: '未通过版本'
                },
                {
                    name: '草稿箱'
                }
            ],
            tabsCurrentIndex: 0,
            tableHeader: [
                {
                    title: '词条名称',
                    key: 'entryName'
                },
                {
                    title: '版本号',
                    key: 'version'
                },
                {
                    title: '通过时间',
                    key: 'adoptTime'
                },
                {
                    title: '被他人修改版本',
                    slot: 'versionArr',
                    key: 'versionArr'
                }
            ],
            tableData: [],
            model: ''
        }
    },
    mounted() {
        this.getCreateEctry()
    },
    methods: {
        //操作tabs方法
        handlerTabsFn(item, index) {
            this.tabsCurrentIndex = index
        },
        getCreateEctry() {
            createEctry().then(res => {
                console.log(res)
                this.tableData = res.data.list
            })
        }
    }
}
</script>
<style lang="less" scoped>
.personal-create {
    width: 100%;
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
}
</style>
