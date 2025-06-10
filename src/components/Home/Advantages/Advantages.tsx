import { ArrowRight } from "lucide-react";

const Advantages = () => {
  return (
    <section className="advantages-content">
      <h3 className="advantages__title">
        <span className="advantages__title-highlight">Ventajas</span> de hacer
        el cambio de titularidad online con Tramicar.
      </h3>

      <div className="advantages__grid">
        <div className="advantages__card">
          <img
            src="/images/advantages/online.svg"
            alt="online icon"
            className="advantages__icon"
          />
          <h6 className="advantages__card-title">100% Online</h6>
          <p className="advantages__card-desc">
            Identificación y Firma telemática, envío a tu domicilio de tu nuevo
            Permiso de Circulación.
          </p>
        </div>
        <div className="advantages__card">
          <img
            src="/images/advantages/safety.svg"
            alt="safety icon"
            className="advantages__icon"
          />
          <h6 className="advantages__card-title">Seguro</h6>
          <p className="advantages__card-desc">
            Garantizamos la seguridad del proceso, evita fraudes y/o estafas.
          </p>
        </div>
        <div className="advantages__card">
          <img
            src="/images/advantages/fast.svg"
            alt="fast icon"
            className="advantages__icon"
          />
          <h6 className="advantages__card-title">Rápido</h6>
          <p className="advantages__card-desc">
            En 15 minutos, habrás tramitado la transferencia.
          </p>
        </div>
        <div className="advantages__card">
          <img
            src="/images/advantages/comfortable.svg"
            alt="comfortable icon"
            className="advantages__icon"
          />
          <h6 className="advantages__card-title">Cómodo</h6>
          <p className="advantages__card-desc">
            Sin enviar papeles, sin tener que moverte, desde tu teléfono u
            ordenador.
          </p>
        </div>
      </div>

      <button className="advantages__cta btn-type1">
        Realiza tu trámite <ArrowRight className="arrow-icon" />
      </button>
    </section>
  );
};

export default Advantages;
