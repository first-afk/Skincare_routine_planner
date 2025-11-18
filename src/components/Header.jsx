import React, { useEffect, useRef, useState } from "react";
import wellosophy from "./../assets/wellosophy.jpg";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsX } from "react-icons/bs";
const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");
  const [position, setPosition] = useState("absolute");
  const prevScrollY = useRef(0);

  const [sidePanel, setSidePanel] = useState(false);
  let menuRef = useRef();

  const [hamburger, setHamburger] = useState(false);
  let hamburgerRef = useRef();

  const toggleHamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const toggleSidePanel = () => {
    setSidePanel(!sidePanel);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        sidePanel
      ) {
        setSidePanel(false);
      }

      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        hamburger
      ) {
        setHamburger(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidePanel, hamburger]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setBackgroundColor("bg-transparent");
        setPosition("absolute");
      } else if (currentScrollY < prevScrollY.current) {
        setBackgroundColor("bg-slate-50");
        setPosition("fixed");
      } else {
        setBackgroundColor("bg-transparent");
        setPosition("absolute");
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { cartItems } = useCart();

  return (
    <>
      <section className="h-[100vh] w-[100%] flex flex-row justify-between relative bg-cover bg-left" style={{backgroundImage: `url(${wellosophy})`}}>
        <div
          className={`flex justify-end ${position} p-5 top-5 left-0 right-0 ${backgroundColor} transition-all duration-300 ease-in-out z-99`}
        >
          <ul
            className={`hidden md:flex gap-15 text-xl uppercase mr-[6rem] ${
              backgroundColor === "bg-transparent" ? "text-slate-50" : ""
            }`}
          >
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <li className="cursor-pointer" onClick={toggleSidePanel}>Cart ({cartItems.length})</li>
          </ul>
          <div
            className={`md:hidden mr-[1rem] ${
              backgroundColor === "bg-transparent" ? "text-slate-50" : ""
            }`}
          >
            <button
              onClick={toggleHamburgerMenu}
              className="text-black cursor-pointer"
            >
              <GiHamburgerMenu size={30}/>
            </button>
          </div>
        </div>

        <div
          ref={hamburgerRef}
          className={`fixed flex flex-col top-0 right-0 w-full md:w-2/5 h-[30em] bg-[#EBEBEB] z-100 transform transition-transform duration-300 ease-in-out  ${
            hamburger ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="my-5 p-5 mr-[1rem] flex justify-end">
            <button
              onClick={toggleHamburgerMenu}
              className="text-3xl border-1 rounded-full p-2 cursor-pointer"
            >
              <BsX />
            </button>
          </div>
          <ul className={`space-y-5 p-5 text-2xl uppercase`}>
            <li className="border-b-2 border-[#363636] p-3">Shop</li>
            <li className="border-b-2 border-[#363636] p-3">About</li>
            <li className="border-b-2 border-[#363636] p-3">Contact</li>
            <li
              className="border-b-2 border-[#363636] p-3 cursor-pointer"
              onClick={toggleSidePanel}
            >
              Cart ({cartItems.length})
            </li>
          </ul>
        </div>

        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-full md:w-2/5 bg-[#EBEBEB] z-100 transform transition-transform duration-300 ease-in-out  ${
            sidePanel ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5">
            <div className="mr-[1rem] flex justify-end">
            <button onClick={toggleSidePanel} className="text-3xl border-1 rounded-full p-2 cursor-pointer">
              <BsX/>
            </button>
            </div>
            <div>
            <Cart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
