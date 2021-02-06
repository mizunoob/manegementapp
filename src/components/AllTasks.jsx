import React, {useContext} from 'react'
import { Task } from './Task'
import AppContext from '../contexts/AppContext'

export const AllTasks = () => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <ul>
      {Array.isArray(state) && state.map((task, index) => {
        return (
          <Task key={index} task={task} state={state} dispatch={dispatch}/>
        )
      })}
    </ul>
  )
}