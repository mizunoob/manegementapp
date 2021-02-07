import React, {useContext} from 'react'
import { Task } from './Task'
import AppContext from '../contexts/AppContext'

export const CompleteTasks = () => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <ul>
    {Array.isArray(state.tasks) && state.tasks.map((task, index) => {
      if (task.progress === '完了') {
        return (
          <Task key={index} task={task} state={state} dispatch={dispatch}/>
        )
        // eslint-disable-next-line
      } else return
    })}
  </ul>
  )
}