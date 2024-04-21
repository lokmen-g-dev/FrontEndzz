import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const title = "Erreur 404!";
const desc = `Oops! La page que vous recherchez est introuvable.
Il se peut que l'URL saisie soit incorrecte ou que cette page n'existe plus.
`;
const btnText = "Retournez à la page d'accueil.";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Arzaak-Erreur 404";
  }, []);
  return (
    <div className="four-zero-section padding-tb section-bg">
      <br></br>
      <br></br>
      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="four-zero-content">
              <h5 className="title">{title}</h5>
              <p className="mb-1">{desc}</p>
              <Link to="/" className="lab-btn">
                <span>
                  {btnText} <i className="icofont-external-link"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <img src="assets/images/404.png" alt="CodexCoder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
