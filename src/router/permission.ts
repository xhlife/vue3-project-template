/**
 * 路由权限
 * */

import NProgress from "nprogress"

import "nprogress/nprogress.css"

import router from "@/router"

// 标准化路由地址对象
import {RouteLocationNormalized, NavigationGuardNext} from "vue-router"

import {whiteListString} from "./whitelist"
import store from "@/store"

NProgress.configure({showSpinner: false})

router.beforeEach(
  async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    const token = false
    if (token) {
      // debugger
      if (to.path === "/login") {
        next({path: "/"})
        NProgress.done()
      } else {
        // 检查用户权限, RBAC权限模型，权限取决于用户的角色
        // 获取用户角色
        // const roles = store.dispatch(xxx)
        const roles = []
        if (roles.length) {
          try {
            // 动态的更新路由
            // store.dispatch(xxx)
            //
            next({...to, replace: true})
          } catch (error) {
            // 清空 token, 并重定向到 login
            // store.dispatch(xxx)
            console.log(error || "系统出错")
            NProgress.done()
          }
        } else {
          next()
        }
      }
    } else {
      if (whiteListString.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  }
)

router.afterEach((/*to: RouteLocationNormalized*/) => {
  NProgress.done()
})
