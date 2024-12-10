import { React, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Headroom from 'react-headroom'
import './index.css'
import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'
import App from './App.jsx'
import SDATv1 from './Pages/SDATv1/SDATv1.jsx'
import DogFoodCalculator from './Pages/DogFoodCalculator/DogFoodCalculator.jsx'
import AlpineVet from './Pages/AlpineVet/AlpineVet.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Menu from './Components/Menu/Menu.jsx'
import ConferenceAgenda from './Pages/ConferenceAgenda/ConferenceAgenda.jsx'
import GridironSurvivor from './Pages/GridironSurvivor/GridironSurvivor.jsx'
import SDATv2 from './Pages/SDATv2/SDATv2.jsx'


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
    if (animationsOn) {
      setTimeout(showContentFunction, 500);
    } else {
      showContentFunction();
    }    
  }
  
  function mobileReset() {
    setMobileMenuVisible(false);
    setShowContent(true);    
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

const router = createHashRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sdatv1',
    element: <SDATv1 />
  },
  {
    path: '/conferenceagenda',
    element: <ConferenceAgenda />
  },
  {
    path: '/dogfoodcalculator',
    element: <DogFoodCalculator />
  },
  {
    path: '/alpinevet',
    element: <AlpineVet />
  },
  {
    path: '/sdatv2',
    element: <SDATv2 />
  },
  {
    path: '/gridironsurvivor',
    element: <GridironSurvivor />
  }
],
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
