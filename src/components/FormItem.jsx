import React from 'react'

const FormItem = ({ title, name, body, progress, onChangeTitle, onChangeBody, onChangeProgress }) => {
  return (
      <form>
        <div className="form-window">
          <div className="form-group">
            <input className="form-control" id="formEventTitle" value={title} onChange={e => onChangeTitle(e.target.value)} placeholder="タスク名"/>
            <label className="form-label" htmlFor="formEventTitle">タスク名</label>
          </div>

          <div className="form-group">
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => onChangeBody(e.target.value)} placeholder="タスク内容"></textarea>
            <label className="form-label" htmlFor="formEventBody">タスク内容</label>
          </div>

          <div className="form-group">
            <label htmlFor="formEventPnrogress">進捗</label>
            <select className="form-control form-control-sm" id="formEventProgress" value={progress} onChange={e => onChangeProgress(e.target.value)}>
              <option>選択して下さい</option>
              <option>未完了</option>
              <option>完了</option>
            </select>
          </div>
        </div>
      </form>
  )
}

export default FormItem
