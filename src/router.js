import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './components/Login.vue'
import Layout from './components/Layout.vue'

import Home from './components/Home.vue'
import Map from './components/Map.vue'
import Monitor from './components/Monitor.vue'
import Statistics from './components/Statistics.vue'
import Analysis from './components/Analysis.vue'
import Notice from './components/Notice.vue'
import Profile from './components/Profile.vue'
import Setting from './components/Setting.vue'
import Users from './components/Users.vue'
import Logs from './components/Logs.vue'
import Project from './components/Project.vue'

import PermissionDenied from './components/403.vue'
import ResourceNotFound from './components/404.vue'
import NetworkFailure from './components/500.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login, name: 'login' },
        { 
            path: '/layout', 
            component: Layout, 
            name: 'layout',
            redirect: '/layout/home',
            children: [
                { path: 'home', component: Home, name: '首页' },
                { path: 'monitor', component: Monitor, name: '实时监测' },
                { path: 'statistics', component: Statistics, name: '数据统计' },
                { path: 'notice', component: Notice, name: '报警信息' },
                { path: 'profile', component: Profile, name: '个人中心' },
                { path: 'users', component: Users, name: '用户管理' },
                { path: 'logs', component: Logs, name: '日志管理' },
                { path: 'project', component: Project, name: '项目管理' },
                
                { path: '403', component: PermissionDenied, name: '没有权限' },
                { path: '404', component: ResourceNotFound, name: '没有资源' },
            ]
        },
    ]
})


export default router