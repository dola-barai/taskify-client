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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
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
        loader: ({params}) => fetch(`http://localhost:5000/alltasks/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
