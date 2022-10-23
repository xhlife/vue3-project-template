import {MutationTree} from "vuex"

import {AppState} from "./state"

import {AppMutationsTypes} from "./mutaion-types"

export type Mutations<S = AppState> = {
  [AppMutationsTypes.CHANGE_TEST](state: S, test: string): void
}

export const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationsTypes.CHANGE_TEST](state: AppState, test: string) {
    state.test = test
  }
}
