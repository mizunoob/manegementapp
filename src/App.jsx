import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/main.css"
import 'react-tabs/style/react-tabs.css';
import reducer from './reducer'
import AppContext from './contexts/AppContext'

import { Form } from './components/Form'
import AllTabs from './components/AllTabs';

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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
        <div className="inner">
          <div className="header">
            <h2 className="title">SmartTask</h2>
            <Form />
          </div>
        <AllTabs />
        </div>
    </AppContext.Provider>
  );
}

export default App;
