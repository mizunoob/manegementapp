import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Rnd } from "react-rnd";
import 'react-tabs/style/react-tabs.css';

import { AllTasks } from './components/AllTasks'
import { IncompleteTasks } from './components/IncompleteTasks'
import { CompleteTasks } from './components/CompleteTasks'
import { DeleteMode } from './components/DeleteMode'

const App = () => {
  const [ title, setTitle ] = useState('')
  const [ num, setNum ] = useState('')
  const [ body, setBody ] = useState('')
  const [ progress, setProgress ] = useState('選択して下さい')

  const [tasks, setTasks] = useState([])

  const [isOpen, setIsOpen] = useState(false);

  const unCreatable = title === '' || body === '' || progress === '選択して下さい'
  const unDeletable = tasks.length === 0

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

  const onClickComplete = index => {
    const newTasks = [...tasks]
    const newProgress = newTasks[index].progress
    // eslint-disable-next-line
    switch (newProgress) {
      case '未完了':
        const incompleteResult = window.confirm('このタスクは未完了のタスクです。完了に変更しますか？')
        if (incompleteResult) {
          newTasks[index].progress = '完了'
          setTasks(newTasks)
        }
        break
      case '完了':
        const completeResult = window.confirm('このタスクは完了したタスクです。未完了に変更しますか？')
        if (completeResult) {
          newTasks[index].progress = '未完了'
          setTasks(newTasks)
        }
        break
    }
  }

  const deleteSingletask = (index) => {
    const newTasks = [...tasks]
    const newProgress = newTasks[index].progress
    const deleteResult = window.confirm('このタスクを削除しますか？') 
    if (deleteResult) {
      newProgress.splice(index, 1)
      setTasks(newTasks)
    }
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
      <button className="btn btn-info" disabled={unCreatable} onClick={onClickAdd}>作成</button>
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
      <Tabs>
        <TabList>
          <Tab>ALL</Tab>
          <Tab>INCOMPLETE</Tab>
          <Tab>COMPLETE</Tab>
          <Tab color="red">DELETE</Tab>
        </TabList>
          {tasks.length === 0 && (<p>現在、登録されているタスクはありません</p>)}
        <TabPanel>
        <div className="list-group">
          <ul>
          <AllTasks tasks={tasks} progress={progress} title={title} onClickComplete={onClickComplete}/>
          </ul>
        </div>
        </TabPanel>
        <TabPanel>
          <div className="list-group">
            <ul>
              <IncompleteTasks tasks={tasks} progress={progress} onClickComplete={onClickComplete}/>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="list-group">
            <ul>
              <CompleteTasks tasks={tasks} progress={progress} onClickComplete={onClickComplete}/>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <DeleteMode tasks={tasks} progress={progress} deleteSingletask={deleteSingletask}/>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
