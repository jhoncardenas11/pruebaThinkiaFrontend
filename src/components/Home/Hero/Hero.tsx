import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-content animate__animated animate__fadeIn">
      <img
        src="/images/hero/mainIcon.svg"
        alt="main icon"
        className="hero__icon"
      />
      <div className="hero__info-content">
        <div className="hero__s1">
          <h1 className="hero__title">
            <span className="hero__title_p1">Esto es una prueba </span>
            <span className="hero__title_p2">
              para demostrar tus capacidades de
            </span>
            <span className="hero__title_p3"> maquetación</span>
          </h1>
          <h4 className="hero__desc1">
            <span className="hero__desct1">
              Solo pagarás los impuestos (ITP) y tasas (DGT).
            </span>
            <br />
            <span className="hero__desct2">
              Línea Directa te regala el 100% de los gastos de gestión*
            </span>
          </h4>
          <p className="hero__desc2">
            En Tramicar, tenemos un equipo de profesionales listos para
            gestionar el cambio de nombre de tu vehículo de manera completamente
            online, desde cualquier lugar y en cualquier momento del año.
          </p>
          <button className="hero__action btn-type1">
            Realiza tu trámite ahora <ArrowRight className="arrow-icon" />
          </button>
        </div>
        <div className="hero__s2">
          <img src="/images/hero/Group15188.svg" alt="hero img1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
