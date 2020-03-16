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
