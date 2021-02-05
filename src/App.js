import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import reducer from './reducer'

import { AllTasks } from './components/AllTasks'
import { IncompleteTasks } from './components/IncompleteTasks'
import { CompleteTasks } from './components/CompleteTasks'
import { DeleteMode } from './components/DeleteMode'
import { Form } from './components/Form'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [ progress, setProgress ] = useState('選択して下さい')

  const [tasks, setTasks] = useState([])

  const deleteSingletask = (index) => {
    const newTasks = [...tasks]
    const newProgress = newTasks[index].progress
    const deleteResult = window.confirm('このタスクを削除しますか？') 
    if (deleteResult) {
      newProgress.splice(index, 1)
      setTasks(newTasks)
    }
  }

  return (
    <>
      <Form 
        state={state} dispatch={dispatch}
      />
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
          <AllTasks
            state={state}
            dispatch={dispatch}
          />
        </div>
        </TabPanel>
        <TabPanel>
          <div className="list-group">
              <IncompleteTasks
                state={state}
                dispatch={dispatch}
              />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="list-group">
              <CompleteTasks
                state={state}
                dispatch={dispatch}
              />
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
