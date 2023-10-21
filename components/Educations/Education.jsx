import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = ({ teamData }) => {

  const experiences = teamData.experience

  return (
    <div className=' bg-[#0E1628]   px-[5%]  md:px-[10%] text-white  mx-auto   border-b border-bottom'>
      <div className='container mx-auto text-center py-8'>
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="3000"
          data-aos-once="false"
          className="text-design md:text-5xl text-3xl font-black pb-4 text-center"><>Experience</></p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-6 "

        >
          {
            experiences.map((exp) => (

              <div key={exp.id}
                className='education-box'
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="false"
              >
                <i>
                  <FaGraduationCap />
                </i>
                <span className='text-2xl font-bold text-white'>{exp.year}</span>
                <h3 className='font-bold text-cyan-400 '>{exp.platform}</h3>
                <h3 className='font-bold text-[#5dc418]'>{exp.CourseTitle}</h3>
              </div>
            ))
          }
        </div>

      </div>

    </div>



  );
};

export default Education;