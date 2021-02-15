import React, { useState } from 'react'
import { Form } from './Form'

const Hamburger = () => {
  const [isformOpen, setIsformOpen] = useState(false)

  const handleHamOpen = () => {
    setIsformOpen(!isformOpen)
  }

  return (
  <div className="header">
    <div className="hamburger-wrap">
      <h2 className="title">SmartTask</h2>
      <p className="welcome">ようこそ、ゲストさん</p>
      <div className="hamburger-bars" onClick={handleHamOpen} style={{display: isformOpen ? "none" : "inline"}}><i className="fas fa-bars"></i><i className="fas fa-hamburger"></i><i className="fas fa-window-close" style={{display: isformOpen ? "inline" : "none"}}></i></div>
      <div className="hamburger-bars" onClick={handleHamOpen} style={{display: isformOpen ? "inline" : "none"}}><i className="fas fa-window-close"></i></div>
    </div>
    <div className="isformOpen" style={{ display: isformOpen ? "block" : "none" }}>
      <Form />
    </div>
  </div>
  )
}

export default Hamburger
