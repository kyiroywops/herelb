import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`bg-charade pt-12 pb-10 ${className}`} {...rest}>
        <div className="container">
          <div className="pb-13">
            <div className="row align-items-center justify-content-lg-between">
              {/* Brand Logo */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-4">
                <div className="brand-logo mb-5 mb-sm-0 mt-md-4 dark-mode-texts">
                  <Link to="/#">
                    <img
                      className="mx-auto mx-0 light-version-logo default-logo"
                      src={imgLB}
                      alt=""
                    />
                    <img
                      src={imgLW}
                      alt=""
                      className="dark-version-logo mx-auto mx-0"
                    />
                  </Link>
                </div>
              </div>
              {/* End Brand Logo */}
              {/* Newsletter */}
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-10">
                <div>
                  <div className="shadow-3 rounded-4">
                    <form action="/">
                      <div className="newsletter-3">
                        <div className="form-group">
                          <label className="mb-0" htmlFor="mail">
                            <i className="icon icon-email-84 mb-0" />
                          </label>
                          <input
                            id="mail"
                            type="email"
                            className="form-control"
                            placeholder="Ingresa tu correo"
                          />
                        </div>
                        <button className="btn btn-dodger-blue-2 rounded-5">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* End Newsletter */}
            </div>
          </div>
          <div className="border-top border-default-color dark-mode-texts d-flex align-items-center justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap pt-9">
            <div>
              <ul className="d-flex align-items-center list-unstyled mb-5 mb-sm-0">
                <li>
                  <Link
                    to="/#"
                    className="pr-5 text-white gr-hover-text-dodger-blue-1 font-size-5 pr-12"
                  >
                    Contacto@herelabs.dev
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#"
                    className="pr-5 text-white gr-hover-text-dodger-blue-1 font-size-5 pr-12"
                  >
                    Chile
                  </Link>
                </li>
               
              </ul>
            </div>
            <div>
              <ul className="d-flex align-items-center list-unstyled mb-0">
               
              <li>
                  <Link
                    to="/#"
                    className="pr-5 text-white gr-hover-text-dodger-blue-1 font-size-5 pr-12"
                  >
                    © 2022 Here Labs
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
