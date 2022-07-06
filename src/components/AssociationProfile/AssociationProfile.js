import React from "react";
import logo from "../../assets/img/fundacionLogo.svg";
import Comment from "../Comment/Comment";

const AssociationProfile = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={logo}
              alt="logo de la fundacion"
              className="img-fluid mt-5 mb-3"
            />
          </div>

          <div className="col-md-6">
            <h2 className="mt-5 ms-1">En cuatro patas</h2>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Ubicacion
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Estamos ubicados en Buenos Aires, Quilmes.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Contacto
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Para contactarse con nosotros mande un mail a
                    encuatropatas@gmail.com. Muchas gracias.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Mascotas
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    rellenar con tarjetas o un link a la vista de mascotas?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Historia
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <strong>En cuatro patas</strong> es una organización sin
                    fines de lucro liderada por un grupo de voluntarios que
                    buscan superar la situación de sobrepoblación, abandono,
                    crueldad e indiferencia que viven millones de animales en
                    nuestro país.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   <Comment /> */}
    </section>
  );
};

export default AssociationProfile;
