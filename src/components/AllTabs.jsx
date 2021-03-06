import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AllTasks } from './AllTasks'
import { IncompleteTasks } from './IncompleteTasks'
import { CompleteTasks } from './CompleteTasks'
import { OperationLogs } from './OperationLogs'
import Status from './Status'

import { db } from "../firebase"

const AllTabs = () => {
  const [ taskdata, setTaskdata ] = useState([])
  const [ operationLog, setOperationLog ] = useState([])

  const completeDB = taskdata.filter(task => task.progress === "完了")
  const incompleteDB = taskdata.filter(task => task.progress === "未完了")

  const noTask = [...taskdata].length === 0 && (<p>現在、登録されているタスクはありません</p>)
  const noCompTask = [...completeDB].length === 0 && (<p>現在、登録されているタスクはありません</p>)
  const noInCompTask = [...incompleteDB].length === 0 && (<p>現在、登録されているタスクはありません</p>)

  const changeProgress = [...taskdata].length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)
  const changeCompProgress = [...completeDB].length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)
  const changeInCompProgress = [...incompleteDB].length !== 0 && (<p>「完了」または「未完了」をクリックすることでタスクの進捗を変更できます</p>)

    useEffect(() => {
      const databaseAddTasks = () => {
        const unSub = db.collection("taskdata").onSnapshot((snapshot) => {
          setTaskdata(snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              title: doc.data().title,
              name: doc.data().name,
              body: doc.data().body,
              progress: doc.data().progress,
              lastdate: doc.data().lastdate
            }
          })
            )
        })
        return () => unSub()
      }
      const databaseAddLogs = () => {
        const unSub = db.collection("operationLogs").onSnapshot((snapshot) => {
          setOperationLog(snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              description: doc.data().description,
              operatedAt: doc.data().operatedAt
            }
          })
          )
        })
        return () => unSub()
      }
        databaseAddTasks()
        databaseAddLogs()
    }, [])

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
            <Tab>STATUS</Tab>
          </TabList>
        </div>
        <div class="next-btn">＞</div>
      </div>
        <TabPanel>
        {noTask}
          {changeProgress}
        <div className="list-group">
          <AllTasks taskdata={taskdata} />
        </div>
        </TabPanel>
        <TabPanel>
        {noInCompTask}
          {changeInCompProgress}
          <div className="list-group">
              <IncompleteTasks taskdata={taskdata} />
          </div>
        </TabPanel>
        <TabPanel>
        {noCompTask}
          {changeCompProgress}
          <div className="list-group">
              <CompleteTasks taskdata={taskdata} />
          </div>
        </TabPanel>
        <TabPanel>
          <OperationLogs operationLog={operationLog} />
          {[...operationLog].length === 0 && (<p>現在、記録されている操作ログはありません</p>)}
        </TabPanel>
        <TabPanel>
          <Status taskdata={taskdata} operationLog={operationLog} />
        </TabPanel>
      </Tabs>
    </>
  )
}

export default AllTabs
