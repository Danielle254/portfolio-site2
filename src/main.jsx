import { React, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Project1 from './Pages/Project1.jsx'
import Project2 from './Pages/Project2.jsx'
import Project3 from './Pages/Project3.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'



const Layout = () => {
  const [lightMode, setLightMode] = useState(true);
    
  function toggleLightMode() {
    setLightMode(!lightMode);
  }

  return (
    <div> 
      <Navbar 
      lightMode={lightMode} 
      toggleLightMode={toggleLightMode} 
      />     
      <Outlet context={[lightMode, setLightMode]}/>  
      <Footer 
      lightMode={lightMode}       
      />    
    </div>
  );
};

const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/project1',
    element: <Project1 />
  },
  {
    path: '/project2',
    element: <Project2 />
  },
  {
    path: '/project3',
    element: <Project3 />
  }
],
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
