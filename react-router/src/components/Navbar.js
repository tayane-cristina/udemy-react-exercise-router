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
        <div className='login'>
            <button className='login-button' type='submit'>Login</button>
            <Link  className="create-account-button" to="/begin">Criar conta</Link>
        </div> 
    </header>
};

export default Navbar;