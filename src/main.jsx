import { React, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Headroom from 'react-headroom'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'
import App from './App.jsx'
import Project1 from './Pages/Project1/Project1.jsx'
import Project2 from './Pages/Project2/Project2.jsx'
import Project3 from './Pages/Project3/Project3.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Menu from './Components/Menu/Menu.jsx'


const Layout = () => {
  const [lightMode, setLightMode] = useState(true);
  const [animationsOn, setAnimationsOn] = useState(true);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);
  
  // retrieve user preference for dark mode
  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");

    if (prevTheme === "dark") {
      setLightMode(false); 
    }
    
    if (!prevTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const prefersNotSet = window.matchMedia('(prefers-color-scheme: no-preference)').matches;

      if (prefersDark) {
        setLightMode(false);
      }
      if (prefersLight) {
        setLightMode(true);
      }
      if (prefersNotSet) {
        setLightMode(true);
      }
    }
  }, []);

  // retrieve user preference for animations
  useEffect(() => {
    const prevAnimateSetting = localStorage.getItem("animate");

    if (prevAnimateSetting === "OFF") {
      setAnimationsOn(false); 
      document.documentElement.style.scrollBehavior = "auto";
    }
    
    if (!prevAnimateSetting) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)') === true || window.matchMedia('(prefers-reduced-motion: reduce)').matches === true;      

      if (prefersReduced) {
        setAnimationsOn(false);
        document.documentElement.style.scrollBehavior = "auto";
      }
    }
  }, []);  
  
    
  function toggleLightMode() {
    if (lightMode) {
      localStorage.setItem("theme", "dark");
      setLightMode(false);      
    } else {
      localStorage.setItem("theme", "light");
      setLightMode(true);
    }    
  }

  function menuOn() {
    const screenWidth = window.innerWidth;
    setMobileMenuVisible(true);
    if (screenWidth < 800) {
      setShowContent(false);
    } 
  }
  
  function showContentFunction() {
    setShowContent(true);
  }

  function menuOff() {
    setMobileMenuVisible(false);
    setTimeout(showContentFunction, 500);
  }
  
  function mobileReset() {
    setMobileMenuVisible(false);
    setShowContent(true);    
  }
  
  function mobileResetOnEnter(e) {
    if (e.key === "Enter") {
      setMobileMenuVisible(false);
    setShowContent(true);  
    }      
  }

  function toggleAnimations() {
    if (animationsOn) {
      setAnimationsOn(false);
      localStorage.setItem("animate", "OFF");
      document.documentElement.style.scrollBehavior = "auto";
    }
    if (!animationsOn) {
      setAnimationsOn(true);
      localStorage.setItem("animate", "ON");
      document.documentElement.style.scrollBehavior = "smooth";
    }    
  } 

  return (
    <div> 
      <ScrollToTop />
      <Menu 
        menuOff={menuOff} 
        mobileReset={mobileReset}
        lightMode={lightMode}
        animationsOn={animationsOn}
        toggleLightMode={toggleLightMode}  
        toggleAnimations={toggleAnimations} 
        mobileMenuVisible={mobileMenuVisible} 
        mobileResetOnEnter={mobileResetOnEnter}   
      />      
      <Headroom style={{zIndex: '1'}} >
        <Navbar 
          lightMode={lightMode} 
          toggleLightMode={toggleLightMode} 
          menuOn={menuOn}
          showContent={showContent}
          animationsOn={animationsOn}
          toggleAnimations={toggleAnimations}          
        /> 
      </Headroom>         
      <Outlet 
        context={[lightMode, showContent, animationsOn]}        
      />      
      <Footer 
        lightMode={lightMode}  
        showContent={showContent}  
        animationsOn={animationsOn}   
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
