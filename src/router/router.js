import Home from '../views/home/Home.vue'
export default [
    {
        path: '/Login',
        name: 'Login',
        mate: {
            title: '登录页'
        },
        component: resolve => {
            require(['@/views/login/Login.vue'], resolve)
        }
    },
    {
        path: '/Register',
        name: 'Register',
        mate: {
            title: '注册页'
        },
        component: resolve => {
            require(['@/views/register/Register.vue'], resolve)
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/HomePage',
        children: [
            {
                path: '/HomePage',
                meta: { title: '首页' },
                name: 'HomePage',
                component: resolve => {
                    require(['@/views/container/Container.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/Encycloped',
        component: Home,
        children: [
            {
                path: '/Encycloped',
                name: 'Encycloped',
                meta: { title: '海洋百科' },
                component: resolve => {
                    require(['@/views/encycloped/Encycloped.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/OceanQandA',
        component: Home,
        children: [
            {
                path: '/OceanQandA',
                name: 'OceanQandA',
                meta: { title: '海洋问答' },
                component: resolve => {
                    require(['@/views/oceanQandA/OceanQandA.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/Personal',
        component: Home,
        children: [
            {
                path: '/Personal',
                name: 'Personal',
                meta: { title: '海洋问答' },
                component: resolve => {
                    require(['@/views/personal/Personal.vue'], resolve)
                }
            }
        ]
    }
]
