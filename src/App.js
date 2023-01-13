import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main'
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact/Contact';
import DefaultComponent from './components/undefined/Undefined';
import Galery from './components/galery/Galery';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='*' element={<DefaultComponent/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/contactus' element={<ContactUs/>}/>
                <Route path='/galery' element={<Galery/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
