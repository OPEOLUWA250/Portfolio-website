import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import BackToTopButton from "./components/BackToTopButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load less critical sections for faster initial load
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));

// Fallback loading component
const SectionFallback = () => (
  <div
    style={{
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Minimal loading indicator */}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        <Route
          path="/"
          element={
            <div className="bg-primary min-h-screen">
              <Header />
              <Home />
              <Suspense fallback={<SectionFallback />}>
                <About />
                <Skills />
                <Services />
                <Work />
                <Contact />
              </Suspense>
              <BackToTopButton />
            </div>
          }
        />
        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Admin />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
