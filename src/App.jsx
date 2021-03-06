import React, { useReducer } from 'react'
import reducer from './reducer'
import AppContext from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthService'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import LoggedInRoute from './LoggedInRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  const initialState = {
    tasks: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

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
