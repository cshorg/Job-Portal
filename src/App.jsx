import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/mainLayout"
import Home from "./pages/home"
import Onboarding from "./pages/onboarding"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/onboarding", element: <Onboarding /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
