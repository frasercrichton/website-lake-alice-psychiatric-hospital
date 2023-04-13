import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter as Router } from 'react-router-dom'
import 'intersection-observer/intersection-observer'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const app = React.createElement(App)

root.render(
  <Router>
    <StrictMode>{app}</StrictMode>
  </Router>
)

