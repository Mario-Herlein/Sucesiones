const items = [
  { num: '5.0', acc: ' ★', lbl: 'opinión promedio en Google' },
  { num: 'CABA', acc: '', lbl: 'y Provincia de Buenos Aires' },
  { num: 'Sucesiones', acc: '', lbl: 'legítimas y testamentarias' },
  { num: 'Consulta', acc: '', lbl: 'inicial sin cargo' },
];

export default function TrustBar() {
  return (
    <section className="trust" style={{ background: 'var(--navy-deep)', borderColor: 'transparent' }}>
      <div className="container trust__grid">
        {items.map((it, i) => (
          <div className="trust__item" key={i}>
            <div className="trust__num" style={{ color: 'var(--white)' }}>
              {it.num}<span className="acc">{it.acc}</span>
            </div>
            <div className="trust__lbl" style={{ color: 'rgba(255,255,255,0.74)' }}>{it.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
