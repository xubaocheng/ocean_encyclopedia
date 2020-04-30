<!-- 表格组件 -->
<template>
    <div class="com-table">
        <TableTabs :tabs="tabs"></TableTabs>
        <Table>
            <TableHeader :tableHeader="tableHeader"></TableHeader>
            <TableBody>
                <TableBodyItem
                    v-for="(item, index) in tableData"
                    :key="`tableData_item_${index}`"
                    :tableItem="item"
                ></TableBodyItem>
            </TableBody>
        </Table>
    </div>
</template>

<script>
import TableTabs from './TableTabs'
import Table from './Table'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableBodyItem from './TableBodyItem'
export default {
    name: 'ComTable',
    components: {
        TableTabs,
        Table,
        TableHeader,
        TableBody,
        TableBodyItem
    },
    provide() {
        return {
            table: this // 传递Form 实例给后代 比如FormItem 用来校验
        }
    },
    props: {
        tabs: {
            type: Array,
            default: () => {
                return []
            }
        },
        tableHeader: {
            type: Array,
            default: () => {
                return []
            }
        },
        tableData: {
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
.com-table {
    width: 100%;
    padding: 0 30px;
}
</style>
