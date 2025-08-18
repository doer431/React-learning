import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contact from './components/contacts/contacts.jsx'
import User from './components/user/User.jsx'
import GitHub from './components/gitHub/GitHub.jsx'
// const router = createBrowserRouter([
//   { path : '/' , element : <Layout />,
//     children :[
//       { path : '' , element : <Home/>}, { path: 'about', element : <About />}, {path: 'contacts', element : <Contact />}
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path=''element={<Home />} />
    <Route path='/about'element={<About />} />
    <Route path='/contacts'element={<Contact />} />
    <Route path='/user/:userId'element={<User />} />
    <Route path='/github'element={<GitHub />} />
  </Route>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
