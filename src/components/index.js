import Search from './search/Search.vue'
import HotWord from './hotWord/HotWord.vue'
import Classify from './classify/Classify.vue'
//全局安装
export const searchModular = {
    install: function(Vue) {
        Vue.component('searchModular', Search)
    }
}

export const hotWord = {
    install: function(Vue) {
        Vue.component('hotWord', HotWord)
    }
}

export const classify = {
    install: function(Vue) {
        Vue.component('classify', Classify)
    }
}
