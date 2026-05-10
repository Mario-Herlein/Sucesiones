/* FinalCTA — navy band with title, subtitle, two buttons, contact info. */
(function () {
  const Icon = window.Icon;
  function FinalCTA() {
    return (
      <section id="contacto" className="section section--navy">
        <div className="container fcta">
          <div className="eyebrow">Hablemos</div>
          <hr className="rule-gold" style={{marginInline: 'auto'}} />
          <h2>Hablemos de tu caso hoy.</h2>
          <p>Primera consulta sin cargo. Respondemos en menos de 24hs hábiles.</p>
          <div className="fcta__buttons">
            <a className="btn btn--primary" href="#hero-form">Iniciar mi consulta</a>
            <a className="btn btn--secondary btn--secondary--light" href="https://wa.me/5491141664386" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={14} /> Hablar por WhatsApp
            </a>
          </div>
          <div className="fcta__contact">
            <div className="fcta__contact-item">
              <span className="ico"><Icon name="message-circle" size={20} /></span>
              <a href="https://wa.me/5491141664386">+54 9 11 4166-4386</a>
            </div>
            <div className="fcta__contact-item">
              <span className="ico"><Icon name="mail" size={20} /></span>
              <a href="mailto:hola@saucedoasociados.com.ar">hola@saucedoasociados.com.ar</a>
            </div>
            <div className="fcta__contact-item">
              <span className="ico"><Icon name="map-pin" size={20} /></span>
              <span>Av. Pte. Julio A. Roca 695 5°B · CABA</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.FinalCTA = FinalCTA;
})();
