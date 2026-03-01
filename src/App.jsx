import './App.css'
import Layout from './Layout'
import DefaultPage from './view/DefaultPage';
import Create from './view/Create';
import Update from './view/Update';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <DefaultPage/>
      },
      {
        path: "/create",
        element: <Create/>
      },
      {
        path: "/update/:id",
        element: <Update/>
      }
    ]
  },
],
{
  basename: "/todolist/"
}
)


export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}