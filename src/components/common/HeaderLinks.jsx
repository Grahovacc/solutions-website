import React from "react";
import { links } from "./helper";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderLinks = ({ setIsLeftMenu, locomotiveRef }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (url) => {
    setIsLeftMenu(false);
    setTimeout(() => {
      if (locomotiveRef.current) {
        locomotiveRef.current.scrollTo(url);
      } else {
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  const handleClick = (event, url) => {
    if (url.startsWith("#")) {
      event.preventDefault();

      if (location.pathname === "/") {
        handleScroll(url);
      } else {
        navigate(`/${url}`);
      }
    } else if (!url.startsWith("http")) {
      event.preventDefault();
      navigate(url);
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="md:px-[15px] md:mb-0 mb-[15px] last:mb-0">
          <a
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : "_self"}
            onClick={(event) => handleClick(event, link.url)}
            className="md:inline-block block cursor-pointer leading-[16px] py-[6px] px-4 text-black text-sm font-medium no-underline hover:bg-primary hover:text-white rounded-[4px]"
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default HeaderLinks;
