import React, { useEffect, useState } from 'react';
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Education from '@/components/Educations/Education';
import Progress from '../progressbar';



const AboutMe = () => {
    const router = useRouter();
    const { id } = router.query;
    const [teamData, setTeamData] = useState(null);




    useEffect(() => {
        if (id) {
            // const apiUrl = `https://portfolio-express-server-iota.vercel.app/aboutTeam/${id}`;
            const apiUrl = `https://friends-it-team.vercel.app/api/members/${id}`;
            // const apiUrl = `http://localhost:3000/api/members/${id}`;
            axios
                .get(apiUrl)
                .then((response) => {
                    setTeamData(response.data);
                })
                .catch((error) => {
                    // Handle error
                });
        }
    }, [id]);

    if (!teamData) {
        return <div><LoaderSpinner /></div>;
    }

    return (
        <div className='bg-[#0E1628]   pt-6  text-white  mx-auto   border-b border-bottom'>
            <div className=' border-b border-bottom '>
                <div className='md:px-[10%] px-[5%] py-4'>
                    <h2
                        className='md:text-5xl text-3xl font-black pb-4 text-center'
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-once="false"
                    >About <span className='text-design '>{teamData.name}</span></h2>
                    <div className="divider my-3 "></div>

                    <div className='bg-[#182233] py-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 '>
                            <Image
                                data-aos="fade-left"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-once="false"
                                src={teamData.img}
                                className='rounded-full w-full mx-auto'
                                alt={teamData.name}
                                width={300}
                                height={200}
                                priority
                                quality={100}
                                style={{ width: "200px", height: "200px" }}
                            />
                            <div className='flex items-center justify-center'>
                                <p
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    data-aos-duration="1000"
                                    data-aos-once="false"
                                    className='text-justify px-2 md:px-6 first-letter:text-3xl first-letter:text-green-500 font-[cursive] text-xl text-slate-200'>{teamData.aboutMe}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-b border-bottom'>
                <Progress teamData={teamData} />
            </div>
            <div className=" border-b border-bottom">
                <Education teamData={teamData} />
            </div>
        </div>
    );
};

export default AboutMe;
