import {ContentType} from "@/enum/contentType"
export interface Headers {
  token: string
  contentType: string
  [k: string]: any
}

const _header: Headers = {
  token: "",
  contentType: ContentType.JSON
}

export interface NetConfig {
  baseURL?: string
  timeout?: number
  loading: false
  header?: Headers
}
const netConfig: NetConfig = {
  // 环境变量
  baseURL: import.meta.env.VITE_BASE_API as string,
  timeout: 10000,
  loading: false,
  header: _header
}
// debugger
export default netConfig
