import {RouteRecordRaw} from "vue-router"
import Layout from "@/layout/index.vue"
const router: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    component: Layout,
    redirect: "/dashboard/index",
    meta: {
      title: "dashboard",
      icon: "xxx"
    },
    children: [
      {
        path: "index",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue")
      }
    ]
  }
]

export default router
