import React from 'react'
import { Task } from './Task'

export const AllTasks = ({ state, dispatch, task }) => {
  const onClickComplete = index => {
    const id = task.id
    const newState = [...state]
    const newProgress = newState[index].progress
    // eslint-disable-next-line
    switch (newProgress) {
      case '未完了':
        const incompleteResult = window.confirm('このタスクは未完了のタスクです。完了に変更しますか？')
        if (incompleteResult) dispatch({ progress: '完了', id })
        // {
        //   newTasks[index].progress = '完了'
        //   setTasks(newTasks)
        // }
        break
      case '完了':
        const completeResult = window.confirm('このタスクは完了したタスクです。未完了に変更しますか？')
        if (completeResult) dispatch({ progress: '未完了', id })
        // {
        //   newTasks[index].progress = '未完了'
        //   setTasks(newTasks)
        // }
        break
    }
  }

  return (
    <ul>
      {state.map((task, index) => {
        return (
          <Task onClick={() => onClickComplete(index)} key={index} task={task}/>
        )
      })}
    </ul>
  )
}