import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Testimonial from './Components/testimonial';
import Work from './Components/work';
import Footer from "./Components/Footer";
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
