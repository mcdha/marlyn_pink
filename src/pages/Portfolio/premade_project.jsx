import React from "react";
import ProjData from "../../assets/js/proj_data";
import SocMed from "../../assets/js/socmed_data";

const PremadeProj = () => {
  return (
    <div className="com-container my-6 flex justify-center min-w-screen max-w-screen">
      <main className=" mx-8 flex flex-col gap-6 justify-center items-center mt-4 mb-12">
        <div className="portfolio-title flex justify-center">
          <h1 className="bg-tertiary text-secondary font-sans text-base lg:text-xl font-bold text-center w-fit px-8 py-2 rounded-full">
            Premade Assets on Etsy
          </h1>
        </div>
        <div className="porfolio-details bg-secondary rounded-3xl w-4/6 flex flex-col gap-6 justify-center items-center py-8 px-8 lg:px-28">
          <h2 className="text-justify text-tertiary font-sans text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            auctor metus et mi fermentum, in tristique turpis fringilla. Vivamus
            volutpat sapien ac erat efficitur, at efficitur nunc tempus. Ut et
            purus vitae neque efficitur sollicitudin non ut risus. Morbi sit
            amet mauris ac risus cursus malesuada non sed magna. Suspendisse
            potenti. In hac habitasse platea dictumst. Sed facilisis mi quis
            orci vehicula, in varius ipsum vulputate.
          </h2>
          <button className="bg-tertiary text-secondary font-sans text-base lg:text-xl font-bold text-center w-fit px-8 py-2 rounded-full drop-shadow-md transition-transform ease-in-out duration-300 hover:scale-105">
            View my Etsy
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {ProjData.map((data, index) => (
            <div
              key={index}
              className="soc-med w-fit drop-shadow-md transition-transform ease-in-out duration-300 hover:scale-105"
            >
              <img
                src={data.p_img}
                alt=""
                className=" drop-shadow-md rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="soc-med flex flex-row gap-4 ">
          {SocMed.map((data, index) => (
            <img
              key={index}
              src={data.s_img}
              alt=""
              className=" drop-shadow-md transition-transform ease-in-out duration-300 hover:scale-125"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PremadeProj;
