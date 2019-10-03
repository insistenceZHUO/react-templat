import Loadable  from 'react-loadable'

// import Dashboard from './Dashboard/Dachboard'
// import ArticleEdit from './Article/Edit'
// import ArticleList from './Article/List'
// import Login  from './Login/Login'
// import NotFound from './NotFound/NotFound'
// import Settings from './Settings/Settings'
// 路由懒加载
/* 
先引入Loadable这个插件库

*/
import { Loading } from './../components/index'

const Dashboard = Loadable({
    loader: () => import('./Dashboard/Dachboard'),
    loading: Loading
})
const ArticleEdit = Loadable({
    loader: () => import('./Article/Edit'),
    loading: Loading
})
const ArticleList = Loadable({
    loader: () => import('./Article/List'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('./Login/Login'),
    loading: Loading
})
const NotFound = Loadable({
    loader: () => import('./NotFound/NotFound'),
    loading: Loading
})
const Settings = Loadable({
    loader: () => import('./Settings/Settings'),
    loading: Loading
})

export {
    Dashboard,
    ArticleEdit,
    ArticleList,
    Login,
    NotFound,
    Settings
} 