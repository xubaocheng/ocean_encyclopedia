<!-- 热词 -->
<template>
    <div class="hot-word">
        <span class="hot-word-item" v-for="(item,index) in hotwordList" :key="`hotwordList_${index}`" :style="{lineHeight:height[index],height:height1[index]}">{{item.name}}</span>
    </div>
</template>

<script>
export default {
    name: 'hotWord',
    components: {},
    props: {
        hotwordList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            height:['80px','10px','50px','50px','20px','10px'],
            height1:['40px','50px','50px','50px','20px','60px'],
        };
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style lang='less' scoped>
.hot-word{
    width: 300px;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    &-item{
        min-width: 80px;
        text-align: center;
        padding: 5px;
    }
}
</style>
