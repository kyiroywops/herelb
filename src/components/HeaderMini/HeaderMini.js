import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Header = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <header
        className={`site-header site-header--absolute ${gContext.theme.headerClassName}`}
      >
        <Container fluid={`${gContext.theme.headerFluid}`}>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {/* Brand Logo*/}
            <div className={`brand-logo ${gContext.theme.headerLogoClassName}`}>
              <Logo />
            </div>
            <div
              className={`header-social-share ${
                !gContext.theme.headerSocial ? "d-none" : ""
              }`}
            >
              <ul className="list-unstyled d-flex align-items-center text-right mb-0">
                <li>
                  <Link
                    to="/#"
                    className="heading-default-color ml-10 gr-text-blue-3"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="heading-default-color ml-10">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="heading-default-color ml-10">
                    <i className="fab fa-google" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Header;
