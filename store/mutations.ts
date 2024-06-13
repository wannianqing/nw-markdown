import { MutationTypes } from "./constants"
import { setStorage } from '~/utils'
import { type State } from './state'
export const mutations = {
  [MutationTypes.SET_CONTENT](state:State, content:string) {
    state.content = content
    setStorage('__markdown_text',content)
  },
}