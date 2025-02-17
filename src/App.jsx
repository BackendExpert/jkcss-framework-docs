import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GetStarted from "./pages/GetStarted";
import Docs from "./components/Docs/Docs";
import DocsHome from "./pages/Docs/DocsHome";
import ButtonMain from "./pages/Docs/Button/ButtonMain";


export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // If scrolling down and past a certain threshold, hide the NavBar
      setShowNavBar(false);
    } else {
      // If scrolling up, show the NavBar
      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="">
      <BrowserRouter>
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GetStarted" element={<GetStarted /> } />
          <Route path="/Docs/" element={<Docs /> } >
            <Route path="AllDocs" element={<DocsHome /> } />
            <Route path="Button" element={<ButtonMain /> } />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}