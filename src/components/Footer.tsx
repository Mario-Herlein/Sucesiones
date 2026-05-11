import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft__grid">
          <div>
            <div className="ft__logo">
              <img src="/assets/Logo-sin-fondo.png" alt="Saucedo & Asociados" />
            </div>
            <p className="ft__about">
              Estudio jurídico especializado en sucesiones. Atendemos en CABA y Buenos Aires.
            </p>
            <div className="ft__social">
              <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size={18} />
              </a>
              <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={18} />
              </a>
              <a href="https://threads.net/" aria-label="Threads" target="_blank" rel="noopener noreferrer">
                <Icon name="threads" size={18} />
              </a>
              <a href="https://wa.me/5491141664386" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>
          <div className="ft__col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Sucesión Ab-Intestato</a></li>
              <li><a href="#servicios">Sucesión Testamentaria</a></li>
              <li><a href="#servicios">Inscripción de bienes</a></li>
              <li><a href="#servicios">Conflictos entre herederos</a></li>
              <li><a href="#servicios">Sucesión urgente con venta</a></li>
            </ul>
          </div>
          <div className="ft__col">
            <h4>Estudio</h4>
            <ul>
              <li><a href="#equipo">El estudio</a></li>
              <li><a href="#proceso">Cómo trabajamos</a></li>
              <li><a href="#honorarios">Honorarios</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div className="ft__col">
            <h4>Contacto</h4>
            <div className="ft__contact-line">
              <span className="ico"><Icon name="map-pin" size={16} /></span>
              Av. Pte. Julio A. Roca 695 5°B, CABA
            </div>
            <div className="ft__contact-line">
              <span className="ico"><Icon name="phone" size={16} /></span>
              <a href="tel:+5491141664386">+54 9 11 4166-4386</a>
            </div>
            <div className="ft__contact-line">
              <span className="ico"><Icon name="mail" size={16} /></span>
              <a href="mailto:hola@saucedoasociados.com.ar">hola@saucedoasociados.com.ar</a>
            </div>
            <div className="ft__contact-line">
              <span className="ico"><Icon name="clock" size={16} /></span>
              L–V 9 a 19h
            </div>
          </div>
        </div>
        <div className="ft__legal">
          <span>© 2025 Saucedo &amp; Asociados · CUIT 30-00000000-0</span>
          <span>
            <a href="#">Política de privacidad</a> · <a href="#">Aviso legal</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
