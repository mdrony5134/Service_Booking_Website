import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const OtherCard = () => {
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
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 4000,
      autoplay: 4500,
      autoplay: true,
      rewind: true,
      perView: 4,
      gap: 24,
      classes: {
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
        <h1 className="text-center my-12 text-3xl font-bold">
          Our Specializations
        </h1>
      </div>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-08 relative w-[90%] mx-auto">
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
                      className="aspect-video w-[100%]"
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-700">
                        The easy way to go
                      </h3>
                      <p className="text-sm text-slate-400">
                        {" "}
                        By George, jun 3 2023
                      </p>
                    </header>
                    <p>
                      Experience the simple pleasures of a world with no cars,
                      and only gentle walks through palm tree forests, and
                      fallen coconuts. An island that’s home to extraordinary
                      cliffs, swelling oceans, and mammoth manta rays.
                    </p>
                  </div>
                </div>
                {/*<!-- End Basic blog card --> */}
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="-mt-6 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
};
export default OtherCard;
