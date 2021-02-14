import React, { useContext, useState } from 'react'
import FormItem from './FormItem'
import AppContext from '../contexts/AppContext'
import {
  CREATE_TASK,
  DELETE_ALL_TASKS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import { timeCurrentIso8601 } from '../utils'

const HamMenuItem = () => {
  const { state, dispatch } = useContext(AppContext)
  const [ isOpen, setIsOpen ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ name, setName ] = useState('')
  const [ body, setBody ] = useState('')
  const [ progress, setProgress ] = useState('選択して下さい')

  const unDeletableTask = state.tasks.length === 0
  const unDeletableLog = state.operationLogs.length === 0
  const unCreatable = !title.trim() || !body.trim() || progress === '選択して下さい' || !name.trim()

  const deleteAllTasks = e => {
    e.preventDefault()
    const result = window.confirm('全てのタスクを削除してもよろしいですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_TASKS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのタスクを削除しました。',
        operetedAt: `${timeCurrentIso8601()}`
      })
    }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('全ての操作ログを削除してもよろしいですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_OPERATION_LOGS })
    }
  }

  const onClickAdd = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_TASK,
      title,
      name,
      body,
      progress
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: `タスク"${title}"を作成しました。`,
      operetedAt: `${timeCurrentIso8601()}`
    })
    setTitle('')
    setName('')
    setBody('')
  }

  return (
<ul class="bottom-menu">

  <li class="menu-width-max">
    <div className="nav-item">
    <button className="btn btn-tag btn-tag--bookmark"><i class="fas fa-folder-plus" onClick={()=>setIsOpen(!isOpen)}></i>タスクを作成</button>
    </div>
    <div style={{display: isOpen ? "flex" : "none"}}>
      <FormItem />
      <button
      className="btn btn-info"
      disabled={unCreatable}
      onClick={onClickAdd}
      >
        作成
      </button>
      <button onClick={() => setIsOpen(false)} className="btn btn-secondary">
              閉じる
      </button>
    </div>
  </li>

  <li class="menu-width-max">
    <div className="nav-item">
      <button className="btn btn-tag deletebtn-tag--bookmark" disabled={unDeletableTask} onClick={deleteAllTasks}><i class="fas fa-folder-minus"></i>全てのタスクを削除</button>
    </div>
  </li>

  <li class="menu-width-max">
    <div className="nav-item">
      <button className="btn btn-tag deletebtn-tag--bookmark" disabled={unDeletableLog} onClick={deleteAllOperationLogs}><i class="fas fa-ban"></i>全てのログを削除</button>
    </div>
  </li>

  <li class="menu-width-max">
    <div className="nav-item">
      <i class="fas fa-folder-plus"></i><span class="mini-text">サインアップ</span>
    </div>
  </li>

</ul>
  )
}

export default HamMenuItem