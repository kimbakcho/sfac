import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeIntroView from "../views/Home/HomeIntroView.vue"
import LoginView from "../views/User/LoginView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: "",
                    name: "homeIntroView",
                    component: HomeIntroView
                },
                {
                    path: "community",
                    name: "CommunityHomeView",
                    component: () => import('../views/Home/Community/CommunityHomeView.vue'),
                    children: [{
                        path: "",
                        name: "CommunityMainHomeView",
                        component: () => import("../views/Home/Community/CommunityMainHomeView.vue")
                    }, {
                        path: "write",
                        name: "CommunityPostWriteView",
                        component: () => import("../views/Home/Community/CommunityPostWriteView.vue")
                    }, {
                        path: "modify/:id",
                        name: "CommunityPostModifyView",
                        component: () => import("../views/Home/Community/CommunityPostModifyView.vue"),
                        props: true
                    }, {
                        path: "post/:id",
                        name: "CommunityPost",
                        component: () => import("../views/Home/Community/CommunityPostView.vue"),
                        props: true
                    }]
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: () => import('../views/User/LoginView.vue')
        },
        {
            path: "/signup",
            name: "SignUpView",
            component: () => import('../views/User/SignUpView.vue')
        },
        {
            path: "/snsLogin",
            name: "snsLogin",
            component: () => import('../views/User/SnsLoginView.vue'),
            props: (route) => ({
                state: route.query.state,
                code: route.query.code,
            })
        },
        {
            path: "/userInfo",
            name: "userInfo",
            component: () => import("../views/User/UserInfoView.vue")
        },
        {
            path: "/PWFindAndChangeView",
            name: "PWFindAndChangeView",
            props: route => ({
                token: route.query.token
            }),
            component: () => import("../views/User/PWFindAndChangeView.vue")
        },
        {
            path: "/PWChange",
            name: "PWChangeView",
            component: () => import("@/views/User/PWChangeView.vue")
        },
        {
            path: "/PwFind",
            name: "PwFindView",
            component: () => import("@/views/User/FindPwView.vue")
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
