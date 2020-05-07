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
            <Table
                stripe
                ref="selection"
                :columns="tableHeader"
                :data="tableData"
                @on-select-all="selectAllFn(true)"
                @on-select-all-cancel="selectAllFn(false)"
            >
            </Table>
            <div
                class="table-box-btnGroup"
                v-if="tabsCurrentIndex == 2 || tabsCurrentIndex == 3"
            >
                <Button
                    type="primary"
                    class="table-box-btnGroup-btn"
                    @click="handleSelectAll"
                    >全选</Button
                >
                <Button type="error" class="table-box-btnGroup-btn"
                    >批量删除</Button
                >
            </div>
            <div class="table-box-page">
                <Page
                    :total="total"
                    :current="pageIndex"
                    @on-change="handlerPage"
                />
            </div>
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
            pageIndex: 1,
            pageSize: 5,
            total: 0,
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
                    key: 'versionArr',
                    render: (h, params) => {
                        return h(
                            'Select',
                            {
                                props: {
                                    value: params.row.versionArr[0].value //默认值
                                },
                                on: {
                                    'on-select': event => {
                                        console.log(event)
                                    }
                                },
                                style: {
                                    backgroundColoe: 'yellow'
                                }
                            },
                            params.row.versionArr.map(item => {
                                return h('Option', {
                                    props: {
                                        value: item.value,
                                        label: item.version
                                    }
                                })
                            })
                        )
                    }
                }
            ],
            tableData: [],
            selectStatus: false
        }
    },
    mounted() {
        this.getCreateEctry()
    },
    methods: {
        //分页
        handlerPage(index) {
            console.log(index)
            this.pageIndex = index
        },
        //操作tabs方法
        handlerTabsFn(item, index) {
            this.tabsCurrentIndex = index
            this.selectStatus = false
            this.$refs.selection.selectAll(this.selectStatus)
            this.pageIndex = 1
            this.getCreateEctry()
            // console.log(item)
        },
        //获取已通过版本表格数据
        getCreateEctry() {
            let params = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }
            createEctry(params).then(res => {
                if (res.code == 200) {
                    this.tableData = res.data.list
                    this.total = res.data.totalRecords
                } else {
                    this.$Message.error('加载失败，刷新试试')
                }
            })
        },
        // 判断当前table
        toggleTableHeader(index) {
            switch (index) {
                case 0:
                    this.tableHeader = [
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
                            key: 'versionArr',
                            render: (h, params) => {
                                return h(
                                    'Select',
                                    {
                                        props: {
                                            value:
                                                params.row.versionArr[0].value //默认值
                                        },
                                        on: {
                                            'on-select': event => {
                                                console.log(event)
                                            }
                                        }
                                    },
                                    params.row.versionArr.map(item => {
                                        return h('Option', {
                                            props: {
                                                value: item.value,
                                                label: item.version
                                            }
                                        })
                                    })
                                )
                            }
                        }
                    ]
                    break
                case 1:
                    this.tableHeader = [
                        {
                            title: '词条名称',
                            key: 'entryName'
                        },
                        {
                            title: '版本号',
                            key: 'version'
                        },
                        {
                            title: '提交时间',
                            key: 'submitTime'
                        }
                    ]
                    break
                case 2:
                    this.tableHeader = [
                        {
                            type: 'selection',
                            width: 60,
                            align: 'center'
                        },
                        {
                            title: '词条名称',
                            key: 'entryName'
                        },
                        {
                            title: '未通过原因',
                            key: 'failReason'
                        },
                        {
                            title: '版本号',
                            key: 'version'
                        },
                        {
                            title: '提交时间',
                            key: 'submitTime'
                        },
                        {
                            title: '审核时间',
                            key: 'examineTime'
                        },
                        {
                            title: '操作',
                            key: 'action',
                            render: (h, params) => {
                                console.log(params)
                                return h('div', [
                                    h(
                                        'Button',
                                        {
                                            props: {
                                                type: 'text',
                                                size: 'small'
                                            },
                                            style: {
                                                color: '#28c4f7'
                                            }
                                        },
                                        '删除'
                                    ),
                                    h(
                                        'Button',
                                        {
                                            props: {
                                                type: 'text',
                                                size: 'small'
                                            },
                                            style: {
                                                color: '#28c4f7'
                                            }
                                        },
                                        '编辑'
                                    )
                                ])
                            }
                        }
                    ]
                    break
                case 3:
                    this.tableHeader = [
                        {
                            type: 'selection',
                            width: 60,
                            align: 'center'
                        },
                        {
                            title: '词条名称',
                            key: 'entryName'
                        },
                        {
                            title: '保存时间',
                            key: 'preserveTime'
                        },
                        {
                            title: '操作',
                            key: 'action',
                            render: (h, params) => {
                                console.log(params)
                                return h('div', [
                                    h(
                                        'Button',
                                        {
                                            props: {
                                                type: 'text',
                                                size: 'small'
                                            },
                                            style: {
                                                color: '#28c4f7'
                                            }
                                        },
                                        '删除'
                                    ),
                                    h(
                                        'Button',
                                        {
                                            props: {
                                                type: 'text',
                                                size: 'small'
                                            },
                                            style: {
                                                color: '#28c4f7'
                                            }
                                        },
                                        '编辑'
                                    )
                                ])
                            }
                        }
                    ]
                    break
                default:
                    this.tableHeader = [
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
                            key: 'versionArr',
                            render: (h, params) => {
                                return h(
                                    'Select',
                                    {
                                        props: {
                                            value:
                                                params.row.versionArr[0].value //默认值
                                        },
                                        on: {
                                            'on-select': event => {
                                                console.log(event)
                                            }
                                        },
                                        style: {
                                            backgroundColoe: 'yellow'
                                        }
                                    },
                                    params.row.versionArr.map(item => {
                                        return h('Option', {
                                            props: {
                                                value: item.value,
                                                label: item.version
                                            }
                                        })
                                    })
                                )
                            }
                        }
                    ]
            }
        },
        //表格中的全选方法
        selectAllFn(boolen) {
            this.selectStatus = boolen
        },
        //全选按钮切换
        handleSelectAll() {
            this.selectStatus = !this.selectStatus
            this.$refs.selection.selectAll(this.selectStatus)
        }
    },
    watch: {
        tabsCurrentIndex(val) {
            this.toggleTableHeader(val)
        }
    }
}
</script>
<style lang="less" scoped>
.ivu-table-wrapper {
    overflow: inherit;
}
.personal-create {
    width: 100%;
    .table-tabs {
        width: 100%;
        height: 60px;
        border: 1px solid #0d0d0d;
        background: #ededed;
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
                background: rgba(51, 153, 255, 1);
                color: #fff;
            }
        }
    }
    .table-box {
        widows: 100%;
        &-btnGroup {
            width: 100%;
            padding: 10px 20px;
            &-btn {
                margin-right: 20px;
            }
        }
        &-page {
            width: 100%;
            padding: 20px 0;
            text-align: center;
        }
    }
}
</style>
