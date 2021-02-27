import React, { useEffect, useReducer } from 'react'
import reducer from './reducer'
import AppContext from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthService'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import LoggedInRoute from './LoggedInRoute';

import { TASKS_FROM_DATABASE } from './actions'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


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
  <AuthProvider>
    <AppContext.Provider value={{ state, dispatch }}>      
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AppContext.Provider>
  </AuthProvider>
  );
}

export default App;
