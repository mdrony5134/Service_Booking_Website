import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const AllService = () => {
  const cardData = [
    {
      img: "/images/gas.webp",
      alt: "image",
      title: "Gas Stove  Service",
    },
    {
      img: "/images/paint.webp",
      alt: "image",
      title: "Painting Services",
    },
    {
      img: "/images/plambing.webp",
      alt: "image",
      title: "Plumbing  Service",
    },
    {
      img: "/images/homecleaning.webp",
      alt: "image",
      title: "Home Cleaning Service",
    },
    {
      img: "/images/homeshifting.webp",
      alt: "image",
      title: "Home Shifting Service",
    },
  ];
 useEffect(() => {
   const slider = new Glide(".glide-04", {
     type: "carousel",
     focusAt: 1,
     perView: 4,
     autoplay: 3500,
     animationDuration: 700,
     gap: 24,
     classNames: {
       nav: {
         active: "[&>*]:bg-wuiSlate-700",
       },
     },
     breakpoints: {
       1024: {
         perView: 2,
       },
       640: {
         perView: 1,
       },
     },
   }).mount();

   return () => {
     slider.destroy();
   };
 }, []);


  return (
    <>
      <div className="header">
        <h1 className="text-center mb-10 text-3xl font-bold">
         For Your Home
        </h1>
      </div>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-04 relative w-[90%] mx-auto">
        {/*    <!-- Slides --> */}
        <div data-glide-el="track" className="overflow-hidden">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-[300px] overflow-hidden p-0 pb-12">
            {cardData.map((data, index) => (
              <li key={index}>
                {/*<!-- Component: Basic blog card --> */}
                <div className="overflow-hidden w-[] rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                  {/*  <!-- Image --> */}
                  <figure>
                    <img
                      src={data.img}
                      alt="card image"
                      className="aspect-video w-full h-48"
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-700">
                       {data.title}
                      </h3>
                    </header>
                  </div>
                </div>
                {/*<!-- End Basic blog card --> */}
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
};
export default AllService;
