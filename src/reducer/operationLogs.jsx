import {
  ADD_OPERATION_LOG
} from '../actions'
import firebase from 'firebase'

export const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      return firebase.firestore().collection('operationLogs').add(operationLog)
    default:
      return state
  }
}