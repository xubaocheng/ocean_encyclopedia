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

//创建的词条 --- 已通过版本
export const createEctry = params => {
    return axios.request({
        url: `${publicUrl}/createEctry`,
        method: 'post',
        dataType: 'json',
        data: params
    })
}
