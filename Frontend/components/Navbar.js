"use client";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import HouseLogo from "../public/images/HouseLogo.png";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import DonateModal from "./DonateModal";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isBread, setIsBread] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const menuItems = [
    {
      href: "/parents",
      title: "Parents",
    },
    {
      href: "/educators",
      title: "Educators",
    },
    {
      href: "/school",
      title: "School",
    },
  ];

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`flex p-2 text-black justify-between items-center flex-col sm:flex-row gap-4 md:p-0 md:gap-12 box_shadow body_color ${
        visible ? "sticky top-0 z-50 transition-all duration-300" : "-top-24"
      }`}
    >
      <div className="flex justify-between w-full sm:w-auto items-center ">
        <Link href="/">
          <Image src={HouseLogo} alt="logo" height={50} width={130} />
        </Link>
        {/* Mobile Navigation */}
        {!isBread ? (
          <Bars3Icon
            className="h-8 w-8 mx-2 sm:hidden"
            onClick={() => setIsBread((prev) => !prev)}
          />
        ) : (
          <XMarkIcon
            className="h-8 w-8 mx-2 sm:hidden"
            onClick={() => setIsBread((prev) => !prev)}
          />
        )}
      </div>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex gap-5 flex-col items-center sm:flex-row sm:gap-4 md:gap-4 lg:gap-1` sm:mx-20 ">
        {menuItems.map(({ href, title }) => (
          <span key={title} className="group relative">
            <Link
              href={href}
              className="text-black font-bold decoration-transparent relative"
            >
              {title}
              <span className="absolute -bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left text-2xl"></span>
            </Link>
          </span>
        ))}
      </div>

      {/* Mobile Crumbread */}
      {isBread && (
        <div className="sm:hidden">
          <div className="flex p-3 gap-5 flex-col items-center sm:flex-row">
            {menuItems.map(({ href, title }) => (
              <span key={title} className="group relative">
                <Link
                  href={href}
                  className="text-black decoration-transparent relative"
                >
                  {title}
                  <span className="absolute -bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Donate Now Button */}
      {/* <div className="flex justify-center sm:block">
        <button
          onClick={handleOpenModal}
          className={`
            px-4 py-2 rounded-full 
            flex items-center gap-2 
            text-slate-500
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            transition-all
            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-green-800
          `}
        >
          <FiHeart />
          <span className="font-bold">Donate Now</span>
        </button>
      </div> */}
      <DonateModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </nav>
  );
};

export default Navbar;
