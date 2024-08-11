import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import PickerPage from './pages/PickerPage'
import ViewPage from './pages/ViewPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PickerPage />,
  },
  {
    path: '/:id',
    element: <ViewPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
