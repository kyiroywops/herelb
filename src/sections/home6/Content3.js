import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/home-6/png/content-3-mobile.png";
import imgS from "../../assets/image/home-6/png/green-shape.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          <div className=" col-lg-5 col-md-4 col-xs-5">
            <div className="l6-content-image-group-3 mr-md-0 mr-lg-15 mr-xl-12">
              <div className="img-1">
                <img
                  className="w-100"
                  src={imgS}
                  alt=""
                  data-aos="fade-down"
                  data-aos-delay={800}
                />
              </div>
              <div className="img-2">
                <img
                  className="w-100"
                  src={imgM}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-8 col-xs-10 ml-xl-19">
            <div className="pt-5 pb-7 pr-sm-5 pr-md-0 ml-md-10 ml-xl-0">
              <h2
                className="font-size-11 mb-9 pr-sm-10 pr-md-17 pr-lg-15 pr-xl-0 mt-lg-31"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Data is secured &amp; safe every second.
              </h2>
              <p
                className="font-size-7 mb-0 pr-md-20 pr-xl-22"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Your app is your tool for better solution with your followers,
                making it easier for them to keep up to date.
              </p>
              <div className="mt-13">
                <Link to="/#" className="btn btn-dark-green btn-3 rounded-5">
                  Request Free Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
