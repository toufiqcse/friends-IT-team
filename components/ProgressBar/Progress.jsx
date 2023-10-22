// pages/index.js

import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressbarChart';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Progress = ({ teamData }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const skills = teamData.WebDetails.skills
    const tools = teamData.WebDetails.tools
    const heading = teamData.WebDetails.headingLeft
    const headingR = teamData.WebDetails.headingRight

    return (
        <>



            <div className='bg-[#0E1628]   px-[5%]  md:px-[10%] text-white pb-8  mx-auto  border-b border-bottom data-aos'>
                <h1 className='heading text-design md:text-5xl text-3xl font-black py-6'
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-once="false"
                >Skills</h1>
                <div className='bg-[#182233] rounded-lg py-8 px-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div>
                            <h2 className='text-center text-2xl pb-4 '>{heading}</h2>
                            {
                                skills.map((skill) => (
                                    <ProgressBar skill={skill} key={skill.id} />
                                ))
                            }
                        </div>
                        <div>
                            <h2 className='text-center text-2xl pb-4'>{headingR}</h2>
                            {
                                tools.map((skill) => (
                                    <ProgressBar skill={skill} key={skill.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Progress;
