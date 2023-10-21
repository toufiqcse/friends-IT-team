'use-client';
import Footer from "@/components/Footer/Footer";
import Meta from "@/components/Meta";
import Nav from "@/components/Nav/Nav";
import TopScroll from "@/components/TopScroll/TopScroll";
import { Toaster } from "react-hot-toast";





const Layout = ({ children }) => {
    return (
        <div className="font-[Poppins]">
            <Meta />
            <Nav />
            {children}
            <Toaster />
            <Footer />
            <TopScroll />
        </div>
    );
};

export default Layout;

