import Image from "next/image"
import Team from "../about/Team"

const CompanyAbout = ({ }) => {
    return (
        <>
            <div className="bg-[#0E1628]     text-white  mx-auto ">
                <p
                    data-aos="fade-top"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className="text-design md:text-5xl text-3xl font-black py-6 text-center"><>About Us</></p>
                <div className="bg-[#182233]  py-3 px-[5%] md:px-[10%]">
                    {/* web */}
                    <div
                        data-aos="fade-top"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000"
                        className="flex justify-evenly items-center gap-16 py-6 flex-wrap md:flex-nowrap">
                        <Image
                            src={"/about-web-dev.webp"}
                            alt="WebDev about"
                            quality={100}
                            width={300}
                            height={300}
                            priority={true}

                            key={`image`}
                            style={{ objectFit: "cover", width: "auto", height: "auto" }}

                        />
                        <div className="">
                            <h1 className=" text-xl md:text-3xl text-slate-300 font-medium pb-6 font-[Nunito]">Web Development</h1>
                            <p className="font-thin text-xl text-slate-400 font-[cursive] text-justify">At Friends IT Solution, we are your trusted partner for comprehensive web solutions. Our team of experts specializes in frontend web development, ensuring that your online presence is not just visually appealing but also highly functional. We craft websites that leave a lasting impression.</p>
                        </div>
                    </div>
                    <div

                        className="divider my-2 md:hidden"></div>
                    {/* web anlyst */}
                    <div
                        data-aos="fade-top"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="flex justify-evenly items-center flex-wrap md:flex-nowrap gap-16 py-10">

                        <div className="">
                            <h1 className=" text-xl md:text-3xl text-slate-300 font-medium pb-6 font-[Nunito]">Web Analyst & Conversion Api</h1>
                            <p className="font-thin text-xl font-[cursive] text-justify text-slate-400">Harness the power of data with our web analysts. We dive deep into the numbers to provide actionable insights, helping you make informed decisions that lead to growth and success.</p>
                        </div>
                        <Image
                            src={"/about-web-analyst.webp"}
                            alt="WebDev about"
                            quality={100}
                            width={300}
                            height={300}
                            priority={true}

                            key={`image`}
                            style={{ objectFit: "cover", width: "auto", height: "auto" }}
                        />
                    </div>
                    <div className="divider my-2 md:hidden"></div>
                    {/* digital maekting */}
                    <div
                        data-aos="fade-top"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="flex justify-evenly items-center flex-wrap md:flex-nowrap gap-16 py-10">
                        <Image
                            src={"/about-dm.webp"}
                            alt="WebDev about"
                            quality={100}
                            width={300}
                            height={300}
                            priority={true}

                            key={`image`}
                            style={{ objectFit: "cover", width: "auto", height: "auto" }}

                        />
                        <div className="">
                            <h1 className=" text-xl md:text-3xl text-slate-300 font-medium pb-6 font-[Nunito]">Digital Marketing</h1>
                            <p className="font-thin text-xl font-[cursive] text-justify text-slate-400">Our digital marketing experts are here to supercharge your online reach. We will help you navigate the ever-evolving landscape of SEO, social media, and paid advertising, driving targeted traffic and boosting your brands visibility.</p>
                        </div>
                    </div>
                    <div className="divider my-2 md:hidden"></div>
                    {/* SEO */}
                    <div
                        data-aos="fade-top"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="flex justify-evenly items-center flex-wrap md:flex-nowrap gap-16 py-10">
                        <div className="">
                            <h1 className=" text-xl md:text-3xl text-slate-300 font-medium pb-6 font-[Nunito]">SEO Expert</h1>
                            <p className="font-thin text-xl font-[cursive] text-justify text-slate-400">SEO, or Search Engine Optimization, is a crucial digital marketing service aimed at enhancing a websites visibility on search engines like Google, Bing, and Yahoo. By employing a range of strategic techniques and best practices, SEO professionals work to improve a websites ranking in search engine results pages (SERPs).</p>
                        </div>
                        <Image
                            src={"/seo.png"}
                            alt="WebDev about"
                            quality={100}
                            width={300}
                            height={300}
                            priority={true}

                            key={`image`}
                            style={{ objectFit: "cover", width: "auto", height: "auto" }}

                        />
                    </div>
                </div >

            </div>
            <Team />
        </>
    )

}

export default CompanyAbout