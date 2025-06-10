const Footer = () => {
  return (
    <section className="footer-content">
      <div className="footer__legal">
        <p className="footer__paragraph">
          *Línea Directa asume únicamente los gastos de gestión del servicio
          “transferencia estándar”. En el caso de que desees contratar nuestro
          servicio “transferencia express”, será necesario abonar la cantidad
          adicional correspondiente, 15€, la cual no está cubierta por Línea
          Directa.
        </p>
        <p className="footer__paragraph">
          * TRAMICAR es una empresa dedicada a representación de las partes
          involucradas ante la Dirección General de Tráfico. Para el servicio de
          “transferencia estándar”, Tramicar lleva a cabo la gestión de
          expediente con la administración pública, ejecutando el trámite en
          nombre de las partes interesadas. La Dirección General de Tráfico
          enviará la documentación provisional y definitiva según sus procesos.
          Los plazos de entrega del nuevo permiso de circulación oscilan en
          torno a 3 - 6 semanas, no obstante, Tramicar no se responsabiliza ante
          cualquier demora por parte de la administración pública. En el caso de
          la contratación del servicio de “transferencia express”, Tramicar
          trabaja con las mejores gestorías colegiadas, lo cual nos permite
          llevar a cabo la gestión del expediente con plazos más reducidos,
          estos oscilan en torno a 7-15 días. Tramicar no se responsabiliza ante
          cualquier demora por parte de la gestoría en cuestión.
        </p>
        <p className="footer__paragraph">
          La documentación entregada por TRAMICAR al final del flujo web
          (certificado de operaciones) es un documento con validez jurídica que
          acredita la compraventa realizada entre las partes involucradas
          proporcionando cobertura legal desde el primer momento.
        </p>
      </div>

      <div className="footer__logos">
        <img
          src="/images/footer/Tramicar_Inicio.svg"
          alt="tramicar icon"
          className="footer__logo"
        />
        <img
          src="/images/footer/lda.svg"
          alt="lda icon"
          className="footer__logo"
        />
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          ©2023 Tramicar. Todos los derechos reservados.
        </p>
        <div className="footer__links">
          <a href="" className="footer__link">
            Política de Privacidad
          </a>
          <div className="footer__divider">|</div>
          <a href="" className="footer__link">
            Política de Cookies
          </a>
          <div className="footer__divider">|</div>
          <a href="" className="footer__link">
            Aviso Legal
          </a>
          <div className="footer__divider">|</div>
          <a href="" className="footer__link">
            Condiciones de Uso
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
