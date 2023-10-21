import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2, BsTwitch, BsWhatsapp } from "react-icons/bs";
import { FaFacebookMessenger, FaLocationArrow, FaMailchimp } from 'react-icons/fa';
function Footer() {
    return (
        <footer className="  bg-[#182233]   px-[5%]   md:px-[10%] text-white  mx-auto p-2  border-b border-bottom ">
            <div className="container mx-auto px-4 pt-8">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    {/* social Link and App */}
                    <div className='flex flex-col items-start  mt-2'>
                        <h1 className='text-design text-2xl mb-4 font-[Nunito] text-slate-200'>Friend IT Solution</h1>
                        <p>Stay Connected With Us</p>
                        <div className='flex justify-center items-center space-x-4 text-4xl py-3'>
                            <Link href={"https://web.facebook.com/toufiqcse7/"} className=''><BsFacebook className='text-blue-600 border border-all p-1 hover:text-blue-700 transition-colors duration-300' /></Link>
                            <Link href={"https://www.instagram.com/frontend_webdesignmernstack/"}><BsInstagram className='text-pink-600 border border-all p-1 hover:text-pink-700 transition-colors duration-300' /></Link>
                            <Link href={"https://www.linkedin.com/in/toufiqul-isalm-b7a298247/"}><BsLinkedin className='text-sky-600 border border-all p-1 hover:text-sky-700 transition-colors duration-300' /></Link>
                            <Link href={"mailto:toufiqcse7@gmail.com"}><BsGoogle className='text-red-600 border border-all p-1 hover:text-red-700 transition-colors duration-300' /></Link>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider my-2 md:hidden"></div>
                    {/* quick link */}
                    <div className="flex flex-col items-start">
                        <p className='text-xl mb-4 font-medium  text-slate-200 font-[Nunito]'>Quick Link</p>
                        <div className='flex flex-col items-start gap-3'>
                            <Link href={"/#"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>Web Design</Link>
                            <Link href={"/#"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>Wordpress Development</Link>
                            <Link href={"/#"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>Digital Marketing</Link>
                            <Link href={"/#"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>Web Analyst</Link>
                            <Link href={"/#"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>SEO</Link>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider my-2 md:hidden"></div>
                    {/* contact */}
                    <div className="flex flex-col items-start">
                        <p className='text-xl mb-4 font-medium  text-slate-200 font-[Nunito]'>Contact</p>
                        <div className='flex flex-col items-start gap-3'>
                            <Link href={"https://wa.me/+8801750119633"} className='flex justify-start items-center text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>
                                <BsWhatsapp className='mr-2 text-green-500'></BsWhatsapp>
                                <p>+880 1750-119633</p>
                            </Link>
                            <Link href={"mailto:toufiqcse7@gmail.com"} className='flex justify-start items-center text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>
                                <BsMailbox2 className='mr-2 text-red-500'></BsMailbox2>
                                <p>support@FriendsItSolution</p>
                            </Link>
                            <Link href={"https://m.me/toufiqcse7"} className='flex justify-start items-center text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>
                                <FaFacebookMessenger className='mr-2 text-purple-400'></FaFacebookMessenger>
                                <p>Messenger</p>
                            </Link>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider my-2 md:hidden"></div>
                    {/* company */}
                    <div className="flex flex-col items-start">
                        <p className='text-xl mb-4 font-medium  text-slate-200 font-[Nunito]'>Company</p>
                        <div className='flex flex-col items-start gap-3'>
                            <Link href={"/about-us"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>About us</Link>
                            <Link href={"/privacy-policy"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>Privacy Policy</Link>
                            <Link href={"/terms-condition"} className='text-slate-200 font-thin hover:font-light transition-all duration-200 link-color-hover'>Terms & condition</Link>
                        </div>
                    </div>
                </div>
                {/* diviver */}
                <div className="divider my-6"></div>

                <p className="text-center text-white font-thin pb-2">&copy; 2023 Friends IT Solution. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;





