import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import appStore from "../assets/app-store1.png";
import playStore from "../assets/play-store1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-200 p-2 md:p-6 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-5">
        <div className="my-2 md:flex md:flex-col md:gap-8">
          <div>
            <h5 className="text-center font-bold md:text-2xl">ABOUT</h5>
          </div>
          <div>
            <p className="text-justify md:text-[18px]">
              We are a trusted e-commerce platform offering quality products at
              competitive prices. Our goal is to provide a seamless shopping
              experience with reliable service and fast delivery.
            </p>
          </div>
           <div className="hidden md:flex justify-evenly mt-4 ">
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer md:text-3xl">
              <TbBrandMeta className="hover:text-black"/>
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer md:text-3xl">
              <FaInstagram className="hover:text-black"/>
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer md:text-3xl">
              <AiOutlineYoutube className="hover:text-black"/>
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer md:text-3xl">
              <RiTwitterXLine className="hover:text-black"/>
            </div>
          </div>
        </div>
        <div className="lg:flex  lg:flex-col lg:justify-between my-2">
            <div>
          <h5 className="text-center font-bold md:text-2xl">CONTACT</h5>
            </div>
          <div>
            <div className="flex items-center gap-3 my-2">
              <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
                <FaLocationDot className="md:text-3xl hover:text-black"/>
              </div>
              <div>
                <p>
                 <span className="font-bold md:text-xl"> Address : </span>
                 <Link to={"https://maps.app.goo.gl/ToKN4jkmojmHixkJ7"} target="_blank" className="md:text-[18px]">
                 C-25, First Floor, Alkapuri, Kapoorthala Road, Aliganj, Lucknow, Uttar Pradesh 226024
                 </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
                <FaPhone  className="md:text-3xl hover:text-black"/>
              </div>
              <div>
                <p><span className="font-bold md:text-xl">Phone : </span>
                <Link to="tel:+91 7052118048" className="md:text-[18px]">
                +91-705-211-8048
                </Link></p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px]">
                <MdEmail className="md:text-3xl hover:text-black"/>
              </div>
              <div>
                <p><span className="font-bold md:text-xl">Email : </span>
                <Link to="mailto:anantguptastu@gmail.com" className="md:text-[18px]">
                anantguptastu0698@gmail.com
                </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly md:hidden">
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer hover:text-black">
              <TbBrandMeta />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] cursor-pointer hover:text-black">
              <FaInstagram />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] hover:text-black cursor-pointer">
              <AiOutlineYoutube />
            </div>
            <div className="text-xl text-white bg-blue-500 p-2 rounded-[10px] hover:text-black cursor-pointer">
              <RiTwitterXLine />
            </div>
          </div>
        </div>
        <div className="flex-1 my-2">
          <h5 className="text-center font-bold mb-3 md:text-2xl ">
            Subscribe for our offer news
          </h5>
          <div className="flex justify-evenly">
            <input type="text" placeholder="Enter your email address" className="bg-white px-4" style={{color:"black"}}/>
            <button className="bg-blue-500 px-4 py-2 rounded-[10px] text-white md:text-xl cursor-pointer hover:text-black">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex-1 my-2">
          <h5 className="text-center font-bold mb-3 md:text-2xl">
            Download App
          </h5>
          <div className="flex justify-around items-center">
            <img src={appStore} alt="app stroe" />
            <img src={playStore} alt="play store" />
          </div>
        </div>
      </div>
<hr className="mt-3 md:mt-4" />
      <div className="text-center mt-5 md:flex justify-center gap-8">
        <div className="">
          <p>Copyright © 2026 All rights reserved</p>
        </div>
        <div>
          <p>
            Powered By <Link className="text-blue-500" to={"https://onebigbit.com/"} target="_blank">Onebigbit Technologies Private Limited</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
