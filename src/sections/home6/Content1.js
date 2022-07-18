import React from "react";

import imgM from "../../assets/image/home-6/png/content-1-mobile.png";
import imgG from "../../assets/image/home-6/png/green-dot-pattern.png";

const Content1 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          {/* Image Section */}
          <div className="col-xl-5 col-xs-4">
            <div className="l6-content-image-group">
              <div className="img-1">
                <img
                  className="w-100"
                  src={imgG}
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
          {/* Content Section */}
          <div className="col-lg-6 col-md-8 col-xs-10 ml-lg-10 ml-xl-10">
            <div className="pt-7 pb-7 pb-lg-17 pl-sm-5 pl-md-9 pl-lg-10">
              <h2
                className="font-size-11 mb-9 pr-xs-23 pr-sm-8 pr-md-18 pr-lg-18"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Get data live on your mobile
              </h2>
              <p
                className="font-size-7 mb-0 pr-xl-13"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                Your app is your tool for better solution with your followers,
                making it easier for them to keep up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
