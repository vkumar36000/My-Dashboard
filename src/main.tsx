import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/Routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
