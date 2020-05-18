<!-- 词云 -->
<template>
    <div class="hot-cloud">
        <wordcloud
            class="wordcloud"
            :data="defaultWords"
            nameKey="name"
            valueKey="value"
            :color="myColors"
            :showTooltip="false"
            :margin="{ top: 10, right: 10, bottom: 10, left: 10 }"
            :wordPadding="10"
            :rotate="{ from: 0, to: 0, numOfOrientation: 0 }"
            :spiral="`rectangular`"
            fontScale="log"
            :fontSize="[20, 30]"
            font="Arial"
            :wordClick="wordClickHandler"
        >
        </wordcloud>
    </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
    name: 'HotCloud',
    props: {
        defaultWords: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    components: {
        wordcloud
    },

    methods: {
        wordClickHandler(name, value, vm) {
            console.log('wordClickHandler', name, value, vm)
        }
    },
    data() {
        return {
            //
            myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef']
        }
    },
    mounted() {
        console.log(this.defaultWords)
        // this.defaultWords = this.hotwordList
    }
}
</script>
<style lang="less" scoped>
.hot-cloud {
    width: 100%;
    height: 200px;
    .wordcloud {
        width: 100%;
        height: 200px;
        .text {
            cursor: pointer;
        }
    }
}
</style>
