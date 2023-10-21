import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Service = () => {
    return (
        <section id='services' className="bg-[#0E1628]   text-white  mx-auto   border-b border-bottom">
            <div className="container mx-auto text-center py-8">
                <h2
                    className="text-design text-3xl md:text-5xl font-black pb-4"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="3000"
                    data-aos-once="false"
                >Services</h2>
                {/* <p className="text-lg mb-4 text-white px-[5%] md:px-[10%]">
                    We offer a range of services to help you establish a strong online presence. Explore our expertise in Frontend Web Development, Web Design, Digital Marketing, and WordPress Development, all beautifully crafted with Bootstrap, Tailwind CSS, Material UI, and Styled Components.
                </p> */}

                <div className="px-[5%] md:px-[10%] bg-[#182233] py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="3000"
                        data-aos-once="false">
                        {/* digital marketing */}
                        <div className="px-4 py-4 bg-white shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 rounded-br-3xl rounded-tl-3xl hover:text-slate-200 text-slate-600">
                            <div className=''>
                                <Image
                                    src='/about-dm.png'
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                        width: "411px",
                                        height: "205px"
                                    }}
                                    width={390}
                                    height={150}
                                    priority
                                    alt='Digital Marketing'
                                    className="inline-flex justify-center"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-4"> Data Driven Digital Marketing</h3>
                                <p className="  mb-4">
                                    Elevate your brands online presence with our Digital Marketing strategies, complemented by visually appealing materials designed using Email marketing, Lead generation.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Link href="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e] btn-design ">Learn More</Link>
                            </div>
                        </div>

                        {/* web design */}
                        <div className=" px-4 py-4 bg-white shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 rounded-tr-3xl rounded-bl-3xl hover:text-slate-200 text-slate-600 ">
                            <div>
                                <Image
                                    src={"/web-design-logo.webp"}
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                        width: "411px",
                                        height: "205px"
                                    }}
                                    width={390}
                                    height={150}
                                    priority
                                    alt='web-dev'
                                    className="inline-flex justify-center"

                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend Web Development</h3>
                                <p className=" mb-4 text-justify">
                                    Our frontend Web Development & Web Design services are powered by Tailwind CSS, Material UI ensuring that your website not only looks stunning but also provides an exceptional user experience on all devices.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Link href="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e]  btn-design">Learn More</Link>
                            </div>
                        </div>

                        {/* WordPress Development */}
                        <div className="px-4 py-4 bg-white shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 rounded-tr-3xl rounded-bl-3xl hover:text-slate-200 text-slate-600">
                            <div>
                                <Image
                                    src={"/wordpress.png"}
                                    className="inline-flex justify-center"
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                        width: "190px",
                                        height: "190px"
                                    }}
                                    width={390}
                                    height={150}
                                    priority
                                    alt='wordpress development'

                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">WordPress Development</h3>
                                <p className=" mb-4">
                                    Our WordPress Development services harness the power of unique and functional websites that resonate with your audience.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Link href="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e] btn-design">Learn More</Link>
                            </div>
                        </div>


                        {/* Web analytics Development */}
                        <div className="px-4 py-4 bg-white shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-blue-600 hover:to-sky-400 rounded-br-3xl rounded-tl-3xl hover:text-slate-200 text-slate-600">
                            <div>
                                <Image
                                    src={"/abou-web-ana.png"}
                                    className="inline-flex justify-center"
                                    quality={100}
                                    style={{
                                        objectFit: 'cover',
                                        width: "290px",
                                        height: "190px"
                                    }}
                                    width={390}
                                    height={150}
                                    priority
                                    alt='wordpress development'

                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Analyst & conversion Tracking</h3>
                                <p className=" mb-4">
                                    A web analyst plays a crucial role in the world of digital marketing and online business. We are provide service for collecting, analyzing, and interpreting data related to a websites performance and user behavior. One of the key tasks within our domain is conversion tracking
                                </p>
                            </div>
                            <div className="mt-auto">
                                <Link href="#" className="bg-gradient-to-r from-[#06b6d4] to-[#22c55e] px-4 py-2 rounded-md text-gray-900 hover:bg-[#22c55e] btn-design">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
