import request from "@/utils/request"
import {Method} from "axios-mapper"
import {RootObject} from "./model/Root"
import {Test, TestQuery} from "./model/Test"

export const getTest = (params: TestQuery) => {
  return request().request<RootObject<Test>>("api/test", Method.GET, params)
}
