import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";
import imgFS from "../../assets/image/inner-page/png/yellow-footer-shape.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-dark-cloud pt-13 pt-lg-27 pb-7 dark-mode-texts position-relative ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="row pb-lg-25">
            <div className="col-lg-4 col-md-5 col-md-3 col-xs-8">
              <div className="pr-xl-20 mb-11 mb-lg-0 mt-lg-5">
                <div className="brand-logo mb-5">
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
                <p className="font-size-5 mb-0 text-bali-gray pr-sm-10 pr-md-0">
                  Your ulitmate email solution to grow business and engaging
                  with future customers and clients.
                </p>
                <div className="mt-8">
                  <Link
                    to="/#"
                    className="btn btn-blue-3 btn-sm rounded-5 text-lily-white font-size-3"
                  >
                    Ask Question
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 offset-xl-1">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Community
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          For Talents
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          For Companies
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          Facebook Group
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      About us
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          Meet the Team
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          Our Story
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/#"
                          className="font-size-5 text-lily-white gr-hover-text-blue-3"
                        >
                          Career
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-lg-6 col-md-5 col-xs-8">
                  <div className="mb-10 mb-lg-0 mr-xl-12">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Contacts
                    </h4>
                    <p className="font-size-5 mb-0 text-lily-white">
                      Feel free to get in touch with us via phone or send us a
                      message.
                    </p>
                    <div className="mt-7">
                      <Link
                        to="/#"
                        className="font-size-5 d-block text-golden-yellow mb-0"
                        href="tel:+1-301-340-3946"
                      >
                        +1-301-340-3946
                      </Link>
                      <Link
                        to="/#"
                        className="font-size-5 d-block text-golden-yellow mb-0"
                        href="mailto:info@finity.com"
                      >
                        info@finity.com
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-10 border-top">
            <div className="col-lg-6 text-center text-lg-left">
              <div className="copyright">
                <p className="mb-0 font-size-3 text-bali-gray">
                  © Finity 2019, All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="footer-right mt-5 mt-lg-0">
                <ul className="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-end mb-0">
                  <li>
                    <Link
                      to="/#"
                      className="text-white gr-hover-text-blue-3 ml-7"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#"
                      className="text-white gr-hover-text-blue-3 ml-7"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#"
                      className="text-white gr-hover-text-blue-3 ml-7"
                    >
                      <i className="fab fa-google" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-yellow-shape-img">
          <img src={imgFS} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
