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
    classifyList,
    hotEntryClassify,
    hotEntryClassifyRank,
    guessList
} from './response/mockData'

const baseUrl2mock =
    process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/api'

Mock.mock(`${baseUrl2mock}/recommendedEntry`, recommendedEntry) //推荐词条

Mock.mock(`${baseUrl2mock}/recommendedQandA`, recommendedQandA) //推荐问答

Mock.mock(`${baseUrl2mock}/hotword`, hotword) //热词

Mock.mock(`${baseUrl2mock}/hotEntry`, hotEntry) //热门词条

Mock.mock(`${baseUrl2mock}/hotQandA`, hotQandA) //热门问答

Mock.mock(`${baseUrl2mock}/informationList`, informationList) //资讯推荐

Mock.mock(`${baseUrl2mock}/linkList`, linkList) //友情链接

Mock.mock(`${baseUrl2mock}/lempList`, lempList) //跑马灯轮播图图片

Mock.mock(`${baseUrl2mock}/classifyList`, classifyList) //侧边栏分类数据

Mock.mock(`${baseUrl2mock}/hotEntryClassify`, hotEntryClassify) //热门词条分类数据

Mock.mock(`${baseUrl2mock}/hotEntryClassifyRank`, hotEntryClassifyRank) //热门词条前十

Mock.mock(`${baseUrl2mock}/guessList`, guessList) //猜你喜欢问答or词条列表

export default Mock
