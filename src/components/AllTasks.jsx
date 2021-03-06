import React, {useContext} from 'react'
import { Task } from './Task'
import AppContext from '../contexts/AppContext'

export const AllTasks = ({ taskdata }) => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <ul>
      {Array.isArray(taskdata) && taskdata.map((task, index) => {
        return (
          <Task key={index} task={task} />
        )
      })}
      {Array.isArray(state.tasks) && state.tasks.map((task, index) => {
        return (
          <Task key={index} task={task} />
        )
      })}
    </ul>
  )
}