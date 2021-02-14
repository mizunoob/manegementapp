import React, { useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AllTasks } from './AllTasks'
import { IncompleteTasks } from './IncompleteTasks'
import { CompleteTasks } from './CompleteTasks'
import { OperationLogs } from './OperationLogs'

import AppContext from '../contexts/AppContext'

const AllTabs = () => {
  const { state } = useContext(AppContext)
  const noTask = state.tasks.length === 0 && (<p>現在、登録されているタスクはありません</p>)
  const changeProgress = state.tasks.length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)

  return (
    <>
      <Tabs>
      <div class="nav-wrap">
        <div class="scroll-nav">
          <TabList>
            <Tab>ALL</Tab>
            <Tab>INCOMPLETE</Tab>
            <Tab>COMPLETE</Tab>
            <Tab>OPERATION LOG</Tab>
          </TabList>
        </div>
        <div class="next-btn">＞</div>
      </div>
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
      </Tabs>
    </>
  )
}

export default AllTabs
