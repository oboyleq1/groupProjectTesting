// additions for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/clean-blog/css/styles.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
