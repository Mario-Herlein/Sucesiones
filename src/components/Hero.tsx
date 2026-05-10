import { useState } from 'react';
import Icon from './Icon';

function HeroForm() {
  const [form, setForm] = useState({
    nombre: '', telefono: '', email: '', situacion: 'inmueble', mensaje: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.nombre.trim()) errs.nombre = 'Decinos cómo te llamás.';
    if (!form.telefono.trim()) errs.telefono = 'Necesitamos un teléfono o WhatsApp.';
    if (!form.email.trim()) errs.email = 'Dejanos un email para responderte.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Revisá el email.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="hero-form-card">
        <div className="form-success">
          <div className="badge"><Icon name="check-circle" size={28} /></div>
          <h3>Recibimos tu consulta.</h3>
          <p style={{ color: 'var(--ink-soft)', margin: '0 0 18px' }}>
            Te respondemos hoy mismo. Si es urgente, escribinos por WhatsApp.
          </p>
          <a className="btn btn--whatsapp" href="https://wa.me/5491141664386">
            <Icon name="whatsapp" size={18} /> Escribir por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="hero-form-card" onSubmit={onSubmit} noValidate>
      <h3>Contanos tu caso</h3>
      <p className="sub">Te respondemos hoy.</p>
      <div className={`field${errors.nombre ? ' field--err' : ''}`}>
        <label htmlFor="hf-n">Nombre y apellido</label>
        <input id="hf-n" type="text" value={form.nombre} onChange={set('nombre')} placeholder="Mariana López" />
        {errors.nombre && <span className="field__err">{errors.nombre}</span>}
      </div>
      <div className={`field${errors.telefono ? ' field--err' : ''}`}>
        <label htmlFor="hf-t">Teléfono / WhatsApp</label>
        <input id="hf-t" type="tel" value={form.telefono} onChange={set('telefono')} placeholder="11 4166-4386" />
        {errors.telefono && <span className="field__err">{errors.telefono}</span>}
      </div>
      <div className={`field${errors.email ? ' field--err' : ''}`}>
        <label htmlFor="hf-e">Email</label>
        <input id="hf-e" type="email" value={form.email} onChange={set('email')} placeholder="mariana@correo.com" />
        {errors.email && <span className="field__err">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="hf-s">¿Qué tipo de consulta es?</label>
        <select id="hf-s" value={form.situacion} onChange={set('situacion')}>
          <option value="inmueble">Heredé un inmueble y quiero venderlo</option>
          <option value="iniciar">Necesito iniciar una sucesión</option>
          <option value="conflicto">Hay conflicto entre herederos</option>
          <option value="testamento">Sucesión con testamento</option>
          <option value="patrimonio">Quiero ordenar mi patrimonio en vida</option>
          <option value="otra">Otra consulta</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="hf-m">
          Comentario breve{' '}
          <span style={{ color: '#9a9a9a' }}>(opcional)</span>
        </label>
        <textarea
          id="hf-m"
          rows={3}
          value={form.mensaje}
          onChange={set('mensaje')}
          placeholder="Mi papá falleció hace dos meses..."
        />
      </div>
      <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
        Enviar consulta
      </button>
      <span className="legal">
        <span className="ico"><Icon name="lock" size={14} /></span>
        Tu información es confidencial. Cubierta por secreto profesional.
      </span>
    </form>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid hero__grid--form">
        <div>
          <div className="eyebrow">Estudio jurídico · CABA y GBA</div>
          <hr className="rule-gold" />
          <h1>
            Sucesiones resueltas con claridad,
            <em>no con sorpresas.</em>
          </h1>
          <p className="lead">
            Tramitamos tu juicio sucesorio con presupuesto cerrado, plazos comprometidos
            y el acompañamiento que el momento merece. Especialistas en CABA y Buenos Aires.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#contacto">Iniciar mi consulta</a>
            <a
              className="btn btn--secondary"
              href="https://wa.me/5491141664386"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={14} /> Hablar por WhatsApp
            </a>
          </div>
          <div className="hero__micro">
            <span className="dot">●</span>
            Primera consulta sin cargo · Respuesta en menos de 24hs hábiles
          </div>
        </div>
        <HeroForm />
      </div>
    </section>
  );
}
