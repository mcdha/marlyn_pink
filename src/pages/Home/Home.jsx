import React from "react";
import SocMed from "../../assets/js/socmed_data";
import Item1 from "../../assets/img/comission/item_1.png";

const Home = () => {
  return (
    <div className="home-container my-12 flex justify-center min-w-screen max-w-screen ">
      <main className="w-4/6 flex flex-col gap-6">
        <div className="home-about bg-secondary rounded-3xl drop-shadow-md grid grid-cols-1 gap-8 py-6 px-8 lg:py-6 lg:px-20 lg:gap-0 lg:grid-cols-2">
          <div className="home-hero w-full h-auto lg:h-full lg:w-5/6 mx-auto">
            <img src={Item1} alt="" className="rounded-full mx-auto" />
          </div>

          <div className="home-about-details space-y-4">
            <h1 className="text-tertiary font-saira lg:text-2xl font-bold text-center">
              Hi, I'm Zelina!
            </h1>
            <p className="text-tertiary font-sans lg:text-lg font-bold  text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-tertiary font-sans lg:text-lg font-bold text-center">
              Thank you
            </p>
          </div>
        </div>
        <div className="home-socmed bg-secondary rounded-3xl drop-shadow-md grid grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-3 py-6 px-20">
          {SocMed.map((data, index) => (
            <button
              key={index}
              className="bg-tertiary rounded-full text-secondary font-saira font-semibold drop-shadow-md flex justify-center items-center py-3 transition-transform ease-in-out duration-300 hover:scale-105"
            >
              <img src={data.s_img} alt="" />
              <span className="ml-4 hidden lg:block"> {data.s_media}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
