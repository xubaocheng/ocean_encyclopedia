<!-- 消息模块 -->
<template>
    <div class="personal-news">
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
            <div class="table-box-btnGroup">
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
                <Page :total="total" />
            </div>
        </div>
    </div>
</template>

<script>
import { news } from '@/api/Personal'
export default {
    name: 'PersonalNews',
    components: {},
    data() {
        return {
            pageIndex: 1,
            pageSize: 5,
            total: 0,
            tableHeader: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '消息类型',
                    key: 'newsType',
                    render: (h, params) => {
                        return h('Badge', {
                            props: {
                                color: params.row.newsStatus ? ' ' : 'red',
                                text: params.row.newsType
                            }
                        })
                    }
                },
                {
                    title: '名称',
                    key: 'newsName'
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
                                '查看'
                            )
                        ])
                    }
                }
            ],
            tableData: [],
            selectStatus: false
        }
    },
    mounted() {
        this.getNews()
    },
    methods: {
        //获取已通过版本表格数据
        getNews() {
            let params = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
            }
            news(params).then(res => {
                if (res.code == 200) {
                    this.tableData = res.data.list
                    this.total = res.data.totalRecords
                } else {
                    this.$Message.error('加载失败，刷新试试')
                }
            })
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
    }
}
</script>
<style lang="less" scoped>
.personal-news {
    width: 100%;
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
