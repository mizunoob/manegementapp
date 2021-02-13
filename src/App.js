import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import reducer from './reducer'
import AppContext from './contexts/AppContext'

import { AllTasks } from './components/AllTasks'
import { IncompleteTasks } from './components/IncompleteTasks'
import { CompleteTasks } from './components/CompleteTasks'
import { DeleteMode } from './components/DeleteMode'
import { Form } from './components/Form'
import { OperationLogs } from './components/OperationLogs'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    tasks: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
   localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  const noTask = state.tasks.length === 0 && (<p>現在、登録されているタスクはありません</p>)
  const changeProgress = state.tasks.length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="outer">
        <div className="inner">
          <div className="header">
            <h2 className="title">SmartTask</h2>
            <Form />
          </div>
          <Tabs>
            <TabList>
              <Tab>ALL</Tab>
              <Tab>INCOMPLETE</Tab>
              <Tab>COMPLETE</Tab>
              <Tab>OPERATION LOG</Tab>
              <Tab><span className="delete-mode-tab">DELETE MODE</span></Tab>
            </TabList>
            <TabPanel>
            {noTask}
              {changeProgress}
            <div className="list-group">
              <AllTasks />
            </div>
            </TabPanel>
            <TabPanel>
            {noTask}
              {changeProgress}
              <div className="list-group">
                  <IncompleteTasks />
              </div>
            </TabPanel>
            <TabPanel>
            {noTask}
              {changeProgress}
              <div className="list-group">
                  <CompleteTasks />
              </div>
            </TabPanel>
            <TabPanel>
              <OperationLogs />
              {state.operationLogs.length === 0 && (<p>現在、記録されている操作ログはありません</p>)}
            </TabPanel>
            <TabPanel>
            {state.tasks.length !== 0 && (<p className="delete-message">削除したいタスクのタイトルをクリックして下さい。</p>)}
              <DeleteMode />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
