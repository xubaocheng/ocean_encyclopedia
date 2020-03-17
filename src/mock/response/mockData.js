import Mock from 'mockjs'

const Random = Mock.Random
//获取推荐词条
export const recommendedEntry = (options) => {
	const template = {
		code: 200,
		data: {
			'list|6': [
				{
					name: '@ctitle(3,6)',
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取推荐问答
export const recommendedQandA = (option) => {
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
                for( let i = 0; i< pageSize; i++){
                    arr.push(
                        Mock.mock({
                            "content": "@csentence(20,40)"
                        })
                    )
                }
                return arr
            }
        },
		message: "Success"
	}
	return Mock.mock(template)
}
//获取热词
export const hotword = (option) => {
	const template = {
		code: 200,
		data: {
			'list|6': [
				{
					name: '@cword(3, 5)'
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}

//获取热门词条
export const hotEntry = (option) => {
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
                for( let i = 0; i< pageSize; i++){
                    arr.push(
                        Mock.mock({
                            'title': '@ctitle(4,9)',
                            "content": "@csentence(60,140)"
                        })
                    )
                }
                return arr
            }
        },
		message: "Success"
	}
	return Mock.mock(template)
}

//获取热门问答
export const hotQandA = (option) => {
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
                for( let i = 0; i< pageSize; i++){
                    arr.push(
                        Mock.mock({
                            'classify': '@ctitle(4)',
                            'title': '@ctitle(4,9)',
                            'img': Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
                            "content": "@csentence(20,40)",
                            'tag': [
                                '海洋',
                                '鲨鱼'
                            ]
                        })
                    )
                }
                return arr
            }
        },
		message: "Success"
	}
	return Mock.mock(template)
}
//获取资讯推荐
export const informationList = (option) => {
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
                for( let i = 0; i< pageSize; i++){
                    arr.push(
                        Mock.mock({
                            'title': '@ctitle(4,9)',
                            'img': Random.image('180x115', '#50B347', '#FFF', 'Mock.js'),
                            "content": "@csentence(140,200)",
                            'author': '@cname',
                            'time': '1小时前'
                        })
                    )
                }
                return arr
            }
        },
		message: "Success"
	}
	return Mock.mock(template)
}

//友情链接
export const linkList = (option) => {
	const template = {
		code: 200,
		data: {
			'list|35': [
				{
					name: '@cword(3, 6)'
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}

//跑马灯轮播图
export const lempList = (option) => {
	const template = {
		code: 200,
		data: {
			'list': [
				{
					'img': Random.image('250x297', Random.color(), Random.color(), '1'),
                },
                {
					'img': Random.image('250x297', Random.color(), Random.color(), '2'),
                },
                {
					'img': Random.image('250x297', Random.color(), Random.color(), '3'),
                },
                {
					'img': Random.image('250x297', Random.color(), Random.color(), '4'),
                },
                {
					'img': Random.image('250x297', Random.color(), Random.color(), '5'),
                },
                {
					'img': Random.image('250x297', Random.color(), Random.color(), '6'),
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}

//获取侧边分类
export const classifyList = (option) => {
	const template = {
		code: 200,
		data: {
			'list|5':[
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
		message: "Success"
	}
	return Mock.mock(template)
}

//获取热门词条分类
export const hotEntryClassify = (option) => {
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
		message: "Success"
	}
	return Mock.mock(template)
}

//获取热们词条前十
export const hotEntryClassifyRank = (option) => {
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
                for( let i = 0; i< pageSize; i++){
                    arr.push(
                        Mock.mock({
                            'title': '@ctitle(4,9)',
                            "content": "@csentence(60,140)",
                            img:Random.image('200x100', '#FF6600'),
                            headSculpture: Random.image('20x10', '#6fc'),
                            author: Mock.mock('@cname'),
                            date: Random.date('yyyy-MM-dd')
                        })
                    )
                }
                return arr
            }
        },
        message: "Success"
    }
	return Mock.mock(template)
}



//获取首页视频模块
export const getVideoInfo = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 6,
			total: 4444,
			totalRecords: 66666,
			'list|6': [
				{
					video_img:Random.dataImage('190x160', 'Bates'),
					video_time: '@time("hh:mm")',
					video_title:'@ctitle(4,9)',
					'video_id|+1':1,
					"video_key_word|1-10": [
						'@ctitle(2, 5)'
					],
					video_number: '@integer(60, 500)'+'万次播放'
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}

//获取农技交流复选框年份
export const getYearInfo = (option) => {
	const template = {
		code: 200,
		data: {
			'list|10': [
				{
					label: '@date("yyyy")',
					'value|+1': 1
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取农技交流复选框子级分类
export const getChirdCropInfo = (option) => {
	const template = {
		code: 200,
		data: {
			'list|20': [
				{
					label: '@cword(2, 10)',
					'value|+1': 1
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取农技交流论文书刊lsit
export const getPaperList = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 20,
			total: 4444,
			totalRecords: 66666,
			'list|15': [
				{
					paper_title:'@ctitle(20,90)',
					paper_name: '《@ctitle(3,8)》',
					paper_author:'@cname',
					paper_periodical:'@date("yyyy")'+'年第'+'@natural(1, 99)'+'期',
					'paper_id|+1':1,
					'paper_number|1000-5000':888
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取农技交流图书lsit
export const getBookList = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 6,
			total: 4444,
			totalRecords: 66666,
			'list|6': [
				{
					book_cover_img:Random.dataImage('170x200','bookCover'),
					book_cover_name: '@ctitle(3,8)',
					book_cover_author:'@cname',
					book_cover_briefly:'@ctitle(60,90)',
					book_periodical:'@date("yyyy")'+'年出版',
					'book_id|+1':1,
					'book_number|1000-10000':999
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取农技交流视频lsit
export const getVideoList = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 6,
			total: 4444,
			totalRecords: 66666,
			'list|9': [
				{
					video_img:Random.dataImage('190x160', 'Bates'),
					video_time: '@time("hh:mm")',
					video_title:'@ctitle(4,9)',
					'video_id|+1':1,
					"video_key_word|1-10": [
						'@ctitle(2, 5)'
					],
					video_number: '@integer(60, 500)'+'万次播放'
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取农技「图书、期刊论文、视频」复选框全部作物分类
export const getAllCheckInfo = (option) => {
	const template = {
		code: 200,
		data: {
			'list|10': [
				{
					label: '@cword(2, 5)',
					'value|+1': 1,
					checkAll: false,
					checkAllName:'@cword(2, 5)',
					'childList|1-20': [
						{
							label: '@cword(2, 5)',
							'value|+1': 1,
						}
					],
					childValList:[]
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取tree目录
export const getAllTreeInfo = (option) => {
	const template = {
		code: 200,
		data: {
			list:[
				{
					id: 1,
					title: "|第一篇 专文",
					src: "pt01.html",
					expand: true,
					isPurchase: false,
					children: [
						{
							id: 1,
							title: "税收现代化建设深入推进实现 “十三五” 良好开局",
							src: "ar10.html",
							expand: false,
							isPurchase: true,
							children: [
								{
									id: 1,
									title: "一、圆满完成预算确定的税收收入任务,圆满完成预算确定的税收收入任务",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: true,
									children: [
										{
											id: 1,
											title: "(1)税收现代化建设深入推进实现 “十三五” 良好开局",
											src: "当前章的跳转路径",
											expand: false,
											isPurchase: true,
											children: []
										},
										{
											id: 2,
											title: "(2)税收现代化建设深入推进实现 “十三五” 良好开局",
											src: "当前章的跳转路径",
											expand: false,
											isPurchase: true,
											children: []
										},
										{
											id: 3,
											title: "(3)税收现代化建设深入推进实现 “十三五” 良好开局",
											src: "当前章的跳转路径",
											expand: false,
											isPurchase: true,
											children: []
										},
										{
											id: 4,
											title: "(4)税收现代化建设深入推进实现 “十三五” 良好开局",
											src: "当前章的跳转路径",
											expand: false,
											isPurchase: true,
											children: []
										}
									]
								},
								{
									id: 2,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 3,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								}
							]
						},
						{
							id: 2,
							title: "税收现代化建设深入推进实现 “十三五” 良好开局",
							src: "当前章的跳转路径",
							expand: false,
							isPurchase: false,
							children: [
								{
									id: 1,
									title: "一、圆满完成预算确定的税收收入任务,圆满完成预算确定的税收收入任务",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 2,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 3,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								}
							]
						}
					]
				},
				{
					id: 2,
					title: "|第一篇 专文",
					src: "篇的跳转路径",
					expand: true,
					isPurchase: false,
					children: [
						{
							id: 1,
							title: "税收现代化建设深入推进实现 “十三五” 良好开局",
							src: "当前章的跳转路径",
							expand: false,
							isPurchase: false,
							children: [
								{
									id: 1,
									title: "一、圆满完成预算确定的税收收入任务,圆满完成预算确定的税收收入任务",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 2,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 3,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								}
							]
						},
						{
							id: 2,
							title: "税收现代化建设深入推进实现 “十三五” 良好开局",
							src: "当前章的跳转路径",
							expand: false,
							isPurchase: false,
							children: [
								{
									id: 1,
									title: "一、圆满完成预算确定的税收收入任务,圆满完成预算确定的税收收入任务",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 2,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								},
								{
									id: 3,
									title: "二、从更高层次更高水平推进依法治税",
									src: "当前节的跳转路径",
									expand: false,
									isPurchase: false,
									children: []
								}
							]
						}
					]
				}
			],
			// 'list': [
			// 	{
			// 		'id|+1': 0,
			// 		title: '@cword(2, 5)',
			// 		src: "当前节的跳转路径",
			// 		'isPurchase|1-2': true,
			// 		expand: false,
			// 		'children|1-5': [
			// 			{
			// 				'id|+1': 0,
			// 				title: '@cword(2, 5)',
			// 				src: "当前节的跳转路径",
			// 				'isPurchase|1-2': true,
			// 				expand: false,
			// 				'children|1-2': [
			// 					{
			// 						'id|+1': 0,
			// 						title: '@cword(2, 5)',
			// 						src: "当前节的跳转路径",
			// 						'isPurchase|1-2': true,
			// 						expand: false,
			// 						children:[]
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// ]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取推荐图书列表
export const getRecBookList = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 5,
			total: 4444,
			totalRecords: 66666,
			'list|5': [
				{
					book_cover_img:Random.dataImage('50x60','recBookCover'),
					book_cover_name: '@ctitle(3,8)',
					book_cover_author:'@cname',
					"book_key_word|1-3": [
						'@ctitle(2, 5)'
					],
					'book_id|+1':1,
					'book_number|1000-10000':999
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取推荐重大科技进展列表
export const getRecTechnology = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 5,
			total: 4444,
			totalRecords: 66666,
			'list|8': [
				{
					paper_title:'@ctitle(20,90)',
					paper_name: '《@ctitle(3,8)》',
					paper_author:'@cname',
					paper_periodical:'@date("yyyy")'+'年第'+'@natural(1, 99)'+'期',
					'paper_id|+1':1,
					'paper_number|1000-5000':888
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取推荐专家课堂视频
export const getRecVideoList = (option) => {
	const template = {
		code: 200,
		data: {
			pageIndex: 1,
			pageSize: 6,
			total: 4444,
			totalRecords: 66666,
			'list|5': [
				{
					video_img:Random.dataImage('190x160', 'Bates'),
					video_time: '@time("hh:mm")',
					video_title:'@ctitle(4,9)',
					'video_id|+1':1,
					"video_key_word|1-10": [
						'@ctitle(2, 5)'
					],
					video_number: '@integer(60, 500)'+'万次播放'
				}
			]
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取图书详情介绍
export const getBookDetail = (option) => {
	// console.log(option)
	const template = {
		code: 200,
		data: {
			bookDetail: {
				book_cover_img:Random.dataImage('170x200','bookCover'),
				book_cover_name: '@ctitle(3,8)',
				book_cover_author:'@cname',
				book_publishers:'@ctitle(3,8)',
				book_pubdate:'@date("yyyy-mm")',
				book_isbn:'354-1-4562-9856-2',
				"book_key_word|1-3": [
					'@ctitle(2, 5)'
				],
				book_original_price:'99.9',
				book_present_price:'66.5',
				book_cover_briefly:'@ctitle(60,90)',
				'book_id|+1':1,
				'book_trialreading|100-800':99,
				'book_collection|100-800':99,
				'book_download|100-800':99,
			}
		},
		message: "Success"
	}
	return Mock.mock(template)
}
//获取视频信息
export const videoMessage = (option) => {
	// console.log(option)
	const template = {
		code: 200,
		data: {
			videoMessage: {
				'video_id|+1':1,
				video_src:'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ',
				video_date:Random.date('yyyy') + '年' + Random.date('MM') + '月' + Random.date('dd') + '日',
				'video_share|10-999':18,
				video_number: '@integer(60, 500)',
				video_title:'@ctitle(4,9)',
				video_original_price:'199.9',
				video_present_price:'166.5',
				"video_key_word|1-10": [
					'@ctitle(2, 5)'
				],
			}
		},
		message: "Success"
	}
	return Mock.mock(template)
}

