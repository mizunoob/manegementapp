import React, { useContext } from 'react'
import { ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext'
import { AuthContext } from '../contexts/AuthService'
import { timeCurrentIso8601 } from '../utils'
import { db } from "../firebase"

export const Task = ({ task }) => {
  const { dispatch } = useContext(AppContext)
  const user = useContext(AuthContext)

  const onClickComplete = e => {
    const id = task.id
    const Progress = task.progress
    // eslint-disable-next-line
    switch (Progress) {
      case '未完了':
        const incompleteResult = window.confirm('このタスクは未完了のタスクです。完了に変更しますか？')
        if (incompleteResult) {
          const compRef = db.collection("taskdata").doc(id)
          const Comp = {progress: '完了'}
          compRef.update(Comp)
          dispatch({
            type: ADD_OPERATION_LOG,
            description: `${user.displayName}さんが${task.title}の進捗を完了に変更しました。`,
            operatedAt: `${timeCurrentIso8601()}`
          })
        }
        break
      case '完了':
        const completeResult = window.confirm('このタスクは完了したタスクです。未完了に変更しますか？')
        if (completeResult) {
          const compRef = db.collection("taskdata").doc(id)
          const Incomp = {progress: '未完了'}
          compRef.update(Incomp)
          dispatch({
            type: ADD_OPERATION_LOG,
            description: `${user.displayName}さんが${task.title}の進捗を未完了に変更しました。`,
            operatedAt: `${timeCurrentIso8601()}`
          })
        }
        break
    }
  }

  const deleteTask = () => {
    const id = task.id
    const deleteResult = window.confirm('このタスクを削除しますか？') 
    if (deleteResult) {
      db.collection("taskdata").doc(id).delete().then(() => {
        alert(`${task.title}を削除しました！`)
        console.log(task)
        dispatch({
          type: ADD_OPERATION_LOG,
          description: `${user.displayName}さんが${task.title}を削除しました。`,
          operatedAt: `${timeCurrentIso8601()}`
        })
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
        <i class="fas fa-folder-minus" alt="削除"></i>
      </span>
    </div>
    <div className="list-small">
      <small alt="業務No.">作成者：{task.name}</small>
      <small className="on-click" onClick={onClickComplete}>{task.progress}</small>
    </div>
  </li>
  )
}