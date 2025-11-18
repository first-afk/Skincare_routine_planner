import React, { useEffect, useRef, useState } from "react";
import "./../App.css";
import { useCart } from "../context/CartContext";
import image1 from "./../assets/image1.jpg";
import image4 from "./../assets/image4.jpg";
import image5 from "./../assets/image5.jpg";
import image6 from "./../assets/image6.jpg";
import Cart from "./Cart";
import { BsX } from "react-icons/bs";

const About = ({ productItems }) => {
  const [sidePanel, setSidePanel] = useState(false);
  let menuRef = useRef();

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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidePanel]);

  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    setSidePanel(true);
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
    });
  };
  return (
    <>
      <section className="about text-xl md:mx-24 md:py-[5em] py-[2em]">
        <div className="md:w-4/5">
          <div className="heading m-4 text-6xl/16 font-thin capitalize">
            <h3>we believe in creating easier pathways to social impact</h3>
          </div>
          <div className="body line-clamp-2 md:line-clamp-none font-thin text-2xl m-3 py-4">
            <p>
              We start by donating 10% of profits to the causes you care about
              most, but that’s just the beginning. Whether you have just a
              minute or all the time in the world, we’re here to help you figure
              out how to best use it for good.
            </p>
          </div>
          <div className="m-4">
            <button className="capitalize text-xl border-b-2 border-[#363636]">
              learn more
            </button>
          </div>
        </div>

        <div className="product-card-container mt-[6rem] mx-8 text-2xl">
          <div>
            <h3 className="uppercase text-4xl font-light">
              start here (<span className="lowercase">and then </span>keep
              going)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-auto">
            {productItems.map((item) => (
              <div key={item.id} className="product-card">
                <div className="product-card__image">
                  <img
                    className="h-20 w-[10%] md:h-[100%] md:w-[100%]"
                    src={image1}
                    alt="product"
                  />
                </div>
                <div className="product-card__content mt-4">
                  <div className="flex justify-between">
                    <h3 className="uppercase font-thin text-2xl">
                      {item.name}
                    </h3>
                    <h3 className="font-thin text-2xl">${item.price}</h3>
                  </div>
                  <p className="font-light capitalize text-xl mt-2">
                    product description
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="uppercase font-thin mt-5 text-xl border-b-2 border-[#363636]"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full md:w-2/5 w-full bg-[#EBEBEB] z-100 transform transition-transform duration-300 ease-in-out  ${
            sidePanel ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5">
            <div className="mr-[1rem] flex justify-end">
              <button
                onClick={toggleSidePanel}
                className="text-3xl border-1 rounded-full p-2 cursor-pointer"
              >
                <BsX />
              </button>
            </div>
            <Cart />
          </div>
        </div>
      </section>

      <section>
        <div className="grid-section mx-36">
          <div className="grid absolute-grid grid-cols-1 md:grid-cols-3 mx-auto">
            <div className="text-2xl transform transition-transform duration-300 ease-in-out">
              <h2 className="uppercase text-5xl">
                Do good <span className="lowercase italic">and</span> have
                <span className="lowercase italic"> the</span> best
              </h2>
              <p className="md:text-xl/6 text-xl/4 mt-2">
                We create products that make your everyday routine - and your
                community - a little better.
              </p>
            </div>
            <div className="col-span-2 md:mx-12 mt-5 md:mt-auto">
              <img
                src={image4}
                alt=""
                className="h-[70vh] w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute-grid grid grid-cols-1 md:grid-cols-2 mx-auto items-center relative md:h-[60vh]">
            <div className="justify-items-center order-last md:order-first">
              <img
                src={image5}
                alt=""
                className="h-[70vh] w-[60vh] object-cover md:absolute md:-top-[30%] md:left-[12%] z-40"
              />
            </div>
            <div className="list text-2xl md:mt-5 md:mb-20 capitalize order-first md:order-last p-5">
              <ol className="list-inside list-disc">
                <li className="p-2">10% profit</li>
                <li className="p-2">vegan + cruelty free</li>
                <li className="p-2">dermatologist-tested</li>
                <li className="p-2">gentle + non-irritating</li>
                <li className="p-2">100% recycled plastic bottles</li>
              </ol>
            </div>
          </div>
          <div className="grid absolute-grid grid-cols-1 md:grid-cols-2 items-center mx-auto ">
            <div className="p-5">
              <h2 className="uppercase md:text-3xl text-4xl ">
                now supporting: <br /> community development
              </h2>
              <p className="mt-3 md:mt-6 md:w-4/5 mb-4">
                Together we'll work towards bettering the quality of life,
                opportunity and well-being in the places we live.
              </p>

              <button className="capitalize my-5 text-xl border-b-2 border-[#363636]">
                learn more here
              </button>
            </div>
            <div className="">
              <img
                src={image6}
                alt=""
                className="h-[100vh] w-full object-cover mx-8"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
