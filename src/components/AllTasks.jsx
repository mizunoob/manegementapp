import React from 'react'

export const AllTasks = ({ tasks, onClickComplete }) => {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <li href="#" className="list-group-item list-group-item-action flex-column align-items-start" key={task}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{task.title}</h5>
            <small>{task.lastdate}</small>
          </div>
          <p className="mb-1">{task.body}</p>
          <div className="list-small">
            <small alt="業務No.">{task.num}</small>
            <small onClick = {() => onClickComplete(index)} className="on-click">{task.progress}</small>
          </div>
        </li>
        )
      })}
    </>
  )
}