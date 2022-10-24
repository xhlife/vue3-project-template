import HttpClient, {HttpClientConfig} from "axios-mapper"
import netConfig, {Headers} from "@/config/request/net.config"
const request = (header?: Headers) => {
  const config: HttpClientConfig = {
    baseURL: netConfig.host,
    headers: netConfig.header
  }
  // 获取token
  config.headers.token = /*localStorage.getItem("token") ||*/ "123"
  // 合并自定义的header
  Object.assign(config.headers, header)
  return new HttpClient(config)
}
export default request
