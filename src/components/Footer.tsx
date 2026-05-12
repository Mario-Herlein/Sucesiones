import Icon from './Icon';

interface Props { logoSrc: string; }

export default function Footer({ logoSrc }: Props) {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft__grid">
          <div>
            <div className="ft__logo">
              <img src={logoSrc} alt="Saucedo & Asociados" loading="lazy" />
            </div>
            <p className="ft__about">
              Estudio jurídico especializado en sucesiones. Atendemos en CABA y Buenos Aires.
            </p>
            <div className="ft__social">
              <a href="https://www.facebook.com/profile.php?id=61579118501781" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size={18} />
              </a>
              <a href="https://www.instagram.com/saucedoasociados/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={18} />
              </a>
              <a href="https://www.threads.com/@saucedoasociados" aria-label="Threads" target="_blank" rel="noopener noreferrer">
                <Icon name="threads" size={18} />
              </a>
              <a href="https://wa.me/5491141664386?text=Hola,%20quiero%20una%20consulta%20sobre%20una%20sucesi%C3%B3n" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
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
              <a href="https://maps.app.goo.gl/yBnCdwSroLb8HQqh7" target="_blank" rel="noopener noreferrer">Av. Pte. Julio A. Roca 695 5°B, CABA</a>
            </div>
            <div className="ft__contact-line">
              <span className="ico"><Icon name="phone" size={16} /></span>
              <a href="tel:+5491141664386">+54 9 11 4166-4386</a>
            </div>
            <div className="ft__contact-line">
              <span className="ico"><Icon name="mail" size={16} /></span>
              <a href="mailto:info@saucedo-asociados.com.ar">info@saucedo-asociados.com.ar</a>
            </div>
          </div>
        </div>
        <div className="ft__legal">
          <span>© 2026 Saucedo &amp; Asociados</span>
          <span>
            <a href="/sucesiones/politica-privacidad/">Política de privacidad</a> · <a href="/sucesiones/aviso-legal/">Aviso legal</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
