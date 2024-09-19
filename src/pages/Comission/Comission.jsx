import React from "react";
import comData from "../../assets/js/comision_data";

const Comission = () => {
  return (
    <div className="com-container my-6 flex justify-center min-w-screen max-w-screen">
      <main className="w-4/6 flex flex-col gap-6">
        {comData.map((data, index) => (
          <div
            key={index}
            className="com-about bg-secondary rounded-3xl drop-shadow-md grid grid-cols-2 py-6  px-3 lg:px-20"
          >
            <div className="com-details flex flex-col gap-4 justify-center">
              <h1 className="text-tertiary font-sans text-base lg:text-2xl font-bold">
                {data.com_service}
              </h1>
              <li className="text-tertiary font-sans text-base lg:text-lg font-bold">
                {data.com_price}
              </li>
              <p className="text-tertiary font-sans text-base lg:text-lg font-medium">
                {data.com_description}
              </p>
            </div>
            <div className="service-hero">
              <img
                src={data.com_img}
                alt=""
                className=" h-full w-3/4 rounded-full"
              />
            </div>
          </div>
        ))}
        <div className="flex justify-center mb-8">
          <button className="bg-tertiary text-secondary font-sans text-base lg:text-xl font-bold text-center w-fit px-8 py-2 rounded-full transition-transform ease-in-out duration-300 hover:scale-105">
            Request a Comission
          </button>
        </div>
      </main>
    </div>
  );
};

export default Comission;
