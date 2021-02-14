import React, { useContext } from 'react'
import {
  CHANGE_COMP_TO_INCOMP,
  CHANGE_INCOMP_TO_COMP,
  ADD_OPERATION_LOG,
  DELETE_TASK
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

export const Task = ({ task }) => {

  const { dispatch } = useContext(AppContext)
  const onClickComplete = e => {
    const id = task.id
    const Progress = task.progress
    // eslint-disable-next-line
    switch (Progress) {
      case '未完了':
        const incompleteResult = window.confirm('このタスクは未完了のタスクです。完了に変更しますか？')
        if (incompleteResult) dispatch({ type:CHANGE_INCOMP_TO_COMP, id})
        break
      case '完了':
        const completeResult = window.confirm('このタスクは完了したタスクです。未完了に変更しますか？')
        if (completeResult) dispatch({ type:CHANGE_COMP_TO_INCOMP, id})
        break
    }
  }

  const deleteTask = () => {
    const id = task.id
    const deleteResult = window.confirm('このタスクを削除しますか？') 
    if (deleteResult) {
      dispatch({ type:DELETE_TASK, id })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `タスク"${task.title}"を削除しました。`,
        operatedAt: `${timeCurrentIso8601()}`
      })
    }
  }

  return (
    <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{task.title}</h5>
      <small>{task.lastdate}</small>
    </div>
    <div className="item-body">
      <p className="mb-1">{task.body}</p>
      <span className="delete-icon" onClick={deleteTask}>
        <i class="fas fa-folder-minus"></i>
      </span>
    </div>
    <div className="list-small">
      <small alt="業務No.">作成者：{task.name}</small>
      <small className="on-click" onClick={onClickComplete}>{task.progress}</small>
    </div>
  </li>
  )
}