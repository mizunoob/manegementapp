import React from 'react'
import { OperationLog } from './OperationLog'

export const OperationLogs = ({ operationLog }) => {
  return(
    <>
      <h4>操作ログ一覧</h4>
      <ul>
      {Array.isArray(operationLog) && operationLog.map((logs, index) => {
        return (
          <OperationLog key={index} logs={logs} />
        )
      })}
      </ul>
    </>
  )
}