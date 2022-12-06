import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        className="flex flex-row my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col w-[240px] bg-[#382B47] py-10 px-4">
        <p className="text-[#F3C5FF] text-3xl font-bold text-center tracking-wide">
          musify
        </p>
        <NavLinks />
      </div>

      <div className="md:hidden absolute top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-gray-300"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      {mobileMenuOpen ? (
        <div className="md:hidden absolute w-2/3 h-screen z-10 backdrop-blur-lg bg-white/10 to=[#483d8b] py-10 px-6 animate-slideleft">
          <p className="text-white text-3xl font-bold text-center tracking-wide">
            musify
          </p>
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
