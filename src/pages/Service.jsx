import React from "react";
import serviceData from "../Data/Data";
import { useService } from "../components/Context/CartContext";

const categories = [...new Set(serviceData.map((service) => service.category))];

const Service = () => {
  const { cart, dispatch } = useService();

  const handleBookService = (service) => {
    // if (!cart.some((item) => item.id === service.id)) {
      
    // } else {
    //   return "Service already booked";
    // }
    dispatch({ type: "ADD_SERVICE", payload: service });
  };
  return (
    <div className="lg:container mx-auto mt-6">
      <div>
        <h1 className="text-center text-4xl mb-10">All Services</h1>
      </div>
      {categories.map((category) => (
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" key={category}>
            {category}
          </h2>

          <div className="grid lg:grid-cols-3">
            {serviceData
              .filter((service) => service.category === category)
              .map((service) => (
                <div
                  key={service.id}
                  className="group md:mb-12 md:mt-3 flex w-full max-w-[250px]  flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-md"
                >
                  <a className="relative flex h-40 overflow-hidden" href="#">
                    <img
                      className="absolute top-4 right-8 w-3/4 rounded-md"
                      src={service.img}
                      alt="product image"
                    />
                  </a>
                  <div className="mt-2 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl mb-4 tracking-tight text-slate-900">
                        {service.title}
                      </h5>
                    </a>
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleBookService(service)}
                        className={`flex items-center justify-center px-2 py-1 text-sm text-white transition  rounded-md ${
                          cart.some((itme) => item.id === service.id)
                            ? "bg-gray-500 cursor-not-allowed"
                            : " bg-[#41B3A2] hover:bg-gray-700"
                        } `}
                      >
                        {cart.some((itme) => item.id === service.id)
                          ? "Service Booked"
                          : "Book Service"}
                      </button>
                      <button className="flex items-center justify-center bg-[#41B3A2] px-2 py-1 text-sm text-white transition hover:bg-gray-700 rounded-md">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
