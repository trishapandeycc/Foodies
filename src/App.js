import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Testimonial from './Components/Testimonial';
import Work from './Components/Work';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
