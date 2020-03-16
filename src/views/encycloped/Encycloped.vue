<!-- 海洋百科 -->
<template>
    <div class='encycloped'>
        <div class="part1">
            <div class="lemp-box">
                <Lemp :lempListData="lempListData" />
                <!-- <div class="lemp-box-item">
                    <img src="" alt="">
                </div> -->
            </div>
            <div class="creat-entry-qanda">
                <h4>{{ modulTitle }}</h4>
                <p>{{ modulContent }}</p>
                <div class="create-btn">
                    <Button type="primary" shape="circle" size="large">创建词条</Button>
                </div>
            </div>
        </div>
        <div class="part2">
            <hotWord :hotwordList="hotwordList"></hotWord>
            <searchModular></searchModular>
            <hotWord :hotwordList="hotwordList"></hotWord>
        </div>
        <div class="part3">

        </div>
        <div class="part4">

        </div>
    </div>
</template>

<script>
import { hotword } from "@/api/Container";
import { lempList } from "@/api/Encycloped";
import Lemp from '_c/lemp/Lemp.vue'
export default {
    name: 'encycloped',
    components: {
        Lemp
    },
    data() {
        return {
            hotwordList: [],
            modulTitle: '我来试试',
            modulContent: '这是所有海洋人都可参与协作的海洋百科全书，您可以亲自创建词条为平台做出贡献。',
            lempListData: []
        };
    },
    mounted() {
        this.getHotword()
        this.getLempList()
    },
    methods: {
        getHotword(){
            let params = {
                pageIndex: 1,
                pageSize: 3
            }
            hotword(params).then((res) => {
				if(res.code == 200){
                    this.hotwordList = res.data.list
				}
            })
        },
        getLempList(){
            let params = {
                num:3
            }
            lempList(params).then((res) => {
                console.log(res)
				if(res.code == 200){
                    this.lempListData = res.data.list
				}
            })
        },
    },
}
</script>
<style lang='less' scoped>
.encycloped{
    width: 1200px;
    .part1{
        width: 100%;
        height: 340px;
        background: #eee;
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .lemp-box{
            width: 960px;
            height: 100%;
        }
        .creat-entry-qanda{
            width: 210px;
            height: 100%;
            padding: 20px 10px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            background: #fff;
            h4{
                text-align: center;
                line-height: 80px;
                font-size: 16px;
                font-weight: bold;
                color: rgb(255, 102, 0);
            }
            p{
                text-indent: 2em;
                font-size: 14px;
                line-height: 28px;
                color: rgb(153, 153, 153);
            }
            .create-btn{
                text-align: center;
            }
        }
    }
    .part2{
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        background: #fff;
    }
}
</style>
