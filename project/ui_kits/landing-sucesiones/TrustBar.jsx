/* TrustBar — navy band with 4 trust data points */
(function () {
  const Icon = window.Icon;
  function TrustBar() {
    const items = [
      { num: '+15', acc: ' años', lbl: 'en derecho sucesorio' },
      { num: '+500', acc: '', lbl: 'juicios sucesorios resueltos' },
      { num: 'CPACF', acc: '', lbl: 'matrícula vigente · CABA y CASI' },
      { num: '5.0', acc: ' ★', lbl: 'opinión promedio en Google' },
    ];
    return (
      <section className="trust" style={{background: 'var(--navy-deep)', borderColor: 'transparent'}}>
        <div className="container trust__grid">
          {items.map((it, i) => (
            <div className="trust__item" key={i}>
              <div className="trust__num" style={{color: 'var(--white)'}}>
                {it.num}<span className="acc">{it.acc}</span>
              </div>
              <div className="trust__lbl" style={{color: 'rgba(255,255,255,0.74)'}}>{it.lbl}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  window.TrustBar = TrustBar;
})();
