import React from 'react'
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
    return (
        <div>
            <div className="flex lg:fixed relative lg:left-[20px] lg:bottom-[100px] bottom-[40px] left-1/2 transform -translate-x-1/2 lg:flex-col flex-row lg:justify-center justify-evenly items-center lg:h-[161px] lg:w-[50px] h-[5%] w-[240px] lg:ml-[40px] text-white z-10">
                <a href="www.google.com" target="_blank" className="glitch-effect py-4">
                    <FiInstagram
                        size={"30px"}
                        className=" hover:cursor-pointer "
                    />
                </a>
                <a href="https://www.facebook.com/phoenix.avenir" target="_blank" className="glitch-effect py-4">
                    <FiFacebook
                        size={"30px"}
                        className=" hover:cursor-pointer"
                    />
                </a>
                <a href="www.google.com" target="_blank" className="glitch-effect py-4">
                    <FaLinkedinIn
                        size={"30px"}
                        className=" hover:cursor-pointer"
                    />
                </a>
                <a href="tel:7439596599" target="_blank" className="glitch-effect py-4">
                    <FiPhone
                        size={"30px"}
                        className=" hover:cursor-pointer"
                    />
                </a>
            </div>
        </div>
    )
}

export default Socials