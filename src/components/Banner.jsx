import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 lg:bg-transparent from-gray-900/95 to-gray-900/25 bg-gradient-to-tr"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-2xl lg:text-center mx-auto ltr:sm:text-left rtl:sm:text-right">
            <h1 className="uppercase text-center mb-14 text-2xl ml-8 font-bold   text-white">
              Find Your Human <span className="text-[#41B3A2]">Power</span>
              {/* <span className="font-extrabold"></span> */}
            </h1>

            <form className="max-w-sm">
              <div className="mb-8">
                <input
                  type="text"
                  id="email"
                  class="shadow-sm lg:w-[125%] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Job title industry or skill"
                  required
                />
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  class="shadow-sm lg:w-[125%] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  placeholder="City or zip code"
                />
                {/* <MdLocationPin className="inline-block" /> */}
              </div>
            </form>
            <div className="text-start">
              <button className="px-4 py-2.5 bg-white text-black shadow-md rounded-full text-md font-medium uppercase">
                Search Workers
              </button>
            </div>
            <div className="text-white text-center text-lg uppercase mt-10 ">
              <a className="border-b-2  border-b-white" href="#">
                Find Out More about Man Power
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
