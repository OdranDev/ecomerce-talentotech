// src/components/Footer.jsx
import '../styles/Footer.sass';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} MiTienda. Todos los derechos reservados.</p>
        <ul className="footer__links">
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/terminos">Términos</a></li>
          <li><a href="/privacidad">Privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
