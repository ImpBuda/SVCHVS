import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Main />
            <Footer />
        </Router>
    </div>
  );
}

export default App;
