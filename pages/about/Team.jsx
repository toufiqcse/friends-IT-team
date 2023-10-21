import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamMember from ".";




const Team = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-[#0E1628]   px-[5%] py-6 md:px-[10%] text-white  mx-auto   border-b border-bottom">
      <p
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="3000"
        data-aos-once="false"
        className="text-design md:text-5xl text-3xl font-black pb-10 text-center"><>About Our Team</></p>
      <div className="bg-[#182233] rounded-lg">
        <TeamMember />
      </div >

    </div>

  );
}



export default Team

