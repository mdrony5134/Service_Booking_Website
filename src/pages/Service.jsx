import React from "react";
import serviceData from "../Data/Data";

const categories = [...new Set(serviceData.map((service) => service.category))];

const Service = () => {
  return (
    <div className="lg:container mx-auto mt-6">
      <div>
        <h1 className="text-center text-4xl mb-10">All Services</h1>
      </div>
      {categories.map((category) => (
        <>
          <h2 className="text-3xl font-bold mb-6" key={category}>
            {category}
          </h2>

          <div className="grid lg:grid-cols-3">
            {serviceData
              .filter((service) => service.category === category)
              .map((service, index) => (
                <div
                  key={index}
                  class="group md:mb-12 md:mt-3 flex w-full max-w-[250px]  flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-md"
                >
                  <a class="relative flex h-40 overflow-hidden" href="#">
                    <img
                      class="absolute top-4 right-8 w-3/4 rounded-md"
                      src={service.img}
                      alt="product image"
                    />
                  </a>
                  <div class="mt-2 px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl mb-4 tracking-tight text-slate-900">
                        {service.title}
                      </h5>
                    </a>
                    <div className="flex justify-between">
                      <button class="flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md">
                        Book Service
                      </button>
                      <button class="flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Service;
