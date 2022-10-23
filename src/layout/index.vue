<template>
  <div class="app-wrapper">
    <!-- 简单分为头部，内容， -->
    <!-- 内容分为左侧导航navBar，中间 AppMain 右侧，可能有也可能没有 -->
    <AppHead></AppHead>
    <div class="main-container">
      <SideBar></SideBar>
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, reactive, toRefs} from "vue"
import {AppHead, AppMain, SideBar} from "./components/export"
// import {useStore} from "@/store"
// import {AppMutationsTypes} from "@/store/modules/app/mutaion-types"
// const store = useStore()

// function change() {
//   store.commit(AppMutationsTypes.CHANGE_TEST, "hhh")
// }
</script>
<style lang="css" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
.main-container {
  display: flex;
  /* 减去头部60px, 这个高度可以通过全局css变量存起来 */
  height: calc(100% - 60px);
}
</style>
