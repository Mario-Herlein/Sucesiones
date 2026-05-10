/* LawyerBio — Dra. María Saucedo. 50/50 layout. */
(function () {
  const Icon = window.Icon;
  function LawyerBio() {
    return (
      <section id="abogada" className="section">
        <div className="container bio bio__grid">
          <div className="bio__photo" role="img" aria-label="Retrato Dra. María Saucedo (placeholder)" />
          <div>
            <div className="eyebrow">Sobre la Dra. María Saucedo</div>
            <hr className="rule-gold" />
            <h2>Quien firma tu expediente.</h2>
            <p style={{fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 14px'}}>
              Soy María Saucedo, abogada matriculada en CABA y Provincia de Buenos Aires.
              Trabajo en sucesiones desde 2010 y, en estos años, vi de todo: familias que
              llegaban paralizadas por el miedo al juzgado, herederos que no se hablaban,
              ventas que se caían a último momento.
            </p>
            <p style={{fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 14px'}}>
              Aprendí que la mejor parte del trabajo no es ganar el juicio: es que el
              cliente entienda qué está pasando en cada paso. Por eso te atiendo personalmente
              la primera reunión y firmo cada escrito que se presenta en tu nombre.
            </p>
            <p style={{fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 24px'}}>
              Si te puedo ayudar, te lo digo. Si tu caso necesita otro especialista,
              también.
            </p>
            <div className="bio__credentials">
              <div className="bio__cred">
                <span className="ico"><Icon name="award" size={22} /></span>
                <div>
                  <div className="t">Matrícula CPACF Tº 110 Fº 845</div>
                  <div className="s">Colegio Público de Abogados de la Capital Federal</div>
                </div>
              </div>
              <div className="bio__cred">
                <span className="ico"><Icon name="award" size={22} /></span>
                <div>
                  <div className="t">Matrícula CASI · San Isidro</div>
                  <div className="s">Habilitada en juzgados de Provincia de Buenos Aires</div>
                </div>
              </div>
              <div className="bio__cred">
                <span className="ico"><Icon name="briefcase" size={22} /></span>
                <div>
                  <div className="t">Posgrado en Derecho Sucesorio · UBA</div>
                  <div className="s">Universidad de Buenos Aires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  window.LawyerBio = LawyerBio;
})();
