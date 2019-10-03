import {
    Dashboard,
    ArticleEdit,
    ArticleList,
    Login,
    NotFound,
    Settings
} from '../views'

export const mainRouter = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound 
    },
]
export const adminRouter = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        title: '仪表盘',
        isNav: true,
        icon: 'pie-chart'
    },
    {
        pathname: '/admin/article',
        component: ArticleList,
        exact: true,
        title: '文章管理',
        isNav: true,
        icon: 'step-forward',
        children: [
            {
                pathname: '/admin/article',
                component: ArticleList,
                exact: true,
                title: '文章list',
                isNav: true,
                icon: 'pie-chart'
            },
            {
                pathname: '/admin/article/edit/:id',
                component: ArticleEdit,
                title: '文章编辑',
                isNav: true,
                icon: 'pie-chart'
            },
        ]
    },
    {
        pathname: '/admin/settings',
        component: Settings,
        title: '设置',
        isNav: true,
        icon: 'step-forward'
    }
]