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
    },
    {
        path: '/EditUserInfo',
        component: Home,
        children: [
            {
                path: '/EditUserInfo',
                name: 'EditUserInfo',
                meta: { title: '个人信息编辑' },
                component: resolve => {
                    require(['@/views/editUserInfo/EditUserInfo.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/Test',
        component: Home,
        children: [
            {
                path: '/Test',
                name: 'Test',
                meta: { title: 'Test' },
                component: resolve => {
                    require(['@/views/test/Test.vue'], resolve)
                }
            }
        ]
    }
]
