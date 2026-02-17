import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import BackToTopButton from "./components/BackToTopButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
              <About />
              <Skills />
              <Services />
              <Work />
              <Contact />
              <BackToTopButton />
            </div>
          }
        />
        {/* Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
