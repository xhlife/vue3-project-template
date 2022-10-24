const Koa = require("koa")

const Router = require("koa-router")

const app = new Koa()

const router = new Router()

router.get("/", (ctx, next) => {
  ctx.body = "Hello koa"
})

router.get("/api/test", (ctx, next) => {
  let url = ctx.url

  //从request中获取GET请求

  let request = ctx.request

  let req_query = request.query

  let req_querystring = request.querystring

  //从上下文中直接获取

  let ctx_query = ctx.query

  let ctx_querystring = ctx.querystring

  ctx.body = {
    code: 200,
    msg: "请求成功",
    data: ctx_query
  }
})

app.use(router.routes()) //作用：启动路由

app.use(router.allowedMethods()) //作用： 当请求出错时的处理逻辑

app.listen(4000, () => {
  console.log("starting at port 4000")
})
