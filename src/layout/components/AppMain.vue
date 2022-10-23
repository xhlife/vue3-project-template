<template>
  <section class="app-main">
    <router-view v-slot="{Component}">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="needCacheViews">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>
<script lang="ts" setup>
import {ref, computed} from "vue"
import {useRoute} from "vue-router"
import {useStore} from "@/store"
const store = useStore()

const needCacheViews = []

const route = useRoute()
// 采用path作为key
const key = ref<string>(route.path)
</script>
<style lang="css" scoped>
.app-main {
  height: 100%;
}
</style>
