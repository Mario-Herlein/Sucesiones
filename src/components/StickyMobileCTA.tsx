import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-mobile${show ? ' is-visible' : ''}`}>
      <a className="btn btn--secondary" href="#consulta">Consultar sin cargo</a>
      <a
        className="btn btn--whatsapp"
        href="https://wa.me/5491141664386"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={14} /> WhatsApp
      </a>
    </div>
  );
}
