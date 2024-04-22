import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const navigation = ["About", "Project", "Blogs", "Testimonials", "Contact"];

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <nav
      className={`fixed flex w-full overflow-hidden z-50 justify-around items-center h-[3.5rem] border-b border-surface-dark ${
        openNavigation ? "bg-bg-dark" : "bg-bg-dark/90 backdrop-blur-sm"
      } `}
    >
      <a href="#profile">LEST</a>
      <nav
        className={`fixed gap-10 backdrop-blur-sm flex-col lg:flex-row lg:static lg:flex lg:bg-transparent ${
          openNavigation ? "flex" : "hidden"
        }`}
      >
        {navigation.map((item) => (
          <nav key={item} className="hover:text-primary-dark">
            <a href={"#" + item.toLowerCase()}>{item}</a>
          </nav>
        ))}
      </nav>

      <nav className="hidden lg:block w-[1rem]">
        <FontAwesomeIcon icon={faMoon} />
      </nav>

      <nav className={`lg:hidden`} onClick={toggleNavigation}>
        <FontAwesomeIcon icon={openNavigation ? faXmark : faBars} />
      </nav>
    </nav>
  );
};

export default Navbar;
