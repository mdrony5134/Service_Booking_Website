import React from "react";

const AppSection = () => {
  return (
    <section className="bg-gray-10 text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/public/images/app.webp"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-2xl font-bold">Introducing the My Manpower App</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            We want to make it as easy as possible for you to stay connected and
            get the answers you need when you need them. The new My Manpower app
            is the best way to do it.
          </p>
          <div>
            <button className="px-4 py-2 border-2 text-xl font-bold rounded-md border-[#41B3A2] text-[#41B3A2] hover:bg-[#41B3A2] hover:text-white">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
