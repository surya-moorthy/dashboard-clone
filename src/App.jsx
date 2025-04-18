import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './controls/theme-controls'

import { Layout } from './routes/layout'
import { Dashboardpage } from './routes/dashboard/page'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",  
      element: <Layout/>,
      children: [
            {
              index: true,
              element: <Dashboardpage/>,
            },
            {
              path: "analytics",
              element: <h1 className='title'>Analytics</h1>

            }
          ]
    }
  ])
  return (
    <ThemeProvider storageKey="theme">
         <RouterProvider router={router} />
    </ThemeProvider>    
  )
}

export default App
