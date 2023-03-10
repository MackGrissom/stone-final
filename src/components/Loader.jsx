import {  GooeyCircleLoader, LinneardLoader, SpinningOrbitLoader } from "react-loaders-kit";
import React from "react";
import Typed from "react-typed";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#6D604D", "#f42e00", "#042549"],
  };

  return (
    <div className="loader">
      
        <GooeyCircleLoader {...loaderProps} />
        <Typed
          className="loader-text, text-white"
          strings={["Welcome To Precision Stoneworks.."]}
          typeSpeed={10}
          backSpeed={0}
        />
    </div>
  );
}

export default Loader;

