"use-client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  BsFacebook,
  BsFillStarFill,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsStarFill,
  BsTwitch,
} from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const TeamMember = ({}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // data fetching function
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      toast.error("Data Fetching Error", {
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    const apiUrl = "https://portfolio-express-server-iota.vercel.app/aboutTeam";
    // const apiUrl = "http://localhost:3000/api/members";
    fetchData(apiUrl)
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={true}
        autoplay={{
          delay: 60000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((team, i) => (
          <SwiperSlide key={i}>
            <div
              className="main "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="slide-container swiper">
                <div className="slide-content py-6">
                  <div className="card-wrapper swiper-wrapper relative cursor-pointer">
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                          <Image
                            src={team.img}
                            quality={100}
                            style={{
                              objectFit: "cover",
                            }}
                            width={150}
                            height={150}
                            priority
                            alt="web-dev-slider"
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content ">
                        <div className="py-4 mt-2 flex justify-center items-center flex-col">
                          <h2 className="text-xl text-slate-800 font-semibold leading-10">
                            {team.name}
                          </h2>
                          <p className="text-black text-center">{team.title}</p>
                          <span className="flex pt-2 space-x-1">
                            <BsFillStarFill className="text-yellow-500" />
                            <BsFillStarFill className="text-yellow-500" />
                            <BsFillStarFill className="text-yellow-500" />
                            <BsFillStarFill className="text-yellow-500" />
                            <BsFillStarFill className="text-yellow-500" />
                          </span>
                        </div>

                        <div className="flex justify-center items-center">
                          <Link
                            // href={`/about/[id]`}
                            href={`/about/${team.name}`}
                            passHref
                            className="button px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all 0.3s ease-in hover:bg-gradient-to-l hover:from-violet-600 hover:to-indigo-600 rounded-full border-none outline-none"
                          >
                            About Me
                          </Link>
                          <Link
                            href="/contact"
                            className="button px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all 0.3s ease-in hover:bg-gradient-to-l hover:from-violet-600 hover:to-indigo-600 rounded-full border-none outline-none"
                          >
                            Hire Me
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col absolute right-5 top-7 justify-center items-center text-slate-400 text-xl cursor-pointer">
                        <Link
                          className="hover:text-slate-200 mb-4"
                          href={team.socialLink.facebook}
                        >
                          {" "}
                          <BsFacebook />
                        </Link>
                        <Link
                          className="hover:text-slate-200 mb-4"
                          href={team.socialLink.instagram}
                        >
                          {" "}
                          <BsInstagram />
                        </Link>
                        <Link
                          className="hover:text-slate-200"
                          href={team.socialLink.linkdein}
                        >
                          {" "}
                          <BsLinkedin />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamMember;
