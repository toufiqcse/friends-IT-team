import React from 'react';

import Image from 'next/image';
import ContactForms from './ContactForms';


const Contact = () => {
    return (
        <div id='contact' className="bg-[#0E1628]   px-[5%]  md:px-[10%] text-white  mx-auto   border-b border-bottom " >
            <div className='container mx-auto text-center  py-4 md:py-8'>
                <h2 className="text-design text-3xl md:text-5xl font-black pb-8"
                    data-aos="fade-top"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >Contact Me</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4'>
                    <div>
                        <ContactForms />
                    </div>
                    <div>
                        <Image src="https://thecapplug.com/img/cms/94599-contact-us.gif" alt="" width={400} height={300} className='rounded-md md:h-[450px] h-[300px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;