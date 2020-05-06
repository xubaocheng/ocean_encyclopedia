import axios from './index'
import publicUrl from './publicUrl'
//猜你喜欢问答列表
export const guessList = params => {
    return axios.request({
        url: `${publicUrl}/guessList`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}

//创建的词条
export const createEctry = params => {
    return axios.request({
        url: `${publicUrl}/createEctry`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}

//编辑的词条
export const editEctry = params => {
    return axios.request({
        url: `${publicUrl}/editEctry`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}

//提问
export const question = params => {
    return axios.request({
        url: `${publicUrl}/question`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}

//提问
export const answers = params => {
    return axios.request({
        url: `${publicUrl}/answers`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
