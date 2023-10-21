'use-client'
import HomePage from "../HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Projects from "@/pages/projects";
import Service from "@/pages/services";
import Contact from "@/pages/contact";
import CompanyAbout from "@/pages/company-about";




const Homes = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <HomePage />
            <CompanyAbout />
            <Service />
            <Projects />
            <Contact />
        </>
    );
};

export default Homes;