import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return <header>
        <div className='logo-div'>
            <span className='logo'>Gentleman</span>
            <span className='title-navbar'>Barber shop</span>
        </div>
        <div className='links'>
            <Link className='link-nav' to="/">Home</Link>
            <Link className='link-nav' to="/gallery">Galeria</Link>
            <Link className='link-nav' to="/style">Estilos</Link>
            <Link className='link-nav' to="/table">Tabelas</Link>
        </div>
    </header>
};

export default Navbar;