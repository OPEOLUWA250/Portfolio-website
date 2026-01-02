import React, { useEffect, useState } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer year={year} />
    </>
  );
}

export default App;
