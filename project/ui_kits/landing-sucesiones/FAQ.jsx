/* FAQ — 8 accordion items with full answers. */
(function () {
  const { useState } = React;
  function FAQ() {
    const items = [
      { q: '¿Qué documentación necesito para iniciar la sucesión?',
        a: 'Lo básico: partida de defunción del causante, partidas de nacimiento o matrimonio que acrediten el vínculo, DNI de los herederos y los títulos de los bienes (escritura del inmueble, cédula del auto, resúmenes bancarios). Si te falta algo, te ayudamos a conseguirlo.' },
      { q: '¿Cuánto tarda en promedio una sucesión en CABA / PBA?',
        a: 'Entre 6 y 12 meses si no hay desacuerdo entre herederos. En CABA suele ser más rápido que en Provincia, donde los juzgados están más saturados. Si hay conflicto, puede extenderse a 18 meses o más.' },
      { q: '¿Puedo vender un inmueble antes de que termine el juicio sucesorio?',
        a: 'Sí, con planificación. Una vez obtenida la declaratoria de herederos podés escriturar mediante "tracto abreviado" sin esperar la inscripción. Lo coordinamos con el escribano para que llegues a la firma en el menor tiempo posible.' },
      { q: '¿Qué pasa si no todos los herederos están de acuerdo?',
        a: 'Primero intentamos mediación. Si no se llega a acuerdo, hay vías legales: partición judicial, cesión de derechos o que un coheredero compre la parte de los demás. Te explicamos los tiempos y los costos antes de avanzar con cualquier opción.' },
      { q: '¿Qué es el impuesto a la transmisión gratuita de bienes y cuándo aplica?',
        a: 'Es un impuesto provincial sobre las herencias. En Provincia de Buenos Aires aplica cuando lo recibido supera ciertos topes; en CABA actualmente no se cobra. En la primera reunión calculamos si corresponde y cuánto sería en tu caso.' },
      { q: '¿Qué pasa si hay un heredero que vive en el exterior?',
        a: 'No hay problema. Puede otorgar un poder ante el consulado argentino o ante un escribano local con apostilla. Coordinamos los trámites a distancia y firmamos en su nombre con el poder.' },
      { q: '¿Y si el causante tenía deudas?',
        a: 'Las deudas se cobran del patrimonio antes de repartir. Si superan el activo, podés "aceptar la herencia con beneficio de inventario": no respondés con tu propio patrimonio. Te explicamos los plazos para hacerlo bien.' },
      { q: '¿Se puede iniciar la sucesión sin testamento?',
        a: 'Sí, es lo más común. Se llama sucesión ab-intestato y la ley define quiénes heredan: cónyuge, hijos, padres, hermanos, en ese orden. El proceso es prácticamente el mismo que con testamento.' },
    ];
    const [open, setOpen] = useState(0);
    return (
      <section id="faq" className="section">
        <div className="container">
          <div className="shead" style={{textAlign: 'center', marginInline: 'auto'}}>
            <div className="eyebrow">Preguntas frecuentes</div>
            <hr className="rule-gold" style={{marginInline: 'auto'}} />
            <h2>Lo que más nos preguntan.</h2>
          </div>
          <div className="faq__list">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={i}>
                  <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span>{it.q}</span>
                    <span className="faq__ico">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq__a"><div className="faq__a-inner">{it.a}</div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  window.FAQ = FAQ;
})();
