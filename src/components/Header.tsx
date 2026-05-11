import { useState } from 'react';
import Icon from './Icon';

interface Props { logoSrc: string; }

export default function Header({ logoSrc }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="container hdr__inner">
        <a href="#" className="hdr__logo" aria-label="Saucedo & Asociados">
          <img src={logoSrc} alt="Saucedo & Asociados" />
        </a>
        <nav className="hdr__nav" aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#honorarios">Honorarios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="hdr__right">
          <a className="hdr__phone" href="tel:+5491141664386">
            <Icon name="phone" size={16} /> +54 9 11 4166-4386
          </a>
          <a
            className="hdr__wa-btn"
            href="https://wa.me/5491141664386"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={14} /> WhatsApp
          </a>
          <button
            className="hdr__hamburger"
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'x' : 'menu'} size={26} />
          </button>
        </div>
      </div>
      <div className={`hdr__sheet${open ? ' open' : ''}`}>
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#proceso" onClick={() => setOpen(false)}>Proceso</a>
        <a href="#honorarios" onClick={() => setOpen(false)}>Honorarios</a>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        <a href="tel:+5491141664386" onClick={() => setOpen(false)}>+54 9 11 4166-4386</a>
      </div>
    </header>
  );
}
