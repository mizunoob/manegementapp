import React from 'react'
import { db } from "../firebase"

export const OperationLog = ({ logs }) => {
  const onClickDelete = () => {
    const id = logs.id
    const deleteResult = window.confirm('この操作ログを削除しますか？') 
    if (deleteResult) {
      db.collection("operationLogs").doc(id).delete()
    }
  }
  return (
    <>
      <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <small></small>
        </div>
        <p className="mb-1" onClick={onClickDelete} style={{cursor: "pointer"}} alt="クリックで削除">{logs.description}</p>
        <div className="list-small">
          <small></small>
          <small>{logs.operatedAt}</small>
        </div>
      </li>
    </>
  )
}