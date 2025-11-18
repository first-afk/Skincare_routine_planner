import React from "react";
import "./../App.css";
import { BsArrow90DegLeft, BsArrowBarLeft, BsArrowLeft, BsArrowRight, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#363636] text-slate-50 pt-[3rem] mt-[3rem] h-auto p-15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 uppercase text-xl justify-self-center">
          <div className="md:col-span-2 justify-self-center ">
            <h3 className="text-xl md:text-4xl w-2/3 font-extralight">social impact starts <span className="lowercase italic">in your</span> inbox</h3>
            <div className="my-15 input">
              <input type="email" name="email" id="email" placeholder=" " className="border-slate-50  text-slate-50 input-field"/>
                <label htmlFor="email" className="input-label">email address</label>
                <button type="submit" className="absolute left-[77%] submit-btn"><BsArrowRight /></button>
            </div>
          </div>
          <div>
            <ul>
              <li className="p-1">shop</li>
              <li className="p-1">faq</li>
              <li className="p-1">shipping & returns</li>
            </ul>
            <div className="divicons my-10 flex flex-row-reverse justify-between w-36">
            <BsTwitterX />
            <FaTiktok />
            <FaFacebook />
            <BsInstagram />
            </div>
          </div>
          <div>
            <ul>
              <li className="p-1">terms of use</li>
              <li className="p-1">privacy policy</li>
              <li className="p-1">contact us</li>
            </ul>
            <div className="my-10">
              <h3>made by esther</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
