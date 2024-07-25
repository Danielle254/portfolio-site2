import { React, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Project1 from './Pages/Project1/Project1.jsx'
import Project2 from './Pages/Project2/Project2.jsx'
import Project3 from './Pages/Project3/Project3.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Menu from './Components/Menu/Menu.jsx'


const Layout = () => {
  const [lightMode, setLightMode] = useState(true);
  /* const [animationsOn, setAnimationsOn] = useState(true); */
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);
    
  function toggleLightMode() {
    setLightMode(!lightMode);
  }

  function menuOn() {
    const screenWidth = window.innerWidth;
    setMobileMenuVisible(true);
    if (screenWidth < 800) {
      setShowContent(false);
    }    
  }

  function menuOff() {
    setMobileMenuVisible(false);
    setShowContent(true);
  }
  
  function mobileReset() {
    setMobileMenuVisible(false);
    setShowContent(true);
  }

  function toggleAnimations() {
    setAnimationsOn(!animationsOn);
  } 

  return (
    <div> 
      {mobileMenuVisible && 
        <Menu 
        menuOff={menuOff} 
        mobileReset={mobileReset}
        lightMode={lightMode}
        /* animationsOn={animationsOn} */
        toggleLightMode={toggleLightMode}  
        toggleAnimations={toggleAnimations}     
        />
      }
      {showContent && 
        <Navbar 
      lightMode={lightMode} 
      toggleLightMode={toggleLightMode} 
      menuOn={menuOn}
        /> 
      }    
      {showContent && 
        <Outlet context={[lightMode]}/>  
      }
      {showContent && 
        <Footer 
        lightMode={lightMode}       
      />    
      }
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
