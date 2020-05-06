/* eslint-disable no-unused-vars */
import Mock from 'mockjs'

const Random = Mock.Random
//获取推荐词条
export const recommendedEntry = options => {
    const template = {
        code: 200,
        data: {
            'list|6': [
                {
                    name: '@ctitle(3,6)'
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取推荐问答
export const recommendedQandA = option => {
    let pageIndex = JSON.parse(option.body).pageIndex
    let pageSize = JSON.parse(option.body).pageSize
    const template = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 4444,
            totalRecords: 66666,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    arr.push(
                        Mock.mock({
                            content: '@csentence(20,40)'
                        })
                    )
                }
                return arr
            }
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取热词
export const hotword = option => {
    const template = {
        code: 200,
        data: {
            'list|6': [
                {
                    name: '@cword(3, 5)'
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//获取热门词条
export const hotEntry = option => {
    let pageIndex = JSON.parse(option.body).pageIndex
    let pageSize = JSON.parse(option.body).pageSize
    const template = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 4444,
            totalRecords: 66666,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    arr.push(
                        Mock.mock({
                            title: '@ctitle(4,9)',
                            content: '@csentence(60,140)'
                        })
                    )
                }
                return arr
            }
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//获取热门问答
export const hotQandA = option => {
    let pageIndex = JSON.parse(option.body).pageIndex
    let pageSize = JSON.parse(option.body).pageSize
    const template = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 4444,
            totalRecords: 66666,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    arr.push(
                        Mock.mock({
                            classify: '@ctitle(4)',
                            title: '@ctitle(4,9)',
                            img: Random.image(
                                '200x100',
                                '#50B347',
                                '#FFF',
                                'Mock.js'
                            ),
                            content: '@csentence(20,40)',
                            tag: ['海洋', '鲨鱼']
                        })
                    )
                }
                return arr
            }
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取资讯推荐
export const informationList = option => {
    let pageIndex = JSON.parse(option.body).pageIndex
    let pageSize = JSON.parse(option.body).pageSize
    const template = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 4,
            totalRecords: 16,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    arr.push(
                        Mock.mock({
                            title: '@ctitle(4,9)',
                            img: Random.image(
                                '180x115',
                                '#50B347',
                                '#FFF',
                                'Mock.js'
                            ),
                            content: '@csentence(140,200)',
                            author: '@cname',
                            time: '1小时前'
                        })
                    )
                }
                return arr
            }
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//友情链接
export const linkList = option => {
    const template = {
        code: 200,
        data: {
            'list|35': [
                {
                    name: '@cword(3, 6)'
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//跑马灯轮播图
export const lempList = option => {
    const template = {
        code: 200,
        data: {
            list: [
                {
                    img: Random.image(
                        '250x297',
                        Random.color(),
                        Random.color(),
                        '1'
                    )
                },
                {
                    img: Random.image(
                        '250x297',
                        Random.color(),
                        Random.color(),
                        '2'
                    )
                },
                {
                    img: Random.image(
                        '250x297',
                        Random.color(),
                        Random.color(),
                        '3'
                    )
                },
                {
                    img: Random.image(
                        '250x297',
                        Random.color(),
                        Random.color(),
                        '4'
                    )
                },
                {
                    img: Random.image(
                        '250x297',
                        Random.color(),
                        Random.color(),
                        '5'
                    )
                },
                {
                    img: Random.image(
                        '250x297',
                        Random.color(),
                        Random.color(),
                        '6'
                    )
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//获取侧边分类
export const classifyList = option => {
    const template = {
        code: 200,
        data: {
            'list|5': [
                {
                    id: Mock.mock('@integer(10000)'),
                    title: Mock.mock('@cword(3, 5)'),
                    expand: true,
                    isPurchase: true,
                    'children|2': [
                        {
                            id: Mock.mock('@integer(10000)'),
                            title: Mock.mock('@cword(3, 5)'),
                            expand: false,
                            isPurchase: false,
                            'children|8': [
                                {
                                    id: Mock.mock('@integer(10000)'),
                                    title: Mock.mock('@cword(3, 5)'),
                                    expand: false,
                                    isPurchase: false,
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//获取热门词条分类
export const hotEntryClassify = option => {
    const template = {
        code: 200,
        data: {
            'list|8': [
                {
                    name: '@cword(4)',
                    icon: 'ios-construct',
                    color: Mock.mock('@color')
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}

//获取热们词条前十
export const hotEntryClassifyRank = option => {
    let pageIndex = JSON.parse(option.body).pageIndex
    let pageSize = JSON.parse(option.body).pageSize
    const template = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 4444,
            totalRecords: 66666,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    if (i === 2 || i === 3 || i === 8) {
                        arr.push(
                            Mock.mock({
                                title: '@ctitle(4,9)',
                                content: '@csentence(100,240)',
                                img: '',
                                headSculpture: Random.image('20x10', '#6fc'),
                                author: Mock.mock('@cname'),
                                date: Random.date('yyyy-MM-dd')
                            })
                        )
                    } else {
                        arr.push(
                            Mock.mock({
                                title: '@ctitle(4,9)',
                                content: '@csentence(60,140)',
                                img: Random.image('200x100', '#FF6600'),
                                headSculpture: Random.image('20x10', '#6fc'),
                                author: Mock.mock('@cname'),
                                date: Random.date('yyyy-MM-dd')
                            })
                        )
                    }
                }
                return arr
            }
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取问答列表 --- 个人中心
export const guessList = option => {
    // console.log(option)
    let name = JSON.parse(option.body).name
    let pageIndex = JSON.parse(option.body).pageIndex
    let pageSize = JSON.parse(option.body).pageSize
    const template1 = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 5,
            totalRecords: 20,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    if (i === 2 || i === 3 || i === 8) {
                        arr.push(
                            Mock.mock({
                                title: '@ctitle(4,9)',
                                content: '@csentence(100,240)',
                                img: '',
                                headSculpture: Random.image('20x10', '#6fc'),
                                author: Mock.mock('@cname'),
                                count: 0,
                                date: Random.date('yyyy-MM-dd')
                            })
                        )
                    } else {
                        arr.push(
                            Mock.mock({
                                title: '@ctitle(4,9)',
                                content: '@csentence(100,240)',
                                img: Random.image('400x400', '#FF6600'),
                                headSculpture: Random.image('20x10', '#6fc'),
                                author: Mock.mock('@cname'),
                                'count|0-100': 100,
                                date: Random.date('yyyy-MM-dd')
                            })
                        )
                    }
                }
                return arr
            }
        },
        message: 'Success'
    }
    const template2 = {
        code: 200,
        data: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            total: 5,
            totalRecords: 20,
            list: () => {
                let arr = []
                for (let i = 0; i < pageSize; i++) {
                    if (i === 2 || i === 3 || i === 8) {
                        arr.push(
                            Mock.mock({
                                title: '@ctitle(4,9)',
                                content: '@csentence(100,240)',
                                img: '',
                                headSculpture: Random.image('20x10', '#6fc'),
                                author: Mock.mock('@cname'),
                                date: Random.date('yyyy-MM-dd')
                            })
                        )
                    } else {
                        arr.push(
                            Mock.mock({
                                title: '@ctitle(4,9)',
                                content: '@csentence(100,240)',
                                img: Random.image('400x400', '#FF6600'),
                                headSculpture: Random.image('20x10', '#6fc'),
                                author: Mock.mock('@cname'),
                                date: Random.date('yyyy-MM-dd')
                            })
                        )
                    }
                }
                return arr
            }
        },
        message: 'Success'
    }
    let template
    if (name === 'entry') {
        template = template2
    } else {
        template = template1
    }
    return Mock.mock(template)
}

//获取创建的词条已通过版本
export const createEctry = opation => {
    const template = {
        code: 200,
        data: {
            'list|10': [
                {
                    entryName: '@cword(2,4)', //词条名称
                    'version|3': /\d{5}/, //版本号
                    submitTime: Mock.mock('@date'), //提交时间
                    preserveTime: Mock.mock('@date'), //保存时间
                    examineTime: Mock.mock('@date'), // 审核时间
                    adoptTime: Mock.mock('@date'), // 通过时间
                    'versionArr|3': [
                        {
                            'version|3': /\d{5}/,
                            'value|5': Mock.mock('@string("number", 1, 3)')
                        }
                    ],
                    failReason: '@cword(6,10)' //未通过原因
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取编辑的词条已通过版本
export const editEctry = opation => {
    const template = {
        code: 200,
        data: {
            'list|10': [
                {
                    entryName: '@cword(2,4)', //词条名称
                    'version|3': /\d{5}/, //版本号
                    submitTime: Mock.mock('@date'), //提交时间
                    preserveTime: Mock.mock('@date'), //保存时间
                    examineTime: Mock.mock('@date'), // 审核时间
                    adoptTime: Mock.mock('@date'), // 通过时间
                    failReason: '@cword(6,10)' //未通过原因
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取我的提问
export const question = opation => {
    const template = {
        code: 200,
        data: {
            'list|10': [
                {
                    title: '@cword(6,14)', //标题
                    'version|3': /\d{5}/, //版本号
                    submitTime: Mock.mock('@date'), //提交时间
                    examineTime: Mock.mock('@date'), // 审核时间
                    answerTime: Mock.mock('@date'), //解答时间
                    delTime: Mock.mock('@date'), //删除时间
                    preserveTime: Mock.mock('@date'), //保存时间-最后编辑时间
                    failReason: '@cword(6,10)' //未通过原因
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
//获取我的回答
export const answers = opation => {
    const template = {
        code: 200,
        data: {
            'list|10': [
                {
                    title: '@cword(6,14)', //标题
                    'version|3': /\d{5}/, //版本号
                    adoptTime: Mock.mock('@date'), // 通过时间 --- 采纳时间
                    delReason: '@cword(6,10)', //删除原因
                    delTime: Mock.mock('@date'), //删除时间
                    failReason: '@cword(6,10)', //未通过原因
                    submitTime: Mock.mock('@date'), //提交时间
                    examineTime: Mock.mock('@date') // 审核时间
                }
            ]
        },
        message: 'Success'
    }
    return Mock.mock(template)
}
