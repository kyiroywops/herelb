import React from "react";

import imgR from "../../assets/image/home-6/png/feature-right-img.png";

const Features = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="pt-15 pt-md-18 pt-lg-26 pb-15 pb-md-18 pb-lg-26 bg-default-6">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div
                className="mb-0 pr-xs-20 pr-md-0 mb-10 text-center text-lg-left"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <h2 className="font-size-11">
                  For everyday, just Speak-to-Chat.
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8 order-2 order-lg-1">
              <div className="">
                {/* Services */}
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-xs-6">
                    <div
                      className="pt-13 pt-lg-15"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="square-60 bg-blue-3 shadow-dodger-blue-3 rounded-10 text-white font-size-7">
                        <i className="fa fa-link" />
                      </div>
                      <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                        <h4 className="font-size-7 mb-5">Engage Teammates</h4>
                        <p className="font-size-5 mb-0">
                          Typewolf is an independent text resource created
                          Finity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6">
                    <div
                      className="pt-13 pt-lg-15"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="square-60 bg-sunset shadow-sunset rounded-10 text-white font-size-7">
                        <i className="fa fa-level-up-alt" />
                      </div>
                      <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                        <h4 className="font-size-7 mb-5">
                          Level Up Productivity
                        </h4>
                        <p className="font-size-5 mb-0">
                          Typewolf is an independent text resource created
                          Finity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6">
                    <div
                      className="pt-13 pt-lg-15"
                      data-aos="fade-up"
                      data-aos-delay={900}
                    >
                      <div className="square-60 bg-light-green shadow-light-green rounded-10 text-white font-size-7">
                        <i className="fa fa-hourglass-half" />
                      </div>
                      <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                        <h4 className="font-size-7 mb-5">Optimize Time</h4>
                        <p className="font-size-5 mb-0">
                          Typewolf is an independent text resource created
                          Finity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6">
                    <div
                      className="pt-13 pt-lg-15"
                      data-aos="fade-up"
                      data-aos-delay={1200}
                    >
                      <div className="square-60 bg-dodger-blue-1 shadow-dodger-blue-1 rounded-10 text-white font-size-7">
                        <i className="fa fa-link" />
                      </div>
                      <div className="mt-12 pr-lg-10 pr-md-0 pr-xs-8">
                        <h4 className="font-size-7 mb-5">Engage Teammates</h4>
                        <p className="font-size-5 mb-0">
                          Typewolf is an independent text resource created
                          Finity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Services */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-8 order-1 order-lg-2">
              <div
                className="mb-10 mb-lg-0 mt-lg-16 mr-lg-n20 mr-xl-n25"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <img className="w-100" src={imgR} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
