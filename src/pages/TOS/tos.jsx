import React from "react";
import SocMed from "../../assets/js/socmed_data";
import TosData from "../../assets/js/tos_data";

const Tos = () => {
  return (
    <div className="com-container my-6 flex flex-col justify-center min-w-screen max-w-screen">
      <main className="flex-col gap-6 justify-center items-center mt-4 mb-12">
        {TosData.map((data, index) => (
          <div
            key={index}
            className=" mx-8 flex flex-col gap-6 justify-center items-center mb-6  text-justify"
          >
            <div className="portfolio-title flex justify-center">
              <h1 className="bg-tertiary text-secondary font-sans text-base lg:text-xl font-bold text-center w-fit px-8 py-2 rounded-full">
                {data.t_title}
              </h1>
            </div>
            <div className="porfolio-details bg-secondary text-tertiary font-sans text-base lg:text-lg font-medium rounded-3xl w-4/6 flex flex-col gap-6 justify-center items-center py-8 px-8 lg:px-28">
              <li> {data.t_parag_1}</li>
              <li>{data.t_parag_2}</li>
              <li> {data.t_parag_3}</li>
            </div>
          </div>
        ))}
        <div className="soc-med flex flex-row gap-4 justify-center">
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

export default Tos;
