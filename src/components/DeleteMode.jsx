import React, { useContext } from 'react'
import { Delete } from './Delete'
import AppContext from '../contexts/AppContext'

export const DeleteMode = () => {
  const { state, dispatch } = useContext(AppContext)

  return (
    <>
      {Array.isArray(state) && state.map((task, index) => {
        return (
          <div className="list-group">
            <ul>
              <Delete key={index} task={task} state={state} dispatch={dispatch}/>
            </ul>
          </div>
        )
      })}
    </>
  )
}