import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const DefaultGallaryPics = () => {
  const { ref, inView, entry } = useInView();

  return (
    <>
      <p
        ref={ref}
        className={inView ? `border border-blue-400 rounded-lg p-4` : ""}
      >
        {inView ? `this is in view now aka ${inView}` : "this is of screen"}
      </p>

      <div className="flex flex-row gap-3 mt-10 mx-auto w-4/6 justify-center">
        <p
          className="border border-red-400 rounded-lg p-4"
          title="wait for animation"
        >
          Animations
        </p>
        <p className="border border-red-400 rounded-lg p-4">Animations</p>
        <p className="border border-red-400 rounded-lg p-4">Animations</p>
        <p className="border border-red-400 rounded-lg p-4">Animations</p>
        <p className="border border-red-400 rounded-lg p-4">Animations</p>
        <a
          href="images/buildings/kwareIrrigationScheme/randInfraPic1.png"
          download
        >
          Download
        </a>
      </div>
      <div>
        <p>Some Animations</p>
        <p>Some Animations</p>
        <p>Some Animations</p>
        <p>Some Animations</p>
        <p>Some Animations</p>
      </div>
    </>
  );
};

export default DefaultGallaryPics;
