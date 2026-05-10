const steps = [
  { n: '01', time: 'Día 1', t: 'Conversamos sin cargo', d: 'En 30 minutos te decimos qué necesitás, qué tarda y cuánto cuesta. Sin compromiso.' },
  { n: '02', time: 'Semana 1–2', t: 'Reunimos los papeles', d: 'Te decimos exactamente qué documentos hacen falta y te ayudamos a conseguir los que falten.' },
  { n: '03', time: 'Mes 1', t: 'Iniciamos el expediente', d: 'Presentamos el escrito en el juzgado y te avisamos cuando se abre la sucesión.' },
  { n: '04', time: 'Mes 3–8', t: 'Tramitamos y publicamos', d: 'Edictos, oficios, control del expediente. Te avisamos cada movimiento, sin que tengas que llamar.' },
  { n: '05', time: 'Mes 6–12', t: 'Inscripción y entrega', d: 'Con la sentencia inscribimos el inmueble. Ya podés vender, alquilar o partir.' },
];

export default function ProcessSteps() {
  return (
    <section id="proceso" className="section section--navy">
      <div className="container">
        <div className="shead">
          <div className="eyebrow">Cómo trabajamos</div>
          <hr className="rule-gold" />
          <h2>Cómo es el proceso, paso a paso.</h2>
          <p>Sabemos que no es un trámite más. Por eso te explicamos qué pasa, cuánto puede tardar y qué decisión te toca a vos.</p>
        </div>
        <div className="steps steps--5">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step__num">{s.n}</div>
              <div className="step__time">{s.time}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="steps__footer">
          Tiempo total estimado: 6 a 12 meses, según jurisdicción y complejidad.
        </div>
      </div>
    </section>
  );
}
