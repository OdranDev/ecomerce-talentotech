// src/components/NavBar.jsx
import '../styles/NavBar.sass'

function NavBar() {
  return (
    <header className='header-top'>
        <nav className="navbar">
        <div className="navbar__logo">TalentoTech Shop</div>
        <ul className="navbar__links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/carrito">Carrito</a></li>
        </ul>
        </nav>
    </header>
  );
}

export default NavBar;
