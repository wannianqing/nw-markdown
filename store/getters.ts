import { type State } from './state'
import { getStorage } from '~/utils'
export const getters = {
  getContent(state:State){
    if(state.content){
      return state.content
    }else{
      return getStorage('__markdown_text')
    }
  }
}