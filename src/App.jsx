import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/main.css"
import 'react-tabs/style/react-tabs.css';
import reducer from './reducer'
import AppContext from './contexts/AppContext'

import Hamburger from './components/Hamburger'
import AllTabs from './components/AllTabs';

import { TASKS_FROM_DATABASE } from './actions'


// const APP_KEY = 'appWithRedux'

const App = () => {
  // const appState = localStorage.getItem(APP_KEY)
  // const initialState = appState ? JSON.parse(appState) : {

  const initialState = {
    tasks: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // useEffect(() => {
  //  localStorage.setItem(APP_KEY, JSON.stringify(state))
  // }, [state])

  useEffect(() => {
    dispatch({ type: TASKS_FROM_DATABASE })
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
        <div className="inner">
          <Hamburger />
          <AllTabs />
        </div>
    </AppContext.Provider>
  );
}

export default App;
