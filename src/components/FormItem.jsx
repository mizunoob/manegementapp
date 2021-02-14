import React, { useContext } from 'react'

const FormItem = ({ title, name, body, progress, onChangeTitle, onChangeName, onChangeBody, onChangeProgress }) => {
  return (
      <form>
        <div className="form-window">
          <div className="form-group">
            <label htmlFor="formEventTitle">タスク名</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => onChangeTitle(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventName">作成者</label>
            <input className="form-control" id="formEventName" value={name} onChange={e => onChangeName(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">タスク内容</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => onChangeBody(e.target.value)}></textarea>
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
