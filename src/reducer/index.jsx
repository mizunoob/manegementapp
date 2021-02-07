import { combineReducers } from 'redux'

import tasks from './tasks'
import { operationLogs } from './operationLogs'

export default combineReducers({
  tasks,
  operationLogs
})