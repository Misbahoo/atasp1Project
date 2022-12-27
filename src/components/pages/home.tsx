import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { objectify } from "../data/ataspObjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faCity,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import Testimony from "../../utilities/testimony";
import { infraRandPics } from "../data/infraRandPics";
import { utilizedMarkets } from "../data/utilizedMarkets";
import { kwareIrrigScheme } from "../data/kwareIrrigScheme";
import { roadPictures } from "../data/roadPictures";
import { riceDistPictures } from "../data/riceDistPictures";

// import Banner from '../../utilities/banner';

const Home = () => {
  return (
    <>
      <section className="relative bg-no-repeat bg-cover bg-center bg-bannerImage">
        <div className="container flex flex-col-reverse lg:flex-row item-center gap-12 mx-auto">
          {/* {{!-- content banner section --}} */}
          <div className="animate-textSlide flex flex-1 flex-col items-center lg:items-start p-10">
            <h2 className="text-3xl text-gray-700 font-bold md:text-4 lg:text-3xl text-center lg:text-left mb-6">
              Kebbi - Sokoto Zone
            </h2>
            <div className="flex">
              <h2 className=" text-3xl text-atasp-mid-red md:text-4 lg:text-3xl text-center lg:text-left mb-6">
                Agricultural{" "}
                <span className="text-atasp-light-green">Transformation</span>{" "}
                Agenda Support{" "}
                <span className="text-atasp-light-green">Program</span> Phase-1
              </h2>
            </div>
            <p className="text-2xl text-center lg:text-left mb-6">
              Contributing to poverty reduction, employment generation, import
              substation, economic diversification and growth of Nigeria.
            </p>
          </div>
          {/* {{!-- image --}} */}
          <div className="flex flex-1 justify-center mb-2 sm:mb-10 z-10 p-5">
            {/* <img className="w-2/6 h-2/6 md:w-2/4 md:h-2/4 lg:w-full lg:h-full" src="images/atasp1.png" alt="" /> */}
          </div>
        </div>

        {/* {{!-- Rounded Container
    <div className="hidden
     md:block 
     overflow-hidden 
     bg-atasp-mid-green 
     rounded-l-full 
     absolute 
     h-80 
     w-5/12 
     right-0
     top-40
     lg:-bottom-24
     "></div> --}} */}
      </section>

      {/* {{!-- <hr className="border-red-600 w-2/3 mx-auto"> --}} */}

      {/* {{!-- Infrastructure --}} */}
      <section className="bg-green-50">
        {/* {{!-- Heading --}} */}
        <div className="mx-auto p-10 bg-atasp-light-green rounded-br-[5rem] shadow-lg">
          <h1 className="text-3xl text-center text-white md:text-5xl">
            ATASP-1 in a Nutshell
          </h1>
          <hr className="w-2/4 mx-auto mt-3" />
          <p className="text-center mt-4 text-white text-lg">
            Rehabilitation of irrigation water conveyance canals,
            rehabilitation/construction of access roads, primary schools and
            community health centers, provision of potable water supply and
            sanitation facilities, construction of demonstration and technology
            centers, community markets, and produce storage facilities. Capacity
            development of public (agriculture research, extension, relevant
            departments of Ministries), Private (MFIs, agro-dealers, etc.) and
            community-based (producers' organizations, cooperatives,
            inter-professional bodies), etc.
          </p>
        </div>

        {/* ATASP-1 Component */}

        <div className="flex flex-col mt-10">
          <h1 className="text-3xl text-gray-700 text-center mx-auto pb-3 px-3 uppercase">
            Program Components
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 mx-auto mt-5">
            <div className="flex flex-col p-5 text-center">
              <FontAwesomeIcon
                icon={faCity}
                className="text-5xl mb-5 text-gray-500"
              />
              <h1 className="uppercase text-2xl mb-5">Infrastructure</h1>
              <p>
                Rehabilitation of agricultural and ancillary social
                infrastructure including 1300km of irrigation water coneyance
                canals, 167 &amp; 120 units of hydraulic structures in Kebbi
                &amp; Sokoto respectively
              </p>
            </div>
            <div className="flex flex-col p-5 text-center">
              <FontAwesomeIcon
                icon={faSeedling}
                className="text-5xl mb-5 text-gray-500"
              />
              <h1 className="uppercase text-2xl mb-5">
                Commoidity Value Chain
              </h1>
              <p>
                Capacity development of public (agriculture research, extension,
                relevant departments of Ministries), Private (MFIs,
                agro-dealers, etc.) and community-based (producers'
                organizations, cooperatives, inter-professional bodies, etc.)
              </p>
            </div>
            <div className="flex flex-col p-5 text-center">
              <FontAwesomeIcon
                icon={faUserGear}
                className="text-5xl mb-5 text-gray-500"
              />
              <h1 className="uppercase text-2xl mb-5">Program Managemet</h1>
              <p>
                Coordination and supervision of program activities; program day
                to day management based on adequate results measurement,
                disbursement, financial management, audit and reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Number of achivements */}

        <div className="flex flex-col  bg-atasp-light-green p-10 mt-10 rounded-tl-[5rem] rounded-br-[5rem]">
          <h1 className="text-3xl text-white text-center mx-auto pb-3 px-3">
            Our Achievement so far
          </h1>
          <div className="flex flex-col sm:flex-row">
            <div className="text-white text-center p-3">
              <h1 className="text-5xl font-bold font-serif mb-5">388,864+</h1>
              <p className="text-2xl">
                Jobs Created across the participanting communites
              </p>
            </div>
            <div className="text-white text-center p-3">
              <h1 className="text-5xl font-bold font-serif mb-5">6411+</h1>
              <p className="text-2xl">Farmers Trained on GAP across the Zone</p>
            </div>
            <div className="text-white text-center p-3">
              <h1 className="text-5xl font-bold font-serif mb-5">1,800+</h1>
              <p className="text-2xl">
                Women Trained on food Processing across the Zone
              </p>
            </div>
            <div className="text-white text-center p-3">
              <h1 className="text-5xl font-bold font-serif mb-5">7,926+</h1>
              <p className="text-2xl">Youths Trained across the Zone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Images */}
      <section className="mt-10">
        <div>
          <p className="text-4xl uppercase text-center text-gray-500">
            Infrastructure
          </p>
          <hr className="w-2/4 mx-auto mt-3 border-red-500" />
        </div>
        <div className="mt-10">
          <p className="text-4xl">
            Completed <span className="text-atasp-light-green">Building</span>{" "}
            Works
          </p>
          <div className="flex mt-5">
            <div className="w-full h-fu2ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {infraRandPics.map((item, index) => {
                const swipeLeft = () => {};

                const [showModal, setShowModal] = useState(true);
                const [imageSource, setImageSource] = useState("");

                const getModalImage = () => {
                  if (showModal) {
                    setShowModal(false);
                    setImageSource(item.pic);
                  }
                };

                return (
                  <div
                    key={index}
                    onClick={getModalImage}
                    className="relative flex-1 w-full sm:w-2/4 md:w-1/4 inline-block mx-1 cursor-pointer overflow-hidden whitespace-normal shadow-sm shadow-black"
                  >
                    {/* Trigger the Modal */}
                    <img
                      className="hover:opacity-70 transition duration-300"
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

                    {/* The Modal */}
                    <div
                      className={`${
                        showModal ? "hidden" : "block"
                      } fixed z-[30] pt-24 left-0 top-0 w-full h-full overflow-auto bg-black/90`}
                    >
                      {/* The Close Button */}
                      <span
                        onClick={() => {
                          setShowModal(true);
                        }}
                        className="p-5 absolute top-[15px] right-[35px] text-[#f1f1f1] text-[40px]"
                      >
                        &times;
                      </span>

                      {/* Modal Content (The Image) */}
                      <img
                        src={`images/buildings/randomInfraPics/${imageSource}`}
                        className="modal-content m-auto block w-full md:max-w-[700px]"
                        alt=""
                      />

                      {/* Modal Caption (Image Text) */}
                      <div className="caption m-auto block w-full md:max-w-[700px] text-center text-gray-200 py-5 px-0">
                        {item.description}
                      </div>
                    </div>

                    <button
                      onClick={swipeLeft}
                      className="absolute left-0 bg-atasp-light-green opacity-50 p-2 text-white rounded-r-lg hover:opacity-100 top-28 lg:top-auto"
                    >
                      left
                    </button>
                    <button className="absolute right-0 bg-atasp-light-green opacity-50 p-2 text-white rounded-l-lg hover:opacity-100 top-28 lg:top-auto">
                      right
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-4xl">
            Market <span className="text-atasp-light-green">Sheds</span> in Use
          </p>
          <div className="flex mt-5">
            <div className="w-full h-fu2ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {utilizedMarkets.map((item) => (
                <div className="flex-1 w-full sm:w-2/4 md:w-1/4 inline-block mx-1 hover:scale-100 ease-in-out duration-150 cursor-pointer overflow-hidden whitespace-normal shadow-sm shadow-black">
                  <img
                    className=""
                    src={`images/buildings/utilizedMarkets/${item.pic}`}
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
        </div>

        <div className="mt-10">
          <p className="text-4xl">
            Kware <span className="text-atasp-light-green">Irrigation</span>{" "}
            Scheme
          </p>
          <div className="flex mt-5">
            <div className="w-full h-fu2ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {kwareIrrigScheme.map((item) => (
                <div className="flex-1 w-full sm:w-2/4 md:w-1/4 inline-block mx-1 hover:scale-100 ease-in-out duration-150 cursor-pointer overflow-hidden whitespace-normal shadow-sm shadow-black">
                  <img
                    className=""
                    src={`images/buildings/kwareIrrigationScheme/${item.pic}`}
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
        </div>

        <div className="mt-10">
          <p className="text-4xl">
            <span className="text-atasp-light-green">Completed</span> Access
            Roads
          </p>
          <div className="flex mt-5">
            <div className="w-full h-fu2ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {roadPictures.map((item) => (
                <div className="flex-1 w-full sm:w-2/4 md:w-1/4 inline-block mx-1 hover:scale-100 ease-in-out duration-150 cursor-pointer overflow-hidden whitespace-normal shadow-sm shadow-black">
                  <img className="" src={`images/roads/${item.pic}`} alt="/" />
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
        </div>

        <div className="mt-10">
          <p className="text-4xl uppercase text-center text-gray-500">
            Outreach
          </p>
          <hr className="w-2/4 mx-auto mt-3 border-red-500" />
        </div>

        <div className="mt-10">
          <p className="text-4xl">
            <span className="text-atasp-light-green">Seed</span>Distribution
          </p>
          <div className="flex mt-5">
            <div className="w-full h-fu2ll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {riceDistPictures.map((item) => (
                <div className="flex-1 w-full sm:w-2/4 md:w-1/4 inline-block mx-1 hover:scale-100 ease-in-out duration-150 cursor-pointer overflow-hidden whitespace-normal shadow-sm shadow-black">
                  <img
                    className=""
                    src={`images/outreach/${item.pic}`}
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
        </div>
      </section>
      {/* {{!-- ATASP-1 Objectives and Goals --}} */}

      <section className="p-5 w-full lg:w-full mx-auto">
        <h2 className="text-4xl pb-5">
          <span className="text-atasp-mid-green">ATASP-1</span> Objectives
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3">
          <div className="lg:w-3/12 px-5 lg:px-2 flex-1 shadow-sm shadow-gray-700 bg-purple-200 mx-auto rounded-tl-3xl rounded-br-3xl cursor-pointer hover:scale-100 ease-out duration-300">
            <h2 className="p-2 text-2xl uppercase text-gray-700 underline">
              {objectify.purpose.objectiveHeading}
            </h2>
            <p className="p-2 text-center md:text-left pb-5">
              {objectify.purpose.objectiveBody}
            </p>
          </div>

          <div className="lg:w-3/12 flex-1 px-5 lg:px-2 shadow-sm shadow-gray-700 bg-red-200 rounded-tr-3xl rounded-bl-3xl">
            <h2 className="p-2 text-2xl uppercase text-gray-700 underline">
              {objectify.goal.objectiveHeading}
            </h2>
            <p className="p-2 text-center md:text-left pb-5">
              {objectify.goal.objectiveBody}
            </p>
          </div>

          <div className="lg:w-3/12 flex-1 px-5 lg:px-2 shadow-sm shadow-gray-700 bg-green-100 rounded-tl-3xl rounded-br-3xl">
            <h2 className="p-2 text-2xl uppercase text-gray-700 underline">
              {objectify.objective.objectiveHeading}
            </h2>
            <p className="p-2 text-center md:text-left pb-5">
              {objectify.objective.objectiveBody}
            </p>
          </div>

          <div className="lg:w-3/12 flex-1 px-5 lg:px-2 shadow-sm shadow-gray-700 bg-yellow-100 rounded-tr-3xl rounded-bl-3xl">
            <h2 className="p-2 text-2xl uppercase text-gray-700 underline">
              {objectify.impact.objectiveHeading}
            </h2>
            <p className="p-2 text-center md:text-left pb-5">
              {objectify.impact.objectiveBody}
            </p>
          </div>
        </div>
      </section>

      {/* {{!-- Testimony --}} */}

      <Testimony />

      {/* {{!-- Social Infrastructure Contracts --}} */}
      <section className="py-20 mt-20">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-atasp-mid-red">Contracts</h1>
          <p className="text-center text-atasp-dark-green">
            Construction of Blocks of Primary Schools, Health Clinic Centers,
            Market Sheds, &amp; Technology Demonstration Centers Accross Kebbi
            and Sokoto States
          </p>
        </div>
      </section>

      {/* {{!-- section for funding and implementing agencies --}} */}
      <section className="p-5 flex flex-col md:flex-row justify-center items-center gap-6 bg-gray-100">
        <div className="w-2/3 h-1/3 mb-10 md:w-1/6 md:h-1/6 flex-1">
          <div className="w-full h-full mb-10 md:w-full md:h-1/3">
            <a href="www.afdb.org">
              <img src="images/logos/afdb.png" alt="African Dev. Bank Logo" />
            </a>
          </div>
          <p>AfDB is the Funding Institution to the Program</p>
        </div>

        <div className="w-2/3 h-1/3 mb-10 md:w-1/6 md:h-1/6 flex-1">
          <div className="w-full h-full mb-10 md:w-full md:h-full">
            <a href="www.fmard.gov.ng">
              <img src="images/logos/fmard.jpg" alt="FMARD Logo" />
            </a>
          </div>
          <p>FMARD is the Lead Program Agency</p>
        </div>

        <div className="w-2/3 h-1/3 mb-10 md:w-1/6 md:h-1/6 flex-1">
          <div className="w-full h-full mb-10 md:w-full md:h-1/3">
            <a href="www.icrisat.org">
              <img src="images/logos/ICRISAT.png" alt="ICRISAT Logo" />
            </a>
          </div>
          <p>
            ICRISAT implements the Sorghum commodity component in the Outreach
            Program
          </p>
        </div>

        <div className="w-2/3 h-1/3 mb-10 md:w-1/6 md:h-1/6 flex-1">
          <div className="w-full h-full mb-10 md:w-full md:h-1/3">
            <a href="www.iita.org">
              <img src="images/logos/iita1.png" alt="IITA Logo" />
            </a>
          </div>
          <p>
            IITA coordinates the Outreach activities specified in the component
            2 of the Program
          </p>
        </div>

        <div className="w-2/3 h-1/3 mb-10 md:w-1/6 md:h-1/6 flex-1">
          <div className="w-full h-full mb-10 md:w-full md:h-1/3">
            <a href="www.africarice.org">
              <img src="images/logos/AfricaRice.png" alt="AfricaRice Logo" />
            </a>
          </div>
          <p>
            AfricaRice is the Agency implementing the Rice commodity component
            of the Program
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
