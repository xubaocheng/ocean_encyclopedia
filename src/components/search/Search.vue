<!-- 搜索 -->
<template>
    <div class='search-modul'>
        <div class="search-modul-input">
            <input class="tl-price-input" type="text" placeholder="请输入内容" />
        </div>
        <div class="search-modul-select">
            <div class="input-box" @click="openValue">
                <input v-model="value" type="text" placeholder="全局" readonly="true"><Icon type="ios-arrow-down" />
            </div>
            <div class="list" v-show="show">
                <ul>
                    <li @click="getvalue(index,item)" v-for="(item,index) in tableData" :key="item.index">{{ item.name }}</li>
                </ul>
            </div>
        </div>
        <div class="search-modul-btn">
            <Button type="primary" icon="ios-search" style="height:100%; border-top-left-radius: 0px;border-bottom-left-radius: 0px; font-size:24px;"></Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'searchModul',
    components: {},
    data() {
        return {
            tableData:[
            {
                'name':111
            },
            {
                'name':222
            },
            {
                'name':333
            }, {
                'name':444
            }
            ],
            show:false,
            value:''
        };
    },
    mounted() {

    },
    methods: {
        openValue(){
            this.show=!this.show;
        },
        getvalue(index,item){
            this.value=item.name;
            this.show=false;
        },
    },
}
</script>
<style lang='less' scoped>
.search-modul{
    width: 600px;
    height: 40px;
    display: flex;
    &-input{
        width: 400px;
        border: 1px solid #ccc;
        border-right: none;
        .tl-price-input{
            width: 100%;
            height: 100%;
            padding: 7px 0;
            background: #fff;
            border-radius: 3px;
            padding-left:5px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
        }
    }
    &-select{
        background: #fff;
        .input-box{
            width: 140px;
            height: 40px;
            padding-left: 10px;
            border: 1px solid #cccccc;
            border-left: none;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
            position: relative;
            input{
                border: none;
                outline: none;
                width: 30%;
            }
        }
        .list{
            min-width: 140px;
            border: 1px solid #cccccc;
            border-top: none;
            overflow: hidden;
            position: absolute;
            z-index: 9;
            ul li{
                list-style: none;
                width: 100%;
                height: 30px;
                cursor: pointer;
                line-height: 30px;
                padding-left: 10px;
            }
                ul li:hover{
                background-color: #cccccc;
            }
        }
    }
    &-btn{

    }
}
</style>
