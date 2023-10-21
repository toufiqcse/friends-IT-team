'use-client'
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { useEffect } from 'react';



const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // data fetching function
    const fetchData = async (url) => {
        try {
            // Set loading state to true while fetching data
            const response = await axios.get(url);
            // Assuming your data is in response.data
            return response.data;
        } catch (error) {
            // Handle errors here, you can log them or show an error message
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        const apiUrl = 'https://portfolio-express-server-iota.vercel.app/projects';
        // const apiUrl = 'https://my-team-nine.vercel.app/api/projects';
        fetchData(apiUrl)
            .then((fetchedData) => {
                setData(fetchedData);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                setLoading(false); // Set loading to false on error
            });
    }, []);


    // filtering section function
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setIsMobileMenuOpen(false); // Close the mobile menu when a filter is selected
    };

    const filteredData = selectedFilter === 'All'
        ? data
        : data.filter(project => project.title.includes(selectedFilter));


    return (
        <div className="bg-[#0E1628]   px-[5%]  md:px-[10%] text-white  mx-auto   border-b border-bottom" id='projects'>
            <div className="container mx-auto text-center py-8">
                <h1
                    className='text-design md:text-5xl text-3xl font-black pb-4 text-center'
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >Finished Projects</h1>
                <div className="flex flex-col md:flex-row  space-x-4 pb-4 justify-center">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden bg-blue-500 text-white px-4 outline-none border-none py-2 rounded-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? 'Close' : `${selectedFilter}`}
                    </button>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden flex flex-col space-y-2">
                            <button
                                className={`${selectedFilter === 'All' ? 'bg-blue-500 outline-none border-none text-white' : 'bg-[#182233] outline-none border-none'
                                    } px-4 py-2 rounded-md transition-colors duration-300 mt-2 hover:bg-blue-500 hover:text-white outline-none border-none`}
                                onClick={() => handleFilterChange('All')}
                            >
                                All
                            </button>
                            {['React', 'Next', 'Redux', 'Landing page', 'JavaScript', 'Email-Template'].map((filter) => (
                                <button
                                    key={filter}
                                    className={`${selectedFilter === filter ? 'bg-blue-500 text-white' : 'bg-slate-700'
                                        } px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white`}
                                    onClick={() => handleFilterChange(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-col md:flex-row space-y-4 space-x-4 pb-4 justify-center">
                        <button
                            className={`${selectedFilter === 'All' ? 'bg-blue-500 text-white' : 'bg-[#182233]'
                                } px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white`}
                            onClick={() => handleFilterChange('All')}
                        >
                            All
                        </button>
                        {['React', 'Next', 'Redux', 'Landing page', 'JavaScript', 'Email-Template'].map((filter) => (
                            <button
                                key={filter}
                                className={`${selectedFilter === filter ? 'bg-blue-500 text-white' : 'bg-[#182233]'
                                    } px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white`}
                                onClick={() => handleFilterChange(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading status  */}
                {
                    loading ? (
                        <div className='relative '>
                            <LoaderSpinner />
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0 px-2 lg:px-0">

                                {filteredData.map((project) => (
                                    <div
                                        key={project.id}
                                    >
                                        <div className='card w-full bg-[#182233] shadow-xl mb-10 rounded-lg  aos-init aos-animate'
                                            data-aos="fade-up"
                                            data-aos-offset="200"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="600"
                                        >
                                            <div className='relative max-w-full md:h-[300px] h-[160px] overflow-hidden rounded-lg"'>
                                                <div className='h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-10rem)] rounded-lg'>
                                                    <Image width={300} height={300} src={project.project_img} priority className='w-full object-cover object-top rounded-lg' alt="" />
                                                </div>
                                            </div>
                                            <div className='card-body bg-[#182233]'>
                                                <h2 className=' md:text-4xl text-2xl text-design text-start'>{project.projectTitle}</h2>
                                                <p>{project.description}</p>
                                                <h2 className='text-2xl text-design text-start '>Features</h2>
                                                <ul className=''>
                                                    <li className='list-decimal  description' >{project.features[0]}</li>
                                                    <li className='list-decimal  description' >{project.features[1]}</li>

                                                </ul>
                                                <div className='lg:flex items-center my-3 gap-2 justify-center'>
                                                    {/* client site link */}
                                                    <a href={project.githubUrl} key={project.id}>
                                                        <div className='flex items-center hover:bg-[#9bc1dea9] transition-all duration-300 ease-in rounded-md  bg-[#0c2a50] p-3  my-3 lg:my-0 mx-3 text-[#EEF1FF]'>
                                                            <button className='mr-2 '>
                                                                Github Link
                                                            </button>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                        </div>
                                                    </a>
                                                    {/* live site link */}
                                                    <a href={project.liveLink}>
                                                        <div className='flex items-center hover:bg-[#9bc1dea9] transition-all duration-300 ease-in rounded-md  bg-[#0c2a50] p-3  my-3 lg:my-0 mx-3 text-[#EEF1FF]'>
                                                            <button className='mr-2 '>
                                                                Live Site Link
                                                            </button>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                                                        </div>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* ========== */}

                            </div>


                            <>


                            </>

                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;
