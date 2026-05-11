import Icon from './Icon';

export default function LawyerBio() {
  return (
    <section id="equipo" className="section">
      <div className="container bio bio__grid">
        <div className="bio__photo-wrap">
          <img
            className="bio__photo"
            src="/assets/equipo.jpg"
            alt="Saucedo & Asociados — equipo de abogadas especializadas en sucesiones"
            loading="lazy"
          />
        </div>
        <div>
          <div className="eyebrow">Quiénes somos</div>
          <hr className="rule-gold" />
          <h2>El estudio detrás de tu expediente.</h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 14px' }}>
            Somos un estudio de abogadas matriculadas en CABA y Provincia de Buenos Aires,
            especializadas en sucesiones desde hace más de 15 años. En ese tiempo vimos
            de todo: familias paralizadas por el miedo al juzgado, herederos que no se
            hablaban, ventas que se caían a último momento.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 14px' }}>
            Lo que aprendimos es que la mejor parte del trabajo no es ganar el juicio:
            es que vos entiendas qué está pasando en cada paso. Por eso cada caso lo
            atendemos personalmente — nunca vas a hablar con un pasante ni recibir
            una respuesta automatizada.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 24px' }}>
            Si podemos ayudarte, te lo decimos. Si tu caso necesita otro especialista, también.
          </p>
          <div className="bio__credentials">
            <div className="bio__cred">
              <span className="ico"><Icon name="award" size={22} /></span>
              <div>
                <div className="t">Matrícula CPACF · Capital Federal</div>
                <div className="s">Colegio Público de Abogados de la Capital Federal</div>
              </div>
            </div>
            <div className="bio__cred">
              <span className="ico"><Icon name="award" size={22} /></span>
              <div>
                <div className="t">Matrícula CASI · San Isidro</div>
                <div className="s">Habilitadas en juzgados de Provincia de Buenos Aires</div>
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
