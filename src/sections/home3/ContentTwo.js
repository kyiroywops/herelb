import React from "react";
import { Link } from "gatsby";
import imageOne from "../../assets/image/home-3/png/app.png";
import imageTwo from "../../assets/image/home-3/png/small-card.png";
import imageThree from "../../assets/image/home-3/png/big-green-circle-img.png";

import iconApple from "../../assets/image/home-3/png/apple-button.png";
import iconGoogle from "../../assets/image/home-3/png/google-play-button.png";

const ContentTwo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-xl-6 col-lg-6 col-xs-9"
            data-aos="fade-right"
            data-aos-delay={500}
          >
            <div className="l3-content-image-5 mt-5 mt-lg-0">
              <div className="img-1">
                <img className="w-100" src={imageOne} alt="" />
              </div>
              <div className="img-2">
                <img className="w-100" src={imageTwo} alt="" />
              </div>
              <div className="img-3">
                <img className="w-100" src={imageThree} alt="" />
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6 col-md-7 col-xs-10"
            data-aos="fade-left"
            data-aos-delay={500}
          >
            <div className="pl-lg-15 pt-11 pt-lg-0">
              <h2 className="font-size-10 mb-8">
                Work anywhere, with any device
              </h2>
              <p className="font-size-6 mb-0">
                These companies release their own versions of the operating
                systems with minor changes, and yet always with the same bottom
                line.{" "}
              </p>
              <div className="mt-9">
                <Link className="d-block mb-6" to={"/#"}>
                  <img src={iconApple} alt="" />
                </Link>
                <Link className="d-block mb-6" to={"/#"}>
                  <img src={iconGoogle} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
