import { ArrowRight } from "lucide-react";

const Steps = () => {
  return (
    <section className="steps-content">
      <h3 className="steps__title">
        <span className="steps__title-highlight">Pasos</span> para hacer la
        transferencia de tu coche con nosotros:
      </h3>

      <div className="steps__wrapper">
        <div className="steps__line"></div>
        <div className="steps_column">
          <p className="steps__label">Matrícula y datos</p>
          <div className="steps__contentcircle">
            <div className="steps__circle">
              <p className="steps__number">1</p>
            </div>
          </div>
          <p className="steps__desc">
            Ingresa la matrícula del coche, comunidad autónoma del comprador,
            precio de venta del coche, y tus datos básicos de contacto.
          </p>
        </div>
        <div className="steps_column">
          <p className="steps__label">Presupuesto y pago</p>
          <div className="steps__contentcircle">
            <div className="steps__circle">
              <p className="steps__number">2</p>
            </div>
          </div>
          <p className="steps__desc">
            ¡Calculamos tu presupuesto al momento!{" "}
            <span className="steps__desc-highlight">
              Solo pagarás las tasas DGT e impuestos ITP.
            </span>{" "}
            Se aplicará tu descuento automático y continúa para realizar el
            pago.
          </p>
        </div>
        <div className="steps_column">
          <p className="steps__label">Identificación biométrica</p>
          <div className="steps__contentcircle">
            <div className="steps__circle">
              <p className="steps__number">3</p>
            </div>
          </div>
          <p className="steps__desc">
            Es hora de identificar vuestras identidades mediante la captura de
            ambos lados del DNI/NIE y un reconocimiento facial. ¡100% online!
          </p>
        </div>
        <div className="steps_column">
          <p className="steps__label">Firma electrónica</p>
          <div className="steps__contentcircle">
            <div className="steps__circle">
              <p className="steps__number">4</p>
            </div>
          </div>
          <p className="steps__desc">
            Firma digitalmente los documentos. ¡Y listo! Tramicar se encarga de
            la gestión con la DGT y de enviarte tu nuevo permiso de circulación
            a casa.
          </p>
        </div>
      </div>

      <button className="steps__cta btn-type1">
        Realiza tu trámite <ArrowRight className="arrow-icon" />
      </button>
    </section>
  );
};

export default Steps;
