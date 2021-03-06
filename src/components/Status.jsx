import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { AuthContext } from '../contexts/AuthService'

const Status = ({ taskdata }) => {
  const { state } = useContext(AppContext)
  const user = useContext(AuthContext)
  const completeState = state.tasks.filter(task => task.progress === "完了")
  const completeDB = taskdata.filter(task => task.progress === "完了")
  const incomplete = state.tasks.filter(task => task.progress === "未完了")
  const incompleteDB = taskdata.filter(task => task.progress === "未完了")
  return (
    <div className="status-component">
      <h4>現在のステータス</h4>
      <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <h5 className="mb-1">ログイン中のユーザー：{user.displayName}</h5>
          <h5 className="mb-1">登録中のタスク数：{state.tasks.length + taskdata.length}</h5>
          <h5 className="mb-1">未完了のタスク数：{[...incomplete].length + [...completeDB].length}</h5>
          <h5 className="mb-1">完了したタスク数：{[...completeState].length + [incompleteDB].length}</h5>
      </li>
    </div>
  )
}

export default Status
