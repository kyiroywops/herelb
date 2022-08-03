import React from "react";
import imageOne from "../../assets/image/home-4/png/banner-img.png";

const ContentOne = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* Section title */}
        <div className="row align-items-xl-center justify-content-between">
          <div
            className="col-xl-7 col-lg-6 col-md-10"
            data-aos="fade-right"
            data-aos-delay={500}
            data-aos-once="true"
          >
            <h3 className="font-size-10 mb-0 letter-spacing-n83">
              Desarrollo de aplicaciones web y móviles.
            </h3>
          </div>
          <div
            className="col-xl-5 col-lg-6 col-md-8"
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-once="true"
          >
            <p className="font-size-7 mb-0 pr-xl-2 pr-lg-5 pr-md-10 pr-sm-20 mt-7 mt-lg-0">
            Minimice las distracciones que consumen mucho tiempo, 
            aumenta la productividad de su equipo dejando que HereLabs se encargue de sus comunicaciones.

            </p>
          </div>
        </div>
        {/* End Section title */}
        {/* Banner */}
        <div className="row">
          <div className="col-12">
            <div
              className="pt-10 pt-lg-17 rounded-10"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true"
            >
              <img
                className="w-100"
                src={imageOne}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* End Banner */}
        {/* Services */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="mr-6 square-59 bg-dodger-blue-1-op1 rounded-10 text-dodger-blue-1 font-size-7">
                <i className="fa fa-link" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Factibilidad</h4>
                <p className="font-size-5 mb-0">
                  Podemos trabajar en equipo para que el proyecto se haga más sencillo. Los proyectos que realizamos son muy importantes para nosotros, por eso nos encargamos de que el proyecto se haga más fácil.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true"
            >
              <div className="mr-6 square-59 bg-dodger-blue-1-op1 rounded-10 text-dodger-blue-1 font-size-7">
                <i className="fa fa-level-up-alt" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Tecnologías</h4>
                <p className="font-size-5 mb-0">
                  Trabajamos con las mejores tecnologías para desarrollar la aplicación más rápida y eficaz. Crearemos una aplicación que se adapte a las nuevas tecnologías de la web y móviles que se estén utilizando.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={900}
              data-aos-once="true"
            >
              <div className="mr-6 square-59 bg-dodger-blue-1-op1 rounded-10 text-dodger-blue-1 font-size-7">
                <i className="fa fa-hourglass-half" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Optimiza tiempo</h4>
                <p className="font-size-5 mb-0">
                  El tiempo de desarrollo es una de las cosas más importantes para el éxito de una aplicación. Herelabs agiliza el proceso de desarrollo de su aplicación para que el tiempo de desarrollo sea más eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Services */}
      </div>
    </div>
  );
};

export default ContentOne;
