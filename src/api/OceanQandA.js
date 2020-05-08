import axios from './index'
import publicUrl from './publicUrl'

//跑马灯轮播图
export const QandAlempList = () => {
    return axios.request({
        url: `${publicUrl}/QandAlempList`,
        method: 'post',
        dataType: 'json'
    })
}

//侧边栏分类数据
export const QandAclassifyList = () => {
    return axios.request({
        url: `${publicUrl}/QandAclassifyList`,
        method: 'post',
        dataType: 'json'
    })
}

//热门词条分类数据
export const hotQandAClassify = () => {
    return axios.request({
        url: `${publicUrl}/hotQandAClassify`,
        method: 'post',
        dataType: 'json'
    })
}

//热门词条分类数据
export const hotQandAClassifyRank = params => {
    return axios.request({
        url: `${publicUrl}/hotQandAClassifyRank`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
