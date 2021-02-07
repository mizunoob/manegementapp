import React, { useContext, useState } from 'react'
import { Rnd } from "react-rnd";
import {
  CREATE_TASK,
  DELETE_ALL_TASKS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

export const Form = () => {
  const { state, dispatch } = useContext(AppContext)
  const [ title, setTitle ] = useState('')
  const [ name, setName ] = useState('')
  const [ body, setBody ] = useState('')
  const [ progress, setProgress ] = useState('選択して下さい')

  const [isOpen, setIsOpen] = useState(false);

  const unCreatable = !title.trim() || !body.trim() || progress === '選択して下さい' || !name.trim()
  const unDeletableTask = state.tasks.length === 0
  const unDeletableLog = state.operationLogs.length === 0

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

  return (
  <div className="App">
      <header className="App-header">
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>タスクを作成する</button>
        {isOpen ? (
          <Rnd
            className="RndStyle"
            default={{
              x: 300,
              y: 50,
              width: 800,
              minHeight: 300
            }}
          >
    <form>
      <div className="form-window">
        <div className="form-group">
          <label htmlFor="formEventTitle">タスク名</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventName">作成者</label>
          <input className="form-control" id="formEventName" value={name} onChange={e => setName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">タスク内容</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="formEventPnrogress">進捗</label>
          <select className="form-control form-control-sm" id="formEventProgress" value={progress} onChange={e => setProgress(e.target.value)}>
            <option>選択して下さい</option>
            <option>未完了</option>
            <option>完了</option>
          </select>
        </div>
      </div>
    </form>
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
    </Rnd>
    ) : (
      <></>
    )}
    <button className="btn btn-danger" disabled={unDeletableTask} onClick={deleteAllTasks}>全てのタスクを削除する</button>
    <button className="btn btn-danger" disabled={unDeletableLog} onClick={deleteAllOperationLogs}>全ての操作ログを削除する</button>
  </header>
</div>
  )
}