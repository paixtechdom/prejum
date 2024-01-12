import { useState, useEffect } from 'react'
import { CircleLoader, GridLoader, DotLoader, ClimbingBoxLoader } from 'react-spinners';
import  ClipLoader  from 'react-spinners/ClipLoader';
import './assets/Styles/index.css';
import './assets/Styles/Animation.css';
import { createBrowserRouter, RouterProvider, Outlet, Link, useNavigate } from 'react-router-dom';
import { AppContext } from './assets/Contexts/AppContext'
import { useDispatch, useSelector } from 'react-redux';
import { Home } from './Pages/Home/Home';
import { Blog } from './Pages/Blog/Blog';
import { Nav } from './Components/Nav';
import { Footer } from './Components/Footer';
import { About } from './Pages/About/About';

const Layout = () =>{
  const url = document.baseURI
  const [ currentNav, setCurrentNav ] = useState(0)

  return(
    <div className='app'>
      <AppContext.Provider value={{currentNav, setCurrentNav}}> 
          <Nav currentNav={currentNav}/>  
          <Outlet />
          <Footer />
        </AppContext.Provider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/About',
        element: <About /> 
      },
      {
        path: '/Blog',
        element: <Blog /> 
      },
      
      {
        path: '/*',
        element: <div className='pt-9 m-9 '>Page not found <Link className='mt-9 text-black' to='/'>go to home page</Link></div>
      }
    ]
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} /> 
    </div>
  );

}


export default App;

