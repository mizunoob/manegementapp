import React from 'react'

export const OperationLog = ({ operationLog }) => {
  return (
    <>
      <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <small></small>
        </div>
        <p className="mb-1">{operationLog.description}</p>
        <div className="list-small">
          <small></small>
          <small>{operationLog.operatedAt}</small>
        </div>
      </li>
    </>
  )
}