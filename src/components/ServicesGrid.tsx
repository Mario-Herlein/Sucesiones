import Icon from './Icon';

const svc = [
  { icon: 'file-text', title: 'Sucesión Ab-Intestato', body: 'Cuando no hay testamento. Iniciamos el juicio, presentamos a los herederos y obtenemos la declaratoria.' },
  { icon: 'scale', title: 'Sucesión Testamentaria', body: 'Hay un testamento que respetar. Validamos su legalidad, ejecutamos la voluntad y resolvemos las legítimas.' },
  { icon: 'shield-check', title: 'Inscripción de bienes', body: 'Sucesión cerrada pero el inmueble sigue a nombre del causante. Lo inscribimos a nombre de los herederos.' },
  { icon: 'users', title: 'Conflictos entre herederos', body: 'Mediación primero. Si no alcanza, partición judicial, cesión de derechos o compra entre coherederos.' },
  { icon: 'home', title: 'Sucesión urgente con venta', body: 'Hay un comprador esperando. Coordinamos sucesión, escribanía y partición para llegar a la firma sin trabarse.' },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="shead">
          <div className="eyebrow">Servicios</div>
          <hr className="rule-gold" />
          <h2>Cinco situaciones, un mismo equipo.</h2>
          <p>Te decimos en la primera reunión cuál es tu caso, qué papeles hacen falta y cuánto puede tardar.</p>
        </div>
        <div className="svc-grid svc-grid--5">
          {svc.map((s, i) => (
            <article className="svc" key={i}>
              <div className="svc__icon"><Icon name={s.icon} size={44} /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="svc__link" href="#consulta">
                Consultar sin cargo{' '}
                <span className="arrow"><Icon name="arrow-right" size={14} /></span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
