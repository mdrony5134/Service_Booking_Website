import React, { useRef } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import { MdLocationPin } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { infinite: true });
  return (
    <div>
      <section className="relative bg-[url(https://i.postimg.cc/HW2MmR3p/ken-cheung-Kon-WFWUa-Auk-unsplash.jpg)] bg-cover bg-center bg-no-repeat md:h-[20%]">
        <div className="absolute inset-0 bg-gray-900/30 "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 md:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl lg:text-center mx-auto ltr:sm:text-left rtl:sm:text-right">
            <motion.div
              initial={{ opacity: 0.8, x: -200 }}
              animate={ { opacity: 0.8, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-[550px] w-full  rounded-md px-8 py-10 backdrop-blur-custom warper"
            >
              <form className="">
                <h1 className="uppercase text-center mb-10 text-3xl md:text-4xl font-bold   text-white">
                  Find Your Human{" "}
                  <span className="text-[#3ec3af] mt-2">Power</span>
                  {/* <span className="font-extrabold"></span> */}
                </h1>
                <div className="mb-8">
                  <input
                    type="text"
                    id="email"
                    className="shadow-sm lg:w-full bg-gray-50 border border-gray-300  text-lg rounded-lg  block w-full py-2 pl-3 placeholder-gray-200 focus:outline-none  bg-transparent text-white"
                    placeholder="Job title industry or skill"
                    required
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="text"
                    class="
                    shadow-sm lg:w-full bg-gray-50 border border-gray-300  text-lg rounded-lg  block w-full py-2 pl-3 placeholder-gray-200 focus:outline-none  bg-transparent text-white"
                    required
                    placeholder="City or zip code"
                  />
                  {/* <MdLocationPin className="inline-block" /> */}
                </div>
                <div className="">
                  <button className="px-8 py-2.5 bg-white text-black shadow-md rounded-full text-md font-medium hover:bg-transparent hover:border border-white hover:text-white">
                    Search Workers
                  </button>
                </div>
                <div className="text-white text-center text-lg uppercase mt-8 ">
                  <a className="border-b-[1px]  border-b-white" href="#">
                    Find Out More about Man Power
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
        <div className="w-[90%] mx-auto h-[110px] bg-white relative rounded-md top-[55px] shadow-custom z-10"></div>
      </section>
    </div>
  );
};

export default Banner;
