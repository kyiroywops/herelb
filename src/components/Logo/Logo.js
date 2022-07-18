import React from "react";
import { Link } from "gatsby";

import logoB from "../../assets/image/logo-main-black.png";
import logoW from "../../assets/image/logo-main-white.png";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {/* <!-- light version logo (logo must be black)--> */}
      <img src={logoB} alt="" className="light-version-logo" />
      {/* <!-- Dark version logo (logo must be White)--> */}
      <img src={logoW} alt="" className="dark-version-logo" />
    </Link>
  );
};

export default Logo;
