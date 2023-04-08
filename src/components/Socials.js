import React from 'react'
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Socials = () => {
    return (
        <div>
            <div className="flex lg:fixed relative lg:left-[20px] lg:bottom-[120px] bottom-[50px] left-1/2 transform -translate-x-1/2 lg:flex-col flex-row lg:justify-center justify-evenly items-center lg:h-[161px] lg:w-[50px] h-[5%] w-[240px] lg:ml-[40px] text-white z-10">
                <a href="https://www.instagram.com/phoenix_nsec/" target="_blank" className="glitch-effect py-4">
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
                <a href="https://www.linkedin.com/company/phoenix-the-official-tech-club-of-netaji-subhash-engineering-college/" target="_blank" className="glitch-effect py-4">
                    <FaLinkedinIn
                        size={"30px"}
                        className=" hover:cursor-pointer"
                    />
                </a>
                <a href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA" target="_blank" className="glitch-effect py-4">
                    <AiOutlineYoutube
                        size={"30px"}
                        className=" hover:cursor-pointer"
                    />
                </a>
                <a href="tel:9073560833" target="_blank" className="glitch-effect py-4">
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