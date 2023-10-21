import React from "react";
import { TypeAnimation } from "react-type-animation";


const AutoTyped = () => {
  return (

    <TypeAnimation
      sequence={[
        "We're Frontend Web Designer",
        1000,
        "We're Digital Marketer",
        1000,
        "We're Google Analytic Expert",
        1000,

      ]}
      speed={40}
      deletionSpeed={50}

      repeat={Infinity}
      className="md:text-3xl text-[16px] text-center md:text-left p-2 md:p-0"
    />

  );
};

export default AutoTyped;