import React from 'react'
import Hamburger from '../components/Hamburger'
import AllTabs from '../components/AllTabs'
import "../css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';

const Room = () => {
  return (
    <div className="inner">
      <Hamburger />
      <AllTabs />
    </div>
  )
}

export default Room
