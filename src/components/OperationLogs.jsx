import React, { useContext } from 'react'
import { OperationLog } from './OperationLog'
import AppContext from '../contexts/AppContext'

export const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return(
    <>
      <h4>操作ログ一覧</h4>
      <ul>
      {Array.isArray(state.operationLogs) && state.operationLogs.map((operationLog, index) => {
        return (
          <OperationLog key={index} operationLog={operationLog} state={state}/>
        )
      })}
      </ul>
    </>
  )
}