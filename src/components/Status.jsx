import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { AuthContext } from '../contexts/AuthService'

const Status = () => {
  const { state } = useContext(AppContext)
  const user = useContext(AuthContext)
  const complete = state.tasks.filter(task => task.progress === "完了")
  const incomplete = state.tasks.filter(task => task.progress === "未完了")
  return (
    <div>
      <h2>現在のステータス</h2>
      <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">

          <h3 className="mb-1">ログイン中のユーザー：{user.displayName}</h3>
          <h3 className="mb-1">登録中のタスク数：{state.tasks.length}</h3>
          <h3 className="mb-1">未完了のタスク数：{[...incomplete].length}</h3>
          <h3 className="mb-1">完了したタスク数：{[...complete].length}</h3>

      </li>
    </div>
  )
}

export default Status
