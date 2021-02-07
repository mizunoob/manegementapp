import {
  CREATE_TASK,
  DELETE_TASK,
  DELETE_ALL_TASKS,
  CHANGE_INCOMP_TO_COMP,
  CHANGE_COMP_TO_INCOMP
} from '../actions'

const tasks = (state = [], action) => {
  const nowDate = ( date = null ) => {
    const now = date instanceof Date ? date : new Date();
    const youbi = ["日","月","火","水","木","金","土"];
    return `${ now.getFullYear() }/${ now.getMonth() + 1 }/${ now.getDate()  }(${ youbi[now.getDay()] })`
}
  switch(action.type) {
    case CREATE_TASK:
      const task = {
        title: action.title,
        name: action.name,
        body: action.body,
        progress: action.progress,
        lastdate: nowDate()
      }
      const length = state.length
      const id =  length === 0 ? 1 : state[length - 1].id + 1 
      return [...state, { id, ...task }]
    case DELETE_TASK:
      return state.filter(event => event.id !== action.id)
    case DELETE_ALL_TASKS:
      return []
    case CHANGE_INCOMP_TO_COMP: // 未完了→完了
      const Comp = {progress: '完了'}
      Object.assign(
        ...state,
        Comp
      )
      return (
        [...state]
      )
    case CHANGE_COMP_TO_INCOMP: // 完了→未完了
      const Incomp = {progress: '未完了'}
      Object.assign(
        ...state,
        Incomp
      )
      return (
        [...state]
      )
    default:
      return state
  }
}

export default tasks