import React from 'react'
import { Delete } from './Delete'

export const DeleteMode = ({ state, dispatch, task }) => {
  return (
    <>
      {state.map((task, index) => {
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