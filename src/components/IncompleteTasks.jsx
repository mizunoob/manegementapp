import React, {useContext} from 'react'
import { Task } from './Task'
import AppContext from '../contexts/AppContext'

export const IncompleteTasks = ({ taskdata }) => {
  const { state } = useContext(AppContext)
  return (
    <ul>
    {Array.isArray(taskdata) && taskdata.map((task, index) => {
      if (task.progress === '未完了') {
        return (
          <Task key={index} task={task} />
        )
        // eslint-disable-next-line
      } else return
    })}
    {Array.isArray(state.tasks) && state.tasks.map((task, index) => {
      if (task.progress === '未完了') {
        return (
          <Task key={index} task={task} />
        )
        // eslint-disable-next-line
      } else return
    })}
  </ul>
  )
}