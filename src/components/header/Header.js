import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <header>
            <Link to='/'>Fast Food</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/basket'>Basket</Link>
        </header>
    )
}

export default Header;