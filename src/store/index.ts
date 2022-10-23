import {createStore, createLogger} from "vuex"
import {store as app, AppStore, AppState} from "./modules/app/index"
export interface RootState {
  app: AppState
}

// 日志
const debug = process.env.NODE_ENV !== "production"
const plugins = debug ? [createLogger({})] : []
export const store = createStore({
  plugins,
  modules: {
    app
  }
})

// 多个就&
export type Store = AppStore<Pick<RootState, "app">> /*&UserStore<Pick<RootState,'user'>>*/

export function useStore(): Store {
  return store as Store
}
