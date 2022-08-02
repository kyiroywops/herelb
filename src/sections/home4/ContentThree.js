import React from "react";
import {Link} from "gatsby";
import imageOne from "../../assets/image/home-4/png/l4-card-1.png";
import imageTwo from "../../assets/image/home-4/png/l4-card-2.png";
import imageThree from "../../assets/image/home-4/png/l4-card-3.png";

const ContentTwo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-8 col-xs-11">
            {/* content img start */}
            <div className="l4-content-img-group">
              <div className="img-1">
                <img
                  className="w-100"
                  src={imageOne}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration={600}
                  data-aos-delay={300}
                  data-aos-once="true"
                />
              </div>
              <div className="img-2">
                <img
                  className="w-100"
                  src={imageTwo}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration={600}
                  data-aos-delay={600}
                  data-aos-once="true"
                />
              </div>
              <div className="img-3">
                <img
                  className="w-100"
                  src={imageThree}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-delay={900}
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>
          {/* End Right Image */}
          <div className="col-xl-5 offset-lg-1 col-lg-6 col-md-8 mt-n13 mt-md-n8 mt-lg-n0">
            <div
              className="pt-xl-32 pt-lg-0 pt-27 mt-lg-0 dark-mode-texts"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-delay={500}
              data-aos-once="true"
            >
              <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-9 letter-spacing-normal">
                Nueva característica
              </h6>
              <h2 className="font-size-10 mb-8 letter-spacing-n83 pr-xs-22 pr-sm-18 pr-md-0">
                La mejor experiencia que te ofrece herelabs
              </h2>
              <p className="font-size-7 mb-0">
                Minimice el tiempo de desarrollo y el costo de desarrollo de su aplicación. Nuestro enfoque es
                siempre en encontrar a las mejores personas para trabajar. Nuestra plataforma de trabajo es una herramienta de comunicación entre los desarrolladores y los clientes.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
