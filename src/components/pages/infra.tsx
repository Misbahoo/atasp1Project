import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { infraRandPics } from "../data/infraRandPics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Infra = () => {
  const [step, setStep] = useState(0);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const theImage = useRef(infraRandPics[step]);

  const slideLeft = () => {
    if (step <= 0) {
      setStep(infraRandPics.length - 1);
    } else {
      setStep(step - 1);
    }

    theImage.current = infraRandPics[step];
  };

  const slideRight = () => {
    if (step >= infraRandPics.length - 1) {
      setStep(0);
    } else {
      setStep(step + 1);
    }

    theImage.current = infraRandPics[step];
  };

  useEffect(() => {
    let theInterval = setInterval(() => {
      if (step >= infraRandPics.length - 1) {
        setStep(0);
      } else {
        setStep(step + 1);
      }

      theImage.current = infraRandPics[step];
    }, 5000);

    return () => clearInterval(theInterval);
  }, [step]);

  return (
    <div className="w-full mx-auto">
      <section className="flex sm:flex-row flex-col bg-infraBannerImage p-2 bg-no-repeat bg-cover object-cover">
        <div className="mx-auto">
          {/* <h1 className="text-3xl uppercase text-white text-center mb-5">Infrastructures</h1> */}

          <div className="flex flex-col sm:flex-row gap-3 mb-24 mt-20">
            <div className="flex-1 sm:w-2/4 lg:w-2/5 bg-white/20 rounded-lg p-3">
              <p className="text-gray-300 uppercase">The </p>
              <p className="text-white">
                61km of access road channels were constructed across the Zone.
                Blocks of Primary School, Health clinics, Market sheds, and
                Solar Motorized Boreholes were also constructed while Irrigation
                schemes are currently under construction.
              </p>
            </div>

            <div className="flex-1 sm:w-2/4 lg:w-2/5 rounded-lg p-3 border">
              <p className="text-gray-300 uppercase">
                The currently ongoing Irrigation Schemes
              </p>
              <ul className="text-white">
                <li>
                  5 Irrigation Schemes in 5 LGAs |{" "}
                  <span className="text-atasp-mid-green">450ha</span>
                </li>
                <li>
                  Dugu Tsoho Irrigation Scheme |{" "}
                  <span className="text-atasp-mid-green">680a</span>
                </li>
                <li>
                  Dole Kaina Irrigation Scheme |{" "}
                  <span className="text-atasp-mid-green">472ha</span>
                </li>
                <li>
                  Buma Irrigation Scheme |{" "}
                  <span className="text-atasp-mid-green">186ha</span>
                </li>
                <li>
                  Aljannare Irrigation Scheme |{" "}
                  <span className="text-atasp-mid-green">827ha</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mx-auto mb-10 justify-center items-center">
            <div>
              <button className="btn text-white border border-atasp-mid-green hover:border-0 hover:bg-atasp-mid-green transition hover:duration-500 ease-in-out">
                Access Roads
              </button>
            </div>
            <div>
              <button className="btn text-white border border-atasp-mid-green hover:border-0 hover:bg-atasp-mid-green transition hover:duration-500 ease-in-out">
                Irrigation Scheme
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* {{!-- infrastructure 1st section --}} */}

      <h1 className="text-3xl text-green-700 mb-5 p-5 capitalize sm:uppercase font-serif">
        Kware Irrigation Scheme
      </h1>

      <div className="bg-gray-500 p-3 shadow-sm shadow-gray-700">
        <h2 className="text-white text-3xl text-center font-serif">
          52 communities under 5 Local Governments are to benefit from Kware
          Irrigation Scheme when completed. About 225,000 people to be impacted
          by the project.
        </h2>
      </div>

      {/* Kware Irrigation Scheme */}
      <section className="my-10">
        <div className={"flex flex-col sm:flex-row gap-2 px-2"}>
          <div
            className="flex-1 sm:w-1/3 shadow-md mb-3"
            ref={ref}
            style={
              inView
                ? {
                    opacity: 1,
                    transform: "translateX(0)",
                    transition: "all 0.5s ease-in",
                  }
                : {
                    opacity: 0,
                    transform: "translateX(-30%)",
                  }
            }
          >
            <img src="images/irrigation/kware/secCanal1.jpg" alt="" />
            <div className="p-5">
              <p>
                Secondary Canal in Kware Irrigation Scheme, Sokoto State. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatem recusandae cumque tempora eligendi esse,.
              </p>
            </div>
          </div>
          <div
            className="flex-1 sm:w-1/3 shadow-md mb-3"
            ref={ref}
            style={
              inView
                ? {
                    opacity: 1,
                    transform: "translateX(0)",
                    transition: "all 0.5s ease-in",
                    transitionDelay: "0.2s",
                  }
                : {
                    opacity: 0,
                    transform: "translateX(-30%)",
                  }
            }
          >
            <img src="images/irrigation/kware/secCanal4.jpg" alt="" />
            <div className="p-5">
              <p>
                Secondary Canal in Kware Irrigation Scheme, Sokoto State. Lorem
                ipsum dolor sit amet consectetur adipisicing elit..
              </p>
            </div>
          </div>
          <div
            className="flex-1 sm:w-1/3 shadow-md mb-3"
            ref={ref}
            style={
              inView
                ? {
                    opacity: 1,
                    transform: "translateX(0)",
                    transition: "all 0.5s ease-in",
                    transitionDelay: "0.4s",
                  }
                : {
                    opacity: 0,
                    transform: "translateX(-30%)",
                  }
            }
          >
            <img src="images/irrigation/kware/controlFinish1.jpg" alt="" />
            <div className="p-5">
              <p>
                Secondary Canal in Kware Irrigation Scheme, Sokoto State. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatem recusandae cumque tempora eligendi esse,.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex bg-firstBgImageInfra bg-no-repeat bg-cover shadow-sm shadow-gray-700 h-96 items-center justify-center">
        <p className="lg:text-3xl text-center text-white font-serif bg-white/30 mx-7 py-10 rounded-lg shadow-md shadow-black items-center">
          Currenty ..... communities from 8 Local Government Areas of Kebbi and
          Sokoto states have benefitted from the Program with newly
          constructed/rehabilitation of Primary Schools, Health Clinics, Market
          Sheds, Portable Water, and Waste Disposal.
        </p>
      </div>

      <div className="flex mt-5">
        <div className="w-full h-fu2ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {infraRandPics.map((item) => (
            <div className="flex-1 w-full sm:w-2/4 md:w-1/4 inline-block mx-1 hover:scale-100 ease-in-out duration-150 cursor-pointer overflow-hidden whitespace-normal shadow-sm shadow-black">
              <img
                className=""
                src={`images/buildings/randomInfraPics/${item.pic}`}
                alt="/"
              />
              <p className="text-center p-3">
                {item.description} in{" "}
                <span className="text-atasp-light-green capitalize">
                  {item.lga}
                </span>{" "}
                LGA of{" "}
                <span className="capitalize text-atasp-light-green">
                  {item.state}
                </span>{" "}
                state
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-infra px-5 flex flex-col lg:flex-row items-center mx-auto mt-10 relative">
        <div className="">
          <img
            className=""
            src={`images/buildings/randomInfraPics/${theImage.current.pic}`}
            alt="banner"
          />
        </div>
        <div className="flex flex-col mt-5 lg:mt-0 lg:px-10 w-full">
          <div className="mb-10">
            <h2 className="uppercase font-bold text-center lg:text-left text-atasp-mid-red">
              infrastructure
            </h2>
            <p className="text-center lg:text-left lg:space-y-5">
              {theImage.current.description}
            </p>
          </div>
        </div>
        <button
          className="absolute left-0 bg-atasp-light-green opacity-50 p-2 text-white rounded-r-lg hover:opacity-100 top-28 lg:top-auto"
          onClick={slideLeft}
        >
          left
        </button>
        <button
          className="absolute right-0 bg-atasp-light-green opacity-50 p-2 text-white rounded-l-lg hover:opacity-100 top-28 lg:top-auto"
          onClick={slideRight}
        >
          right
        </button>
      </section>
      <section className="bg-infra-bg px-5 flex flex-col lg:flex-row-reverse items-center mx-auto mt-10">
        <div className="w-full">
          <img
            className="rounded-lg shadow-xl"
            src="images/buildings/SEimage.jpg"
            alt="sectionPic"
          />
        </div>
        <div className="flex flex-col mt-5 lg:mt-0 lg:px-10 w-full">
          <div className="mb-10">
            <h2 className="uppercase font-bold text-center lg:text-left text-atasp-mid-red">
              infrastructure
            </h2>
            <p className="text-center lg:text-left lg:space-y-5">
              Rehabilitation of agricultural and ancillary social infrastructure
              including 1300km of irrigation water coneyance canals, 167 &amp;
              120 units of hydraulic structures in Kebbi &amp; Sokoto
              respectively
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infra;
