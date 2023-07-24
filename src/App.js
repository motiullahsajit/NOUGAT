import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Menu />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
