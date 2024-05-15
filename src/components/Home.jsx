import React from "react";

import pic from "../../public/MayureshPatil.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            A Java full stack developer is proficient in both front-end and back-end development using Java technologies. They're skilled in frameworks like Spring Boot, Hibernate, and JavaServer Faces for back-end development, ensuring robust server-side logic and seamless database integration. On the front end, they're adept at utilizing HTML, CSS, and JavaScript along with popular frameworks like Angular, React, or Vue.js to create engaging user interfaces. With a solid understanding of RESTful APIs, they seamlessly integrate front-end and back-end components. Their expertise spans from designing database schemas to implementing responsive UIs, making them indispensable in modern web development projects.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/mayureshpatil-0bb172228/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCty8eq4Mp-vuB_vcbNqhXGg" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mayureshpatil.in/?hl=en" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <FaJava  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <BiLogoSpringBoot className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
