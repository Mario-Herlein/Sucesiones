/* StickyMobileCTA — bottom-fixed bar mobile only, appears after hero */
(function () {
  const { useState, useEffect } = React;
  const Icon = window.Icon;
  function StickyMobileCTA() {
    const [show, setShow] = useState(false);
    useEffect(() => {
      const onScroll = () => setShow(window.scrollY > 600);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
      <div className={`sticky-mobile ${show ? 'is-visible' : ''}`}>
        <a className="btn btn--secondary" href="#contacto">Consultar</a>
        <a className="btn btn--whatsapp" href="https://wa.me/5491141664386" target="_blank" rel="noopener">
          <Icon name="whatsapp" size={14} /> WhatsApp
        </a>
      </div>
    );
  }
  window.StickyMobileCTA = StickyMobileCTA;
})();
