import axios from './index'
import publicUrl from './publicUrl'

//推荐词条
export const recommendedEntry = () => {
    return axios.request({
        url: `${publicUrl}/recommendedEntry`,
        method: 'post',
        dataType: 'json'
    })
}
//推荐问答
export const recommendedQandA = params => {
    return axios.request({
        url: `${publicUrl}/recommendedQandA`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
//热词
export const hotword = params => {
    return axios.request({
        url: `${publicUrl}/hotword`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
//热门词条
export const hotEntry = params => {
    return axios.request({
        url: `${publicUrl}/hotEntry`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
//热门问答
export const hotQandA = params => {
    return axios.request({
        url: `${publicUrl}/hotQandA`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}

//热门问答
export const informationList = params => {
    return axios.request({
        url: `${publicUrl}/informationList`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}

//友情链接
export const linkList = () => {
    return axios.request({
        url: `${publicUrl}/linkList`,
        method: 'post',
        dataType: 'json'
    })
}
