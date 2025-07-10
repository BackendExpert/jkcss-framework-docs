import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DocsFooter from "./components/DocsFooter";
import GetStarted from "./pages/GetStarted";
import DocsHome from "./pages/Docs/DocsHome";
import ButtonMain from "./pages/Docs/Button/ButtonMain";
import Documentation from "./pages/Docs/Documentation/Documentation";
import Popups from "./pages/Docs/ModelsPopups/Popups";

function ScrollHandler() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Check if current path is /Documentation or starts with /Documentation/
  const isDocumentationPath = location.pathname === "/Documentation" || location.pathname.startsWith("/Documentation/");

  return (
    <>
      <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Documentation" element={<Documentation />}>
          <Route path="AllDocs" element={<DocsHome />} />
          <Route path="Button" element={<ButtonMain />} />
          <Route path="Models" element={<Popups /> } />
        </Route>
      </Routes>

      {/* Show Footer or DocsFooter depending on route */}
      {isDocumentationPath ? <DocsFooter /> : <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
    </BrowserRouter>
  );
}
