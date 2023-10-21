import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Nav = () => {
  // set nav responsive
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  // data load from api
  const [headers, setHeaders] = useState([]);
  const url = "navmenu.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHeaders(data));
  }, []);

  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuItemClick = (id) => {
    setActiveMenu(id);
  };

  return (
    <>
      <div className={`bg-[#0B1120] border-bottom border-b  backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 fixed_header ${isSticky ? 'sticky border-b border-bottom  top-0' : ''}`}>
        <div className="max-w-9xl mx-auto sm:px-4 lg:px-0">
          <div className="flex px-[10%] items-center justify-between py-4 gap-2">
            {/* logo section */}
            <div
              className="flex-shrink-0">
              <a href={"/"} className="md:text-3xl text-2xl font-bold text-design  flex items-center">
                <p>Friends IT Solutions</p>
              </a>
            </div>
            {/* link for desktop view */}
            <div className="hidden md:block">
              <div
                className="ml-4 flex items-center md:ml-6">
                {headers.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    className={`px-3 py-2  font-medium  transition duration-50 ${activeMenu === link.id
                      ?
                      "text-slate-100 text-[1.3rem] border-b-2 border-green-500 last-of-type:border-none last-of-type:bg-green-500 last-of-type:rounded-md"
                      :
                      "text-white hover:text-cyan-400 text-xl last-of-type:bg-green-500 last-of-type:rounded-md "
                      }`}
                    onClick={() => handleMenuItemClick(link.id)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className=" flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-200 focus:outline-none focus:bg-cyan-500 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6"></FaTimes>
                ) : (
                  <FaBars className="w-6 h-6"></FaBars>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-700 border-b border-cyan-400 h-auto">
            <div

              className="px-[10%] pt-2 pb-3">
              {headers.map((link) => (

                <Link
                  key={link.id}
                  href={link.url}
                  className={`flex flex-col items-start px-2 justify-start py-2  font-medium  transition-all duration-300 ${activeMenu === link.id
                    ?
                    "text-slate-100 text-[1.4rem] border-b-2 border-green-500 last-of-type:border-none last-of-type:bg-green-500 last-of-type:rounded-md  last-of-type:w-[110px]"
                    :
                    "flex flex-col items-start px-2 justify-start text-white hover:text-cyan-400 text-xl last-of-type:bg-green-500 rounded-md  last-of-type:w-[110px]"
                    }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;