import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
  CHANGE_INCOMP_TO_COMP,
  CHANGE_COMP_TO_INCOMP
} from '../actions'

// CREATE~DELETE_ALLは問題なし
const events = (state = [], action) => {
  switch(action.type) {
    case CREATE_EVENT:
      const event = {
        title: action.title,
        num: action.num,
        body: action.body,
        progress: action.progress
      }
      const length = state.length
      const id =  length === 0 ? 1 : state[length - 1].id + 1 
      return [...state, { id, ...event }]
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id)
    case DELETE_ALL_EVENTS:
      return []
    case CHANGE_INCOMP_TO_COMP: // 未完了→完了
      const Comp = {progress: '完了'}
      Object.assign(
        ...state,
        Comp
      )
      return (
        // console.log(state[incompEventID]) によってオブジェクトの取得は確認済み
        [...state]
      )
    case CHANGE_COMP_TO_INCOMP: // 完了→未完了
      const Incomp = {progress: '未完了'}
      Object.assign(
        ...state,
        Incomp
      )
      return (
        // console.log(state[compEventID])
        [...state]
      )
    default:
      return state
  }
}

export default events