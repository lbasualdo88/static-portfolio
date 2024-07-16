import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioProvider>
      <RouterProvider router={router} />
    </PortfolioProvider>
  </React.StrictMode>,
)
