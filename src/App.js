import React, { useReducer } from 'react'
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

const App = () => {
  const initialState = {
    tasks: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeProgress = state.tasks.length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Form />
      <Tabs>
        <TabList>
          <Tab>ALL</Tab>
          <Tab>INCOMPLETE</Tab>
          <Tab>COMPLETE</Tab>
          <Tab>OPERATION LOG</Tab>
          <Tab>DELETE MODE</Tab>
        </TabList>
        <TabPanel>
        {state.tasks.length === 0 && (<p>現在、登録されているタスクはありません</p>)}
        <div className="list-group">
          {changeProgress}
          <AllTasks />
        </div>
        </TabPanel>
        <TabPanel>
        {state.tasks.length === 0 && (<p>現在、登録されているタスクはありません</p>)}
          {changeProgress}
          <div className="list-group">
              <IncompleteTasks />
          </div>
        </TabPanel>
        <TabPanel>
        {state.tasks.length === 0 && (<p>現在、登録されているタスクはありません</p>)}
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
        {state.tasks.length !== 0 && (<p className="delete-message">　削除したいタスクのタイトルをクリックして下さい。</p>)}
          <DeleteMode />
        </TabPanel>
      </Tabs>
    </AppContext.Provider>
  );
}

export default App;
