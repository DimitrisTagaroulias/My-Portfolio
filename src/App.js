import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <div className="my-info">
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
