import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './components/Pages/MainLayout.jsx';
import AllTask from './components/AllTasks/AllTask';
import AddTask from './components/AddTask/AddTask';
import UpdateTask from './components/AllTasks/UpdateTask';
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/allTasks",
        element: <AllTask></AllTask>
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>
      },
      {
        path: "/alltasks/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({params}) => fetch(`https://taskify-server-delta.vercel.app/alltasks/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
