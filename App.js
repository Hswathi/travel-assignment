import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Discover1 from "./components/Discover1";
import Discover from "./components/Discover";
import Video from "./components/Video";
import Places from "./components/Places";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";


function App() {
  return (
    <div>
     <Navbar />
      <Home/> 
      <About/>
      <Discover1/> 
      <Discover/>
      <Places/>
      <Subscribe/>
      <Sponsor/>
      <Footer/>
    </div>
  );
}

export default App;
