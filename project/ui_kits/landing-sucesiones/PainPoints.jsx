/* PainPoints — 4 cards naming the visitor's situation */
(function () {
  const Icon = window.Icon;
  function PainPoints() {
    const items = [
      {
        icon: 'heart-handshake',
        title: 'Falleció un familiar',
        body: 'Estás abrumado y no sabés por dónde empezar. Necesitás que alguien te explique los pasos en castellano, sin tecnicismos.',
      },
      {
        icon: 'home',
        title: 'Necesito vender un inmueble',
        body: 'Heredaste una propiedad y ya hay un comprador, pero el juicio sucesorio frena la operación. Querés llegar a la firma sin sorpresas.',
      },
      {
        icon: 'shield-alert',
        title: 'Hay desacuerdo entre herederos',
        body: 'Un hermano bloquea la sucesión o discuten cómo dividir. Necesitás defender lo tuyo sin pelearte de por vida con tu familia.',
      },
      {
        icon: 'check-square',
        title: 'Quiero ordenar en vida',
        body: 'Querés dejar todo en orden para tus hijos: testamento, donaciones o cesión de derechos. Sin que el día de mañana sea un problema.',
      },
    ];
    return (
      <section className="section">
        <div className="container">
          <div className="shead" style={{textAlign: 'center', marginInline: 'auto'}}>
            <div className="eyebrow">Por qué llegás acá</div>
            <hr className="rule-gold" style={{marginInline: 'auto'}} />
            <h2>¿Estás pasando por alguna de estas situaciones?</h2>
            <p>Si te identificás con alguna, podemos ayudarte. Te explicamos qué te toca a vos y qué nos toca a nosotros.</p>
          </div>
          <div className="pain-grid">
            {items.map((it, i) => (
              <article className="pain" key={i}>
                <div className="pain__ico"><Icon name={it.icon} size={32} /></div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  window.PainPoints = PainPoints;
})();
