import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Basket from "./components/Basket/Basket";
import Undefined from "./components/undefined/Undefined";


function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='*' element={<Undefined />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/basket' element={<Basket />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
