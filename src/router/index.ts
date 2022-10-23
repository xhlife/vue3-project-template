import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"

import Layout from "@/layout/index.vue"

const constantFiles = import.meta.globEager("./whitelist/*.ts")
console.log(constantFiles)

const constantModules: Array<RouteRecordRaw> = []
for (const i in constantFiles) {
  constantModules.push(constantFiles[i].default[0])
}
const permissionFiles = import.meta.globEager("./permissionModules/*.ts")
export const permissionRoutes: Array<RouteRecordRaw> = Object.keys(permissionFiles).map(
  item => permissionFiles[item].default[0]
)

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "#icondashboard",
          affix: true
        }
      }
    ]
  },
  ...constantModules
]
console.log(constantRoutes)
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  /**
   *  router.matcher 对外提供两个方法match(负责route匹配), addRoutes（动态添加路由）。
   * 
    具体原因：在做路径切换transitionTo方法中，
    首先就会使用const route = this.router.match(location, this.current)来匹配route, 
    其实内部会使用matcher来做匹配。修改了matcher即新的routes生效。
    对router.matcher属性做修改，即新的routes就会替换老的routes, 
    其实就是replaceRoutes()的含义（但是官方没有提供这个API）
   */
  const newRouter = router
  ;(router as any).matcher = (newRouter as any).mather
}

export default router
