import React from 'react'

export const DeleteMode = (props) => {
  const { tasks, deleteSingleTask } = props
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <li href="#" className="list-group-item list-group-item-action flex-column align-items-start" key={index}>
          <div onClick={() => deleteSingleTask(index)}>
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
      })}
    </>
  )
}