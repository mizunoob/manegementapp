import React from 'react'
import { Task } from './Task'

export const AllTasks = ({ state, dispatch }) => {
  return (
    <ul>
      {state.map((task, index) => {
        return (
          <Task key={index} task={task} state={state} dispatch={dispatch}/>
        )
      })}
    </ul>
  )
}