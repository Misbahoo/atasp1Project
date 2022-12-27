const Footer = () => {
  const date = new Date();

  return (
    <footer className="w-full border-t-3 border-atasp-mid-red justify-center">
      <div className="flex flex-col flex-1 md:flex-row py-10 items-center justify-center bg-atasp-mid-green gap-12">
        <ul className="text-white text-center md:text-left">
          <li className="pb-2">Building Works</li>
          <li className="pb-2">Water Works</li>
          <li className="pb-2">Rural Access Roads</li>
          <li className="pb-2">Irrigation Schemes</li>
        </ul>
        <ul className="text-white text-center md:text-left">
          <li className="pb-2">Rice Value Chain</li>
          <li className="pb-2">Sorghu Value Chain</li>
          <li className="pb-2">Cassava Value Chain</li>
          <li className="pb-2">Trainings</li>
          <li className="pb-2">Field Days</li>
        </ul>
        <ul className="text-white text-center md:text-left">
          <li className="pb-2">Project Mission</li>
          <li className="pb-2">Sensitizations</li>
          <li className="pb-2">Project Management</li>
        </ul>
      </div>
      <div className="p-3 bg-atasp-dark-green items-center my-0">
        <p className="text-center text-white">
          {`ATASP-1 Kebbi - Sokoto Zone - All rights reserved & Date ${date.getFullYear()}`}
        </p>

        <div className="p-5 w-28 mx-auto mt-3">
          <img
            className="mx-auto"
            src="images/logos/atasp1.png"
            alt="ATASP-1 Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
