import {RouteRecordRaw} from "vue-router"

const whiteList: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  }
  // {
  //   path: 'error',
  //   name: '404',
  //   component
  // }
]

export const whiteListString: Array<string> = ["/login", "/error"]

export default whiteList
