 // 使用 Mock
 import Mock from 'mockjs'
 import {
    recommendedEntry,
    recommendedQandA,
    hotword,

    hotEntry,
    hotQandA,
    informationList,

    linkList,

    lempList,

    getBookList,
    getVideoList,
    getAllCheckInfo,
    getAllTreeInfo,
    getRecBookList,
    getRecTechnology,
    getBookDetail,
    getRecVideoList,
    videoMessage
 } from './response/mockData'

 const baseUrl2mock = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/api'

 Mock.mock(`${baseUrl2mock}/recommendedEntry`,recommendedEntry) //推荐词条

 Mock.mock(`${baseUrl2mock}/recommendedQandA`,recommendedQandA) //推荐问答

 Mock.mock(`${baseUrl2mock}/hotword`,hotword) //热词

 Mock.mock(`${baseUrl2mock}/hotEntry`,hotEntry) //热门词条

 Mock.mock(`${baseUrl2mock}/hotQandA`,hotQandA) //热门问答

 Mock.mock(`${baseUrl2mock}/informationList`,informationList) //资讯推荐

 Mock.mock(`${baseUrl2mock}/linkList`,linkList) //友情链接

 Mock.mock(`${baseUrl2mock}/lempList`,lempList) //跑马灯轮播图图片


 Mock.mock(`${baseUrl2mock}/getBookList`,getBookList) //农技知识图书更多列表

 Mock.mock(`${baseUrl2mock}/getVideoList`,getVideoList) //农技知识视频更多列表

 Mock.mock(`${baseUrl2mock}/getAllCheckInfo`,getAllCheckInfo) //农技知识全部作物分类checkBox list

 Mock.mock(`${baseUrl2mock}/getAllTreeInfo`,getAllTreeInfo) //农技知识全部作物分类tree list

 Mock.mock(`${baseUrl2mock}/getRecBookList`,getRecBookList) //获取推荐图书列表

 Mock.mock(`${baseUrl2mock}/getRecTechnology`,getRecTechnology) //获取推荐重大科技进展列表

 Mock.mock(`${baseUrl2mock}/getRecVideoList`,getRecVideoList) //获取推荐专家课堂视频

 Mock.mock(`${baseUrl2mock}/getBookDetail`,getBookDetail) //获取图书详情介绍

 Mock.mock(`${baseUrl2mock}/videoMessage`,videoMessage) //获取图书详情介绍
 export default Mock
