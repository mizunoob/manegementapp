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
import FormItem from './FormItem'
import { AuthContext } from '../contexts/AuthService'

import firebase from '../firebase'

export const Form = () => {
  const { state, dispatch } = useContext(AppContext)
  const user = useContext(AuthContext)

  const [ title, setTitle ] = useState('')
  const [ name, setName ] = useState('')
  const [ body, setBody ] = useState('')
  const [ progress, setProgress ] = useState('選択して下さい')

  const [isOpen, setIsOpen] = useState(false);
  const [spOpen, setSpOpen] = useState(false);

  const unCreatable = !title.trim() || !body.trim() || progress === '選択して下さい'
  const unDeletableTask = state.tasks.length === 0
  const unDeletableLog = state.operationLogs.length === 0

  const onChangeTitle = text => setTitle(text)
  const onChangeName = text => setName(text)
  const onChangeBody = text => setBody(text)
  const onChangeProgress = text => setProgress(text)
  
  const onClickAdd = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_TASK,
      title,
      name: user.displayName,
      body,
      progress
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: `${user.displayName}さんがタスク"${title}"を作成しました。`,
      operatedAt: `${timeCurrentIso8601()}`
    })
    setTitle('')
    setBody('')
  }

  const deleteAllTasks = e => {
    e.preventDefault()
    const result = window.confirm('全てのタスクを削除してもよろしいですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_TASKS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `${user.displayName}さんが全てのタスクを削除しました。`,
        operatedAt: `${timeCurrentIso8601()}`
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
  <>
    <div className="App">
      <button className="btn btn-tag btn-tag--bookmark" onClick={() => setIsOpen(true)}><i class="fas fa-folder-plus"></i>タスクを作成</button>
      {isOpen ? (
      <Rnd
        className="RndStyle"
        default={{
          x: -500,
          y: 100,
          width: 800,
          minHeight: 300
        }}
      >
        <FormItem
          title={title}
          name={user.displayName}
          body={body}
          progress={progress}
          onChangeTitle={e => onChangeTitle(e)}
          onChangeName={e => onChangeName(e)}
          onChangeBody={e => onChangeBody(e)}
          onChangeProgress={e => onChangeProgress(e)}
        />
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
        <button className="btn btn-tag spbtn-tag--bookmark" onClick={() => setSpOpen(!spOpen)}><i class="fas fa-folder-plus"></i>タスクを作成</button>
        <div className="sp-form" style ={{display: spOpen ? "block" : "none"}}>
          <FormItem
            title={title}
            name={name}
            body={body}
            progress={progress}
            onChangeTitle={e => onChangeTitle(e)}
            onChangeName={e => onChangeName(e)}
            onChangeBody={e => onChangeBody(e)}
            onChangeProgress={e => onChangeProgress(e)}
          />
          <button
          className="btn btn-info"
          disabled={unCreatable}
          onClick={onClickAdd}
          >
            作成
          </button>
          <button onClick={() => setSpOpen(false)} className="btn btn-secondary">
            閉じる
          </button>
        </div>
        <button className="btn btn-tag deletebtn-tag--bookmark" disabled={unDeletableTask} onClick={deleteAllTasks}><i class="fas fa-folder-minus"></i>全てのタスクを削除</button>
        <button className="btn btn-tag deletebtn-tag--bookmark" disabled={unDeletableLog} onClick={deleteAllOperationLogs}><i class="fas fa-ban"></i>全ての操作ログを削除</button>
        <button className="btn btn-tag signup-btn-tag--bookmark" onClick={()=> {firebase.auth().signOut()}}><i class="fas fa-user-times"></i>ログアウト</button>
    </div>
  </>
  )
}