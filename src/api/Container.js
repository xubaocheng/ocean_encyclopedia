import axios from './index'
import publicUrl from './publicUrl'

//推荐热词
export const recommendedEntry = () => {
    return axios.request({
        url: `${publicUrl}/recommendedEntry`,
        method: 'post',
        dataType: 'json'
    })
}
//推荐问答
export const recommendedQandA = (params) => {
    return axios.request({
        url: `${publicUrl}/recommendedQandA`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
//热词
export const hotword = (params) => {
    return axios.request({
        url: `${publicUrl}/hotword`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
