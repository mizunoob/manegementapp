import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rnd } from "react-rnd";

const App = () => {
  const [ title, setTitle ] = useState('')
  const [ num, setNum ] = useState('')
  const [ body, setBody ] = useState('')
  const [ progress, setProgress ] = useState('選択して下さい')

  const [tasks, setTasks] = useState([])

  const [isOpen, setIsOpen] = useState(false);

  const unCreatable = title === '' || body === '' || progress === '選択して下さい'
  const unDeletable = tasks.length === 0

  const AllTasks = (props) => {
    const {tasks} = props
    return (
      <>
        {tasks.map((task, index) => {
          return (
            <li href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{task.title}</h5>
                <small>{task.lastdate}</small>
              </div>
              <p class="mb-1">{task.body}</p>
              <div className="list-small">
                <small>{task.num}</small>
                <small>{task.progress}</small>
              </div>
            </li>
          )
        })}
      </>
      
    )
  }

  const IncompleteTasks = () => {
    return (
      <>
      {tasks.map((task, index) => {
        if (task.progress === '未完了') {
          return (
            <li href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{task.title}</h5>
                <small>{task.lastdate}</small>
              </div>
              <p class="mb-1">{task.body}</p>
              <div className="list-small">
                <small>{task.num}</small>
                <small>{task.progress}</small>
              </div>
            </li>
          )
        } else return
      })}
    </>
    )
  }

  const CompleteTasks = () => {
    return (
      <>
      {tasks.map((task, index) => {
        if (task.progress === '完了') {
          return (
            <li href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{task.title}</h5>
                <small>{task.lastdate}</small>
              </div>
              <p class="mb-1">{task.body}</p>
              <div className="list-small">
                <small>{task.num}</small>
                <small>{task.progress}</small>
              </div>
            </li>
          )
        } else return
      })}
    </>
    )
  }

  const onClickAdd = () => {
    const nowDate = ( date = null ) => {
      const now = date instanceof Date ? date : new Date();
      const youbi = ["日","月","火","水","木","金","土"];
      return `${ now.getFullYear() }/${ now.getMonth() + 1 }/${ now.getDate()  }(${ youbi[now.getDay()] })`
  };
    setTitle(title)
    setNum(num)
    setBody(body)
    setProgress(progress)
    const newTasks = [...tasks, {
      lastdate: nowDate(),
      title: title,
      num: num,
      body: body,
      progress: progress
    }]
    setTasks(newTasks) 
    setTitle('')
    setNum('')
    setBody('')
  }

  const deleteAllTasks = () => {
    const result = window.confirm('全てのタスクを削除してもよろしいですか？')
    if (result) {
      const newTasks = []
      setTasks(newTasks)
    } 
  }
  
  
  
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>ALL</Tab>
          <Tab>INCOMPLETE</Tab>
          <Tab>COMPLETE</Tab>
        </TabList>
        <TabPanel>
        <div class="list-group">
          <ul>
          <AllTasks tasks={tasks} progress={progress}/>
          </ul>
        </div>
        </TabPanel>
        <TabPanel>
          <div class="list-group">
            <ul>
              <IncompleteTasks tasks={tasks} progress={progress}/>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="list-group">
            <ul>
              <CompleteTasks tasks={tasks} progress={progress}/>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    <div className="App">
      <header className="App-header">
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>タスクを作成する</button>
        {isOpen ? (
          <Rnd
            className="RndStyle"
            default={{
              x: 300,
              y: 50,
              width: 800,
              minHeight: 300
            }}
          >
      <form>
        <div className="form-window">
          <div className="form-group">
            <label htmlFor="formEventTitle">業務名</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventNum">業務No.</label>
            <input className="form-control" id="formEventNum" value={num} onChange={e => setNum(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">業務内容</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="formEventPnrogress">進捗</label>
            <select className="form-control form-control-sm" id="formEventProgress" value={progress} onChange={e => setProgress(e.target.value)}>
              <option>選択して下さい</option>
              <option>未完了</option>
              <option>完了</option>
            </select>
          </div>
        </div>
      </form>
      <button className="btn btn-info" zIndex="11" disabled={unCreatable} onClick={onClickAdd}>作成</button>
            <button onClick={() => setIsOpen(false)} className="btn btn-secondary">
              閉じる
            </button>
          </Rnd>
        ) : (
          <></>
        )}
        <button className="btn btn-danger" disabled={unDeletable} onClick={deleteAllTasks}>全てのタスクを削除する</button>
      </header>
    </div>
    </>
  );
}

export default App;
