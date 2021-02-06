import React from 'react'
import { DELETE_EVENT } from '../actions'

export const Delete = ({state, dispatch, task}) => {

  const deleteTask = () => {
    const id = task.id
    const deleteResult = window.confirm('このタスクを削除しますか？') 
    if (deleteResult) dispatch({ type:DELETE_EVENT, id })
  }

  const mapStateToProps = () => {
    return 
  }

  return (
    <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div onClick={deleteTask}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{task.title}</h5>
            <small>{task.lastdate}</small>
          </div>
          <p className="mb-1">{task.body}</p>
          <div className="list-small">
            <small>{task.num}</small>
            <small>{task.progress}</small>
          </div>
          </div>
        </li>
  )
}