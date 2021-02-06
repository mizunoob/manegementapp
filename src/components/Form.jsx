import React, { useContext, useState } from 'react'
import { Rnd } from "react-rnd";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions'
import AppContext from '../contexts/AppContext'

export const Form = () => {
  const { state, dispatch } = useContext(AppContext)
  const [ title, setTitle ] = useState('')
  const [ num, setNum ] = useState('')
  const [ body, setBody ] = useState('')
  const [ progress, setProgress ] = useState('選択して下さい')

  const [isOpen, setIsOpen] = useState(false);

  const unCreatable = title === '' || body === '' || progress === '選択して下さい'
  const unDeletable = state.length === 0

  const onClickAdd = e => {
    e.preventDefault()

    const nowDate = ( date = null ) => {
      const now = date instanceof Date ? date : new Date();
      const youbi = ["日","月","火","水","木","金","土"];
      return `${ now.getFullYear() }/${ now.getMonth() + 1 }/${ now.getDate()  }(${ youbi[now.getDay()] })`
  };
    dispatch({
      type: CREATE_EVENT,
      title,
      num,
      body,
      progress,
      lastdate: nowDate()
    })
    setTitle('')
    setNum('')
    setBody('')
  }

  const deleteAllTasks = () => {
    const result = window.confirm('全てのタスクを削除してもよろしいですか？')
    if (result) dispatch ({ type: DELETE_ALL_EVENTS })
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
          <label htmlFor="formEventNum">タスクNo.</label>
          <input className="form-control" id="formEventNum" value={num} onChange={e => setNum(e.target.value)}/>
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
    <button className="btn btn-danger" disabled={unDeletable} onClick={deleteAllTasks}>全てのタスクを削除する</button>
  </header>
</div>
  )
}