import React, { useReducer } from 'react'
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

  const changeProgress = state.length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)

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
          <Tab color="red">DELETE MODE</Tab>
        </TabList>
          {state.length === 0 && (<p>現在、登録されているタスクはありません</p>)}
        <TabPanel>
        <div className="list-group">
          {changeProgress}
          <AllTasks
            state={state}
            dispatch={dispatch}
          />
        </div>
        </TabPanel>
        <TabPanel>
          {changeProgress}
          <div className="list-group">
              <IncompleteTasks
                state={state}
                dispatch={dispatch}
              />
          </div>
        </TabPanel>
        <TabPanel>
          {changeProgress}
          <div className="list-group">
              <CompleteTasks
                state={state}
                dispatch={dispatch}
              />
          </div>
        </TabPanel>
        <TabPanel>
        {state.length !== 0 && (<p className="delete-message">　削除したいタスクのタイトルをクリックして下さい。</p>)}
          <DeleteMode
          state={state}
          dispatch={dispatch}
          />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
