import React from 'react'
import { Task } from './Task'

export const CompleteTasks = ({ state, dispatch, task }) => {
  return (
    <ul>
    {state.map((task, index) => {
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