import Home from '../views/home/Home.vue'
export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/homePage',
        children: [
            {
				path: '/homePage',
				meta:{ title: '首页'},
				name: 'homePage',
				component: resolve => { require(['@/views/container/Container.vue'], resolve); }
			},
        ]
    },
    {
		path: '/encycloped',
		component: Home,
		children: [
			{
				path: '/encycloped',
				name: 'encycloped',
				meta:{ title: '海洋百科'},
				component: resolve => { require(['@/views/encycloped/Encycloped.vue'], resolve); }
			},
		]
    },
    {
		path: '/OceanQandA',
		component: Home,
		children: [
			{
				path: '/OceanQandA',
				name: 'OceanQandA',
				meta:{ title: '海洋问答'},
				component: resolve => { require(['@/views/oceanQandA/OceanQandA.vue'], resolve); }
			},
		]
    },
]
