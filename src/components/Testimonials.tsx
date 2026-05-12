import Icon from './Icon';

const Star = () => <Icon name="star" size={16} />;

const items = [
  { name: 'Xiomara Jukic', date: '11 sept. 2025', q: 'Excelente profesional. Me ayudó y me acompañó mucho a mí y a mi familia. Es una gran persona, me explicó todo lo que no sabía.' },
  { name: 'Melissa Rivera Morocho', date: '16 ago. 2025', q: 'Muy buena profesional. Resolutiva y dedicada en su labor. Excelente experiencia. La super recomiendo.' },
  { name: 'Gi Ne', date: '8 jun. 2025', q: 'Su profesionalismo y dedicación me permitieron encontrar una solución justa y beneficiosa. La Dra. no solo me ayudó con los problemas legales, sino que también me brindó apoyo emocional y comprensión.' },
  { name: 'Jacqueline Waltersdorf', date: '22 may. 2025', q: 'La Dra. María me escuchó, me dio opciones y me permitió ver con más claridad lo que necesitaba. Recomiendo 100%, no solo es excelente profesional sino muy humana.' },
];

export default function Testimonials() {
  return (
    <section className="section section--gold-soft">
      <div className="container">
        <div className="shead" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <div className="eyebrow">Lo que dicen quienes pasaron por acá</div>
          <hr className="rule-gold" style={{ marginInline: 'auto' }} />
          <h2>Opiniones reales en Google.</h2>
        </div>
        <div className="tst-grid">
          {items.map((t, i) => (
            <article className="tst" key={i}>
              <div className="tst__stars">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="tst__quote">"{t.q}"</p>
              <div className="tst__meta">
                <span className="tst__name">{t.name}</span>
                <span className="tst__date">{t.date}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="tst__google">
          <a
            href="https://maps.app.goo.gl/yBnCdwSroLb8HQqh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todas las opiniones en Google <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
