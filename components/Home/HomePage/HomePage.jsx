'use-client'
import React from "react";
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsTwitch } from "react-icons/bs";
import AutoTyped from "../../AutoTyped/AutoTyped";
import Slider from "./Slider";
import Link from "next/link";

const PDF_FILE_URL = "resume.pdf"

const HomePage = () => {
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="relative -mt-16 w-full overflow-hidden overflow-x-clip bg-[#0B1120]  lg:h-screen border-b border-bottom ">
      <>
        <div className="px-[5%] pt-16 md:pt-[10rem] md:px-[10%] text-white  mx-auto p-2">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mx-auto"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-once="false" >
              <>
                <h3
                  className="text-xl font-medium md:mb-2 mb-1 text-center md:text-left">Hello !! 👋 <span className="inline-block ">We are</span> </h3>
                <h1
                  className="text-3xl font-semibold md:mb-2 mb-1 text-center md:text-left"> <span className="hidden md:visible">Creator of</span> Friends IT Solution </h1>
                <h3

                  className="text-xl font-medium md:mb-2 mb-2 leading-none">

                  <span className="text-cyan-400 font-bold  flex justify-center md:justify-start">
                    <AutoTyped />
                  </span>
                </h3>
                <p
                  className="first-letter:text-3xl first-letter:text-green-500 md:text-xl md:mb-2 mb-1   font-[cursive] leading-4 md:leading-6  md:text-left text-justify text-slate-200">
                  We offer a comprehensive range of services to empower your digital presence. From web development, where we craft user-friendly and responsive websites, to digital marketing strategies tailored to boost your online visibility. We also specialize in Google Analytics,Pixel conversion API. With our expertise, we are here to help you navigate the digital landscape, optimize your web presence, and drive success for your business
                </p>
              </>
              <div
                className=" ">
                <a
                  className="inline-flex w-8 h-8 bg-transparent border-2 border-cyan-400 rounded-full text-sm  items-center justify-center my-6 mr-4 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-lg hover:shadow-cyan-400"
                  href="https://web.facebook.com/toufiqcse7/"
                >
                  <BsFacebook />
                </a>
                <a
                  className="w-8 h-8 bg-transparent border-2 border-cyan-500 rounded-full text-sm  justify-center hover:bg-cyan-500 hover:text-black transition duration-300
                text-cyan-500 items-center my-6 mx-4  inline-flex hover:shadow-lg hover:shadow-cyan-500"
                  href="https://www.instagram.com/frontend_webdesignmernstack/"
                >
                  <BsInstagram />
                </a>
                <a
                  className="w-8 h-8 bg-transparent border-2 border-cyan-500 rounded-full text-sm  justify-center hover:bg-cyan-500 hover:text-black transition duration-300
                text-cyan-500  items-center my-6 mx-4  inline-flex hover:shadow-lg hover:shadow-cyan-500"
                  href="https://www.linkedin.com/in/toufiqul-isalm-b7a298247/"
                >
                  <BsLinkedin />
                </a>
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-once="false"
                className="inline-block  bg-cyan-500 shadow-lg shadow-cyan-500 px-4 py-1 text-white rounded-md  border-none outline-none hover:rounded-full transition duration-500 hover:ring-2 hover:ring-green-400 z-99" onClick={() => {
                  handleDownload(PDF_FILE_URL);
                }}>Resume
              </button>
              <Link
                href="/contact"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-once="false"
                className="inline-block ml-2 bg-green-500 shadow-lg shadow-green-500 px-4 py-1 text-white rounded-md  border-none outline-none hover:rounded-full transition duration-500 hover:ring-2 hover:ring-cyan-400 z-99" >Hire Me
              </Link>
            </div>
            <div className="bg-color mx-auto w-full mb-4 z-99">
              <Slider />
            </div>
          </div>
        </div>
        <div className="z-10 absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-20 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-40 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
        <div className=" absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
      </>
    </div>
  );
};

export default HomePage;
