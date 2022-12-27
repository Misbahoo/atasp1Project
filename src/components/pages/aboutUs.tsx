import { Link } from "react-router-dom";

const AboutUs = () => (
  <div className="mt-10">
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <h1 className="text-2xl px-5">
          <span className="text-gray-600">about </span>{" "}
          <span className="text-atasp-mid-red font-bold">ATASP-1</span>
        </h1>
        <div className="my-5 px-5">
          <p className="text-gray-600 text-justify">
            The Agricultural Transformation Agenda Support Program, Phase One (
            <span className="text-atasp-mid-green font-bold">ATASP-1</span>) is
            a program developed by the African Development Bank (AfDB) in
            collaboration with the Federal Ministry of Agriculture and Rural
            Development (FMARD) to contribute to food and nutrition security,
            employment generation, and wealth creation along rice, cassava, and
            sorghum value chains. The Program was implemented over a period of 5
            years commencing March, 2015 in Four (4) Staple Crop Processing
            Zones (SCPZs) of Adani-Omor zone in Anambra and Enugu States,
            Bida-Badeggi zone in Niger State, Kano-Jigawa zone, and Kebbi -
            Sokoto. The Program which was lunched on 6th March, 2015 at the
            Internationl Institute of Tropical Agriculture (IITA) Abuja station
            will cover 30 LGAs across the participating States and will comprise
            three (3) complementary and mutually reinforcing components.
          </p>
        </div>
      </div>

      <div className="flex-1 px-5">
        <h1 className="text-2xl text-atasp-mid-green">Office Address</h1>
        <div className="my-5">
          <p className="text-gray-600">
            Akoko Plaza, Opposite New Centeral Bank Building, Emir Haruna
            Street, Birnin Kebbi, Kebbi State
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl md:w-2/4 text-gray-700 self-center mx-auto pb-3 px-3 mb-3">
        Program Components
      </h1>

      <div className="flex flex-col gap-12 justify-center items-center">
        <Link to="/infra" className="transition duration-300 md:w-3/4 lg:w-2/4">
          <div className="flex flex-col  md:flex-row">
            <div className="flex w-full md:w-2/5 justify-center items-center">
              <div className="flex w-11/12 flex-col justify-center items-center p-5 bg-red-600">
                <div className="flex w-24 h-24 bg-white rounded-full mx-auto justify-center items-center text-center bg-clip-content p-1 border-2 border-white">
                  <p className="text-5xl font-bold text-red-600">1</p>
                </div>
                <p className="text-lg text-center text-white">
                  Infrastructure Development
                </p>
              </div>
            </div>
            <div className="p-5 w-11/12 md:w-3/5 bg-white mx-auto shadow-lg hover:shadow-none">
              <p className="text-gray-700">
                Rehabilitation of agricultural and ancillary social
                infrastructure including 1300km of irrigation water coneyance
                canals, 167 &amp; 120 units of hydraulic structures in Kebbi
                &amp; Sokoto respectively
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/outreach"
          className="transition duration-300 md:w-3/4 lg:w-2/4"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex w-full md:w-2/5 justify-center items-center">
              <div className="flex w-11/12 flex-col justify-center items-center p-5 bg-atasp-mid-green">
                <div className="flex w-24 h-24 bg-blue-900 rounded-full mx-auto justify-center items-center text-center bg-clip-content p-1 border-2 border-blue-900">
                  <p className="text-5xl font-bold text-atasp-mid-green">2</p>
                </div>
                <p className="text-lg text-center text-white">
                  Commodity Value Chain Development
                </p>
              </div>
            </div>
            <div className="p-5 w-11/12 mx-auto md:w-3/5 bg-white shadow-lg hover:shadow-none">
              <p className="text-gray-700">
                Capacity development of public (agriculture research, extension,
                relevant departments of Ministries, Private (MFIs, agro-dealers,
                etc.) and community-based (producers' organizations,
                cooperatives, inter-professional bodies, etc.)
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/programManagement"
          className="transition duration-300 md:w-3/4 lg:w-2/4"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex w-full md:w-2/5 justify-center items-center">
              <div className="flex w-11/12 flex-col justify-center items-center p-5 bg-gray-500">
                <div className="flex w-24 h-24 bg-gray-900 rounded-full mx-auto justify-center items-center text-center bg-clip-content p-1 border-2 border-black">
                  <p className="text-5xl font-bold text-gray-500">3</p>
                </div>
                <p className="text-lg text-center text-white">
                  Program Management
                </p>
              </div>
            </div>
            <div className="p-5 w-11/12 mx-auto md:w-3/5 bg-white shadow-lg hover:shadow-none">
              <p className="text-gray-700">
                Coordination and supervision of program activities; program day
                to day management based on adequate results measurement,
                disbursement, financial management, audit and reporting.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>

    <div className="py-10 px-8">
      <h1 className="text-4xl pb-5 text-gray-700">Program Beneficiaries</h1>
      <div>
        <p className="text-justify">
          The direct beneficiaries of{" "}
          <span className="text-atasp-mid-green font-bold">ATASP-1</span> are
          the 45,300 farmers and rural entrepreneurs participating in commercial
          agricultural value chains in the four Crop Processing Zones. This
          number is expected to increase significantly when other economically
          active value chain entrepreneurs enlist in the Program. The indirect
          beneficiaries include existing or potential small, medium, and
          large-scale entrepreneurs and business associations who provide
          services to rurla households. A further 200,000 rural youth (40% of
          them are estimated to be females) who presently lack employment
          opportunities in the adjoining farming communities will be especially
          targeted in the outreach program that will provide them with training
          and support to improve their lives through engagement in agriculture
          and related businesses.
        </p>
        <p className="text-justify">
          Each SCPZ has a Coordinator and support team who serve as
          intermediaries between the Program implementation Unit and the Program
          beneficiaries.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
