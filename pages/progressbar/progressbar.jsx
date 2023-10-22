"use-client"
import React from 'react';

const ProgressBar = ({ skill }) => {
    const { name, level } = skill;
    const formattedName = `${name} ${level}`;

    let bgColorClass = '';

    if (level >= 80) {
        bgColorClass = 'bg-green-300';
    } else {
        bgColorClass = 'bg-gradient-to-r from-green-500 to-blue-500  '; // Default background color
    }

    return (
        <>
            <div className=''
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="false"

            >
                <span className='text-xl ml-1'>{name}</span>
                <div className='  text-white rounded-full bg-gray-300 mb-4 '>

                    <div
                        className={` py-[0.5em] rounded-full  relative ${bgColorClass}`}
                        style={{
                            width: level,
                        }}
                    >
                        <div className=' tooltip '>{level}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
