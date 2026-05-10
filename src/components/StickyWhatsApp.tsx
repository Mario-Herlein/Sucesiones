import Icon from './Icon';

export default function StickyWhatsApp() {
  return (
    <a
      className="sticky-wa"
      href="https://wa.me/5491141664386?text=Hola,%20quiero%20una%20consulta%20sobre%20una%20sucesi%C3%B3n"
      aria-label="Escribir por WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
