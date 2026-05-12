import { useState } from 'react';
import Icon from './Icon';

function HeroForm() {
  const [form, setForm] = useState({
    nombre: '', telefono: '', email: '', situacion: 'inmueble', mensaje: '', consentimiento: false,
  });
  const [errors, setErrors]         = useState<Record<string, string>>({});
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [serverError, setServerError] = useState('');

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación client-side
    const errs: Record<string, string> = {};
    if (!form.nombre.trim())   errs.nombre   = 'Decinos cómo te llamás.';
    if (!form.telefono.trim()) errs.telefono = 'Necesitamos un teléfono o WhatsApp.';
    if (!form.email.trim())    errs.email    = 'Dejanos un email para responderte.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Revisá el email.';
    if (!form.consentimiento) errs.consentimiento = 'Necesitamos tu consentimiento para responder la consulta.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setServerError('');

    try {
      const data = new FormData();
      data.append('nombre',    form.nombre);
      data.append('telefono',  form.telefono);
      data.append('email',     form.email);
      data.append('situacion', form.situacion);
      data.append('mensaje',   form.mensaje);
      data.append('consentimiento', form.consentimiento ? '1' : '');
      data.append('website',   ''); // honeypot

      const res  = await fetch('/sucesiones/contact.php', { method: 'POST', body: data });
      const json = await res.json() as { ok: boolean; error?: string };

      if (json.ok) {
        (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({
          event: 'lead_form_submit',
          form_name: 'sucesiones_hero',
        });
        setSubmitted(true);
      } else {
        setServerError(json.error ?? 'Algo salió mal. Por favor intentá por WhatsApp.');
      }
    } catch {
      setServerError('No pudimos conectarnos. Por favor intentá por WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="hero-form-card">
        <div className="form-success">
          <div className="badge"><Icon name="check-circle" size={28} /></div>
          <h3>Recibimos tu consulta.</h3>
          <p style={{ color: 'var(--ink-soft)', margin: '0 0 18px' }}>
            Te respondemos a la brevedad. Si es urgente, escribinos por WhatsApp.
          </p>
          <a className="btn btn--whatsapp" href="https://wa.me/5491141664386?text=Hola,%20quiero%20una%20consulta%20sobre%20una%20sucesi%C3%B3n" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> Escribir por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="hero-form-card" action="/sucesiones/contact.php" method="post" onSubmit={onSubmit} noValidate>
      <h3>Contanos tu caso</h3>
      <p className="sub">Te respondemos hoy.</p>

      {/* Honeypot — invisible para humanos, los bots lo completan */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="hf-w">Website</label>
        <input id="hf-w" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`field${errors.nombre ? ' field--err' : ''}`}>
        <label htmlFor="hf-n">Nombre y apellido</label>
        <input id="hf-n" name="nombre" type="text" value={form.nombre} onChange={set('nombre')} placeholder="Mariana López" />
        {errors.nombre && <span className="field__err">{errors.nombre}</span>}
      </div>
      <div className={`field${errors.telefono ? ' field--err' : ''}`}>
        <label htmlFor="hf-t">Teléfono / WhatsApp</label>
        <input id="hf-t" name="telefono" type="tel" value={form.telefono} onChange={set('telefono')} placeholder="11 4166-4386" />
        {errors.telefono && <span className="field__err">{errors.telefono}</span>}
      </div>
      <div className={`field${errors.email ? ' field--err' : ''}`}>
        <label htmlFor="hf-e">Email</label>
        <input id="hf-e" name="email" type="email" value={form.email} onChange={set('email')} placeholder="mariana@correo.com" />
        {errors.email && <span className="field__err">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="hf-s">¿Qué tipo de consulta es?</label>
        <select id="hf-s" name="situacion" value={form.situacion} onChange={set('situacion')}>
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
          name="mensaje"
          rows={3}
          value={form.mensaje}
          onChange={set('mensaje')}
          placeholder="Mi papá falleció hace dos meses..."
        />
      </div>

      <label className={`consent${errors.consentimiento ? ' consent--err' : ''}`}>
        <input
          type="checkbox"
          name="consentimiento"
          checked={form.consentimiento}
          onChange={(e) => setForm({ ...form, consentimiento: e.target.checked })}
        />
        <span>
          Acepto que Saucedo & Asociados use estos datos para responder mi consulta. Leí la{' '}
          <a href="/sucesiones/politica-privacidad/" target="_blank" rel="noopener noreferrer">política de privacidad</a>.
        </span>
      </label>
      {errors.consentimiento && <span className="field__err consent__err">{errors.consentimiento}</span>}

      {serverError && (
        <p className="form-server-error">
          <Icon name="alert-circle" size={14} /> {serverError}
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        style={{ width: '100%' }}
        disabled={loading}
      >
        {loading ? 'Enviando…' : 'Consultar sin cargo'}
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
            Te acompañamos para iniciar, ordenar o destrabar una sucesión con información clara,
            seguimiento del expediente y primera consulta sin cargo.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#consulta">Consultar sin cargo</a>
            <a
              className="btn btn--secondary"
              href="https://wa.me/5491141664386?text=Hola,%20quiero%20una%20consulta%20sobre%20una%20sucesi%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={14} /> Hablar por WhatsApp
            </a>
          </div>
          <div className="hero__micro">
            <span className="dot">●</span>
            Primera consulta sin cargo · Opiniones 5 estrellas en Google
          </div>
        </div>
        <div id="consulta"><HeroForm /></div>
      </div>
    </section>
  );
}
