<!-- 左侧分类 -->
<template>
    <div class="classify-menu">
        <div class="classify-menu-item" v-for="(itemOne,index) in classifyListData" :key="`itemOne_${index}`">
            <div class="classify-menu-item-one">
                <h2>一级分类{{itemOne.title}}</h2>
                <div class="classify-menu-item-two" v-for="(itemTwo,i) in itemOne.children" :key="`itemTwo_${i}`">
                    <div class="collapse" @click="togglebox(index,i)">
                        <h3>二级分类{{itemTwo.title}}</h3>
                        <Icon :type="itemTwo.expand ? 'md-arrow-dropup' : 'md-arrow-dropdown' "size="24" />
                    </div>
                    <transition name="fade">
                        <div class="classify-menu-item-three" v-show="itemTwo.expand">
                            <span v-for="(itemThree,j) in itemTwo.children" :key="`itemThree_${j}`">三级分类{{itemThree.title}}</span>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Classify',
    components: {},
    props: {
        classifyListData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {
        togglebox:function(currentIndex,currentChildIndex){
            this.classifyListData.forEach((item,index) => {
                item.children.forEach((child,i) => {
                    if(currentIndex === index && currentChildIndex === i){
                        child.expand = !child.expand
                    }
                })
            })
        }
    },
}
</script>
<style lang='less' scoped>
.classify-menu{
        width: 280px;
        border: 1px solid #e5e5e5;
        background: #fff;
        &-item{
            width: 100%;
            background: #fff;
            padding: 10px 20px;
            &-one{
                width: 100%;
                border-bottom: 1px dashed #ccc;
                padding-bottom: 10px;
                h2{
                    width: 100%;
                    line-height: 25px;
                    font-size: 16px;
                    font-weight: bold;
                    color: rgb(23, 147, 242);
                }
                .classify-menu-item-two{
                    width: 100%;
                    .collapse{
                        width: 100%;
                        cursor: pointer;
                        display: flex;
                        justify-content: space-around;
                        h3{
                            width: 100%;
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 30px;
                        }
                    }
                    .fade-leave-active,.fade-enter-active{
                        transition:  all 1s ease;
                    }
                    .fade-leave-active,.fade-enter{
                        height:0px;
                        opacity: 0;
                    }
                    .fade-leave,.fade-enter-active{
                        height: 100px;
                        opacity: 1;
                    }
                    .classify-menu-item-three{
                        width: 100%;
                        font-size: 12px;
                        display: flex;
                        flex-wrap: wrap;
                        span{
                            width: 50%;
                            text-align: center;
                            line-height: 25px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
