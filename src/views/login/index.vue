<template>
  <div>
    login
    <p>{{ testRef?.test }}</p>
    <p>{{ testRef?.data }}</p>
  </div>
</template>
<script lang="ts" setup>
import {ref, reactive, toRefs, onMounted} from "vue"
import {getTest} from "@/api/test"
import {Test} from "@/api/model/Test"

const testRef = ref<Test | undefined | null>()
onMounted(async () => {
  const test = await getTest({test: "123", data: "data"})
  if (test?.data) {
    testRef.value = test.data
  }
})
// （顶层 await）Top-levelawait必须与悬念结合使用（这是实验性的）， 不然会导致页面渲染空白
// https://cn.vuejs.org/api/sfc-script-setup.html#top-level-await
// const test = await getTest({test: "123", data: "data"})
// if (test?.data) {
//   testRef.value = test.data
// }
// console.log(testRef.test)
</script>
<style lang="scss" scoped></style>
