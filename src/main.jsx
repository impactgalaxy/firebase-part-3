import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import Home from './components/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import AuthProvider from './globalProviders/AuthContext.jsx'
import Orders from './pages/Orders.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Profile from './pages/Profile.jsx'
import Dashboard from './pages/Dashboard.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>
      },
      {
        path: "/user-login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/user-registration",
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path: "/my-orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
