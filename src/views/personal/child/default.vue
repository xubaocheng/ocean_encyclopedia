<!-- 默认模块 -->
<template>
    <div class="personal-default">
        <section class="personal-default-top">
            <div class="personal-default-top-title">
                <h5>猜你喜欢</h5>
                <span
                    :class="{ active: selectActive === 'entry' }"
                    @click="selectActiveFn('entry')"
                    >词条</span
                >
                <i>|</i>
                <span
                    :class="{ active: selectActive === 'qAndA' }"
                    @click="selectActiveFn('qAndA')"
                    >问答</span
                >
            </div>
            <Button type="text" size="small">更多</Button>
        </section>
        <section class="personal-default-bottom">
            <GuessCompont
                :guessData="guessData"
                :selectActive="selectActive"
                @scroll-state="scroll"
                ><div class="more">{{ moreStatus }}</div></GuessCompont
            >
        </section>
    </div>
</template>

<script>
import { guessList } from '@/api/Personal.js'
import GuessCompont from '_c/comList/GuessCompont'
export default {
    name: 'PersonalDefault',
    components: {
        GuessCompont
    },
    data() {
        return {
            selectActive: 'qAndA', //问答qAndA, 词条entry
            pageIndex: 1,
            pageSize: 5,
            total: 0,
            moreStatus: '向下加载更多',
            guessData: []
        }
    },
    mounted() {
        this.getGuessList(this.selectActive, this.pageIndex, this.pageSize)
    },
    methods: {
        selectActiveFn(name) {
            this.selectActive = name
            this.guessData = []
            this.getGuessList(this.selectActive, this.pageIndex, this.pageSize)
        },
        getGuessList(name, pageIndex, pageSize) {
            let params = {
                name: name,
                pageIndex: pageIndex,
                pageSize: pageSize
            }
            guessList(params).then(res => {
                console.log(res)
                if (res.code == 200) {
                    this.guessData = res.data.list
                }
            })
        },
        scroll() {
            this.pageIndex = 1
            this.total = this.total + 1
            this.pageSize = this.pageSize + 5
            if (this.total >= 4) {
                console.log('没有了')
                this.moreStatus = '已经加载全部'
            } else {
                this.getGuessList(
                    this.selectActive,
                    this.pageIndex,
                    this.pageSize
                )
            }
        }
    }
}
</script>
<style lang="less" scoped>
.personal-default {
    width: 100%;
    &-top {
        width: 100%;
        border: 1px solid #ededed;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        &-title {
            display: flex;
            border-left: 5px solid #25c9fe;
            align-items: center;
            padding-left: 20px;
            h5 {
                font-weight: bold;
                font-size: 16px;
                margin-right: 20px;
            }
            span {
                cursor: pointer;
                &.active {
                    color: #25c9fe;
                }
            }
            i {
                font-style: normal;
                padding: 0 10px;
            }
        }
    }
    &-bottom {
        width: 100%;
        padding: 25px 30px;
    }
}
</style>
