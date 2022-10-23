import {ActionTree, ActionContext} from "vuex"

import {RootState} from "@/store"

import {AppState} from "./state"

import {Mutations} from "./mutations"

import {AppMutationsTypes} from "./mutaion-types"

import {AppActionsTypes} from "./action-types"

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AppState, RootState>, "commit">

export interface Actions {
  [AppActionsTypes.ACTION_CHANGE_TEST]({commit}: AugmentedActionContext, test: string): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
  [AppActionsTypes.ACTION_CHANGE_TEST]({commit}, test: string) {
    commit(AppMutationsTypes.CHANGE_TEST, test)
  }
}
