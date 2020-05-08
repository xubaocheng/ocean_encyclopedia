<!-- 跑马灯轮播图 -->
<template>
    <div class="back_add">
        <div class="threeImg">
            <div class="Containt">
                <!-- <div class="iconleft"  @click="zuohua">
                    <i class="el-icon-arrow-left"></i>
                </div> -->
                <ul
                    :style="{ left: calleft + 'px' }"
                    v-on:mouseover="stopmove()"
                    v-on:mouseout="move()"
                >
                    <li v-for="(item, index) in lempListData" :key="index">
                        <img :src="item.img" />
                    </li>
                </ul>
                <!-- <div class="iconright" @click="youhua">
                    <i class="el-icon-arrow-right" ></i>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    props: {
        lempListData: {
            typr: Array,
            default: []
        }
    },
    data() {
        return {
            lempListDataCopy: [],
            calleft: 0
        }
    },
    // computed: {
    //     lempListDataCopy: function() {
    //         this.lempListData.forEach(item => {})
    //         return ''
    //     }
    // },
    mounted() {
        this.move()
    },
    methods: {
        //移动
        move() {
            this.timer = setInterval(this.starmove, 30)
        },
        //开始移动
        starmove() {
            this.calleft -= 5
            // let a = 4 * 340
            if (this.calleft < -6 * 340) {
                this.calleft = 0
            }
        },
        //鼠标悬停时停止移动
        stopmove() {
            clearInterval(this.timer)
        },
        //点击按钮左移
        zuohua() {
            this.calleft -= 340
            if (this.calleft < -3 * 340) {
                this.calleft = 0
            }
        },
        //点击按钮右移
        youhua() {
            this.calleft += 340
            if (this.calleft > 0) {
                this.calleft = -1020
            }
        }
    }
}
</script>
<style lang="less" scoped>
.back_add {
    background-color: #ededed;
    width: 100%;
    height: 100%;
}

.threeImg {
    height: 100%;
    background: #ededed;
    border-bottom: 3px solid #4679b2;
    // min-width: 1000px;
}

.threeImg .Containt ul {
    margin: 0 auto;
    width: 3400px;
    position: absolute;
    left: 0px;
    cursor: pointer;
    height: 100%;
}

.threeImg .Containt ul li {
    width: 300px;
    margin-right: 40px;
    float: left;
}

.threeImg .Containt ul li img {
    // height: 128px;
    width: 100%;
    height: 100%;
}

.Containt {
    position: relative;
    // width: 1000px;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
}

.iconleft {
    position: absolute;
    width: 20px;
    height: 80px;
    top: 140px;
    left: 0;
    z-index: 99999;
    padding-top: 48px;
    background-color: #ddd;
    vertical-align: middle;
}

.iconright {
    // position: relative;
    // left: 978px;
    // top: 70px;
    // background-color: #ddd;
    position: absolute;
    width: 20px;
    height: 80px;
    top: 140px;
    right: 0;
    z-index: 99999;
    padding-top: 48px;
    background-color: #ddd;
    vertical-align: middle;
}
</style>
