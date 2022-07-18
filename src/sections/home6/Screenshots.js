import React from "react";
import Slider from "react-slick";

import imgMF from "../../assets/image/home-6/png/mobile-frame.png";
import imgS1 from "../../assets/image/home-6/png/screenshot-1.png";
import imgS2 from "../../assets/image/home-6/png/screenshot-2.png";
import imgS3 from "../../assets/image/home-6/png/screenshot-3.png";
import imgS4 from "../../assets/image/home-6/png/screenshot-4.png";
import imgS5 from "../../assets/image/home-6/png/screenshot-5.png";
import imgS6 from "../../assets/image/home-6/png/screenshot-6.png";

const Testimonial = ({ className, ...rest }) => {
  const slickSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "130px",
    autoplay: true,
    autoplaySpeed: 3000,
    easing: "linear",
    speed: 500,
    appendDots: (dots) => (
      <>
        <div className="screenshots-dots pt-5 pt-md-10">
          <div className="slick-dots">{dots}</div>
        </div>
      </>
    ),

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 4,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          centerPadding: "0px",
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="text-center dark-mode-texts mb-8 mb-lg-18">
                <h2 className="font-size-11">Inside our app</h2>
                <p className="font-size-7 mb-0 opacity-7">
                  Sophisticated styling with exceptional comfort. Super-soft,
                  pressure-relieving earpads in foamed urethane.
                </p>
              </div>
            </div>
          </div>
          {/* End Section Title */}
        </div>
        <div className="screenshot-slider-wrapper mb-5">
          <Slider
            {...slickSettings}
            css={`
              .slick-dots {
                display: flex !important;
              }
            `}
            className="screenshot-slider"
          >
            <div className="single-slide focus-reset">
              <div className="screenshot-image">
                <img src={imgS1} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div className="screenshot-image">
                <img src={imgS2} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div className="screenshot-image">
                <img src={imgS3} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div className="screenshot-image">
                <img src={imgS4} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div className="screenshot-image">
                <img src={imgS5} alt="" />
              </div>
            </div>
            <div className="single-slide focus-reset">
              <div className="screenshot-image">
                <img src={imgS6} alt="" />
              </div>
            </div>
          </Slider>
          <div
            className="phone-bg-img"
            css={`
              @media (min-width: 690px) {
                transform: translate(-50%, -53%) !important;
              }
            `}
          >
            <img src={imgMF} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
