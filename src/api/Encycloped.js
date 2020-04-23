import axios from './index'
import publicUrl from './publicUrl'

//跑马灯轮播图
export const lempList = () => {
    return axios.request({
        url: `${publicUrl}/lempList`,
        method: 'post',
        dataType: 'json'
    })
}

//侧边栏分类数据
export const classifyList = () => {
    return axios.request({
        url: `${publicUrl}/classifyList`,
        method: 'post',
        dataType: 'json'
    })
}

//热门词条分类数据
export const hotEntryClassify = () => {
    return axios.request({
        url: `${publicUrl}/hotEntryClassify`,
        method: 'post',
        dataType: 'json'
    })
}

//热门词条分类数据
export const hotEntryClassifyRank = params => {
    return axios.request({
        url: `${publicUrl}/hotEntryClassifyRank`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
