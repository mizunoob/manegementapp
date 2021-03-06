import {
  CREATE_TASK,
  DELETE_ALL_TASKS
} from '../actions'
import { db } from "../firebase"

const tasks = (state = [], action) => {
  const nowDate = ( date = null ) => {
    const now = date instanceof Date ? date : new Date();
    const youbi = ["日","月","火","水","木","金","土"];
    return `${ now.getFullYear() }/${ now.getMonth() + 1 }/${ now.getDate() }(${ youbi[now.getDay()] })`
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
      db.collection('taskdata').add(task)
    case DELETE_ALL_TASKS:
      return []
    default:
      return state
  }
}

export default tasks