 // 使用 Mock
 import Mock from 'mockjs'
 import {
     getPaperInfo,
     getBookInfo,
     getVideoInfo,
     getCropClassify,
     getYearInfo,
     getChirdCropInfo,
     getPaperList,
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

 const baseUrl2mock = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/seed'

 Mock.mock(`${baseUrl2mock}/getBookInfo`,getBookInfo) //首页图书

 Mock.mock(`${baseUrl2mock}/getPaperInfo`,getPaperInfo) //首页期刊论文

 Mock.mock(`${baseUrl2mock}/getVideoInfo`,getVideoInfo) //首页视频

 Mock.mock(`${baseUrl2mock}/getCropClassify`,getCropClassify) //农技知识作物分类

 Mock.mock(`${baseUrl2mock}/getYearInfo`,getYearInfo) //农技知识年份list

 Mock.mock(`${baseUrl2mock}/getChirdCropInfo`,getChirdCropInfo) //农技知识子级分类

 Mock.mock(`${baseUrl2mock}/getPaperList`,getPaperList) //农技知识期刊论文更多列表

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
