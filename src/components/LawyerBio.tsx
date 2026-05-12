import Icon from './Icon';

export default function LawyerBio() {
  return (
    <section id="equipo" className="section">
      <div className="container bio bio__grid">
        <div className="bio__photo-wrap">
          <img
            className="bio__photo"
            src="/sucesiones/assets/equipo.webp"
            alt="Saucedo & Asociados — equipo de abogadas especializadas en sucesiones"
            loading="lazy"
          />
        </div>
        <div>
          <div className="eyebrow">Quiénes somos</div>
          <hr className="rule-gold" />
          <h2>El estudio detrás de tu expediente.</h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 14px' }}>
            Somos un estudio jurídico con atención en CABA y Provincia de Buenos Aires,
            enfocado en acompañar sucesiones con claridad, criterio práctico y comunicación
            constante durante el avance del expediente.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 14px' }}>
            Lo que aprendimos es que la mejor parte del trabajo no es ganar el juicio:
            es que vos entiendas qué está pasando en cada paso. Por eso cada caso lo
            atendemos personalmente; nunca vas a hablar con un pasante ni recibir
            una respuesta automatizada.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0 0 24px' }}>
            Si podemos ayudarte, te lo decimos. Si tu caso necesita otro especialista, también.
          </p>
          <div className="bio__credentials">
            <div className="bio__cred">
              <span className="ico"><Icon name="star" size={22} /></span>
              <div>
                <div className="t">Opiniones 5 estrellas en Google</div>
                <div className="s">Clientes que valoran la claridad, el trato humano y el seguimiento.</div>
              </div>
            </div>
            <div className="bio__cred">
              <span className="ico"><Icon name="map-pin" size={22} /></span>
              <div>
                <div className="t">Atención en CABA y Provincia de Buenos Aires</div>
                <div className="s">Reuniones presenciales o coordinación a distancia según tu caso.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
