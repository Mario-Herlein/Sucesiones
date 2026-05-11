import Icon from './Icon';

const items = [
  { icon: 'circle-dollar-sign', title: 'Presupuesto cerrado', body: 'Te decimos el número exacto antes de empezar. Sin honorarios variables, sin ajustes a mitad de camino.' },
  { icon: 'calendar-clock', title: 'Plan de pagos', body: 'Podés pagar en cuotas a lo largo del juicio. Definimos juntos un esquema que te quede cómodo.' },
  { icon: 'banknote', title: 'Sin sorpresas en gastos', body: 'Tasas, edictos y aranceles judiciales detallados desde el inicio. Si algo cambia, lo charlamos antes.' },
];

export default function TransparentFees() {
  return (
    <section id="honorarios" className="section section--gold-soft">
      <div className="container">
        <div className="shead">
          <div className="eyebrow">Honorarios</div>
          <hr className="rule-gold" />
          <h2>Cómo cobramos: sin porcentajes ocultos.</h2>
          <p>Lo más caro de un juicio sucesorio suele ser la incertidumbre. Por eso te damos un número y un plan desde el primer día.</p>
        </div>
        <div className="fees-grid">
          {items.map((it, i) => (
            <div className="fee" key={i}>
              <div className="fee__ico"><Icon name={it.icon} size={36} /></div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
        <div className="fees__cta">
          <a className="btn btn--navy" href="#consulta">Consultar sin cargo</a>
        </div>
      </div>
    </section>
  );
}
