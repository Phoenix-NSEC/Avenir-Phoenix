import React from "react";
import { useState } from "react";
import "./Style.css";
import aboutAvenir from "../../Assets/Images/logo3.png";
import aboutNSEC from "../../Assets/Images/NSEC.jpg"
import aboutPhoenix from "../../Assets/Images/logo1.png"
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "../Events/glitch.css";
function Aboutus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="mt-[100px]">
        <p className="py-6 text-center justify-center  text-white text-4xl md:text-5xl  font-bold font-orbitron">
          ABOUT NSEC
        </p>
        <div className="container mx-auto flex-col text-center justify-center items-center font-chakra">
          <div className="mt-4 mx-2 flex flex-col md:flex-row text-center justify-center items-center md:pr-[20px] md:pl-[16px] ">
            <div className=" text-white text-center md:text-right font-chakra text-[16px] md:text-[21px]">
            Netaji Subhash Engineering College or NSEC is a graduate and undergraduate engineering college of eastern India located in Kolkata, West Bengal, India. Established in 1998, it is situated at Techno City, Panchpota, Garia in the southern part of Kolkata.
            </div>

            <img
              src={aboutNSEC}
              alt=""
              className="m-4 h-[250px] w-[280px] md:h-[300px] md:w-[400px]"
            />
          </div>
          <p className="py-[40px] mx-1 font-bold text-center justify-center text-white text-4xl md:text-5xl font-orbitron">
            {" "}
            ABOUT PHOENIX
          </p>
          <div className="mt-4 mx-2 mb-4 flex flex-col-reverse md:flex-row text-center justify-center items-center md:pr-[25px] md:pl-[20px] ">
            <img
              src={aboutPhoenix}
              alt=""
              className="m-4 h-[250px] w-[200px] md:h-[300px] md:w-[350px]"
            />

            <div className="text-center md:text-left text-white  font-chakra text-[16px] md:text-[21px]">
            PHOENIX is the official tech club of Netaji Subhash Engineering College. A club which looks into the overall development of the students of this college. It was founded by a group of like-minded people in January 2006 with the aim of inculcating values of friendship, teamwork and leadership as well as increases the technical skills like coding and robotics of a student. PHOENIX plays a crucial role in bridging the gap between the college and corporate life. A club which provides each individual a stage to shine.
            </div>
          </div>
          <p className="py-[40px] mx-1 font-bold text-center justify-center text-white text-4xl md:text-5xl font-orbitron">
            {" "}
            ABOUT AVENIR
          </p>
          <div className="mt-4 mx-2 flex flex-col md:flex-row text-center justify-center items-center md:pr-[25px] md:pl-[20px]">
            <div className=" text-white text-center md:text-right font-chakra text-[16px] md:text-[21px]">
            Avenir - The Annual Techno-Management Fest of NSEC, stands amongst the top technical fests in the city with enthusiastic participation from students of premier institutes in and around the state. The three day spectacular event yields a footfall of more than 7000+ students , thus making it a perfect platform to explore the realm of technical innovation and to witness the best minds striving for excellence. The idea of Avenir unravels the big aspirations hidden inside a creative mind and promises the ultimate platform to showcase talent.
            </div>

            <img
              src={aboutAvenir}
              alt=""
              className="m-4 h-[200px] w-[200px] md:h-[300px] md:w-[350px]"
            />
          </div>
        </div>
        <p className=" text-center justify-center text-white text-4xl md:text-5xl font-bold font-orbitron py-4">
          CONTACT US
        </p>

        <div className="container mx-auto mt-6  flex flex-col md:flex-row  text-center  justify-evenly items-center">
          <div className="ml-2 text-left  flex flex-col justify-center items-center  text-white ">
            <div className="box1 md:w-67 w-[10px] ">
              <span class="borderLine"></span>
              <form
                action="https://formspree.io/f/xpzeokzr"
                method="POST"
                className="flex flex-col space-y-4"
              >
                <div className="inputbox">
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    className="ring-1 ring-gray-300 w-[250px] rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400 md:w-[450px]"
                    required="required"
                  />
                  <span>Username</span>
                  <i></i>
                </div>
                <div className="inputbox">
                  <input
                    type="email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                    required="required"
                  />
                  <span>Email Address</span>
                  <i></i>
                </div>
                <div className="inputbox " style={{ marginBottom: "20px" }}>
                  <input
                    rows="4"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    name="message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                    required="required"
                  />
                  <span>Your Message</span>
                  <i></i>
                </div>

                <button className="cybr-btn w-[300px] mt-4">
                  Submit<span aria-hidden>_</span>
                  <span class="cybr-btn__glitch">Send Message</span>
                  <span class="cybr-btn__tag"></span>
                </button>
              </form>
            </div>
            <div className="mx-auto mt-[30px] flex flex-col text-[15px] md:flex-row min-w-full md:w-[700px] md:text-[20px]  md:justify-around md:mt-[40px] md:mb-[40px] text-center">
              <div className="mx-auto flex-col">
                <p className="text-white font-chakra ">
                RAAJBIR BAJPAIE :<a href="tel:8240349675"> 8240349675</a>
                </p>

                <p className="text-white font-chakra py-[2px]">
                SANKHADEEP ROY :<a href="tel:7278122176"> 7278122176</a>
                </p>

                <p className="text-white font-chakra py-[2px]">
                RUDRANEEL BHATTACHARYA:<a href="tel:9073560833"> 9073560833</a>
                </p>
              </div>

              <div className="mx-auto flex-col ">
                <p className="text-white font-chakra ">
                SHREYA BAG :<a href="tel:7980960568"> 7980960568</a>
                </p>

                <p className="text-white font-chakra py-[2px]">
                YASH SHAW :<a href="tel:7439558508"> 7439558508</a>
                </p>

                <p className="text-white font-chakra py-[2px]">
                SHARANDEEP MUKHOPADHYAY :<a href="tel:7076397788"> 7076397788</a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-[30px] md:mt-[0px] flex-col justify-around  ">
            <div className="flex-col  text-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7432996511134!2d88.41275651494412!3d22.47627878523247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1680350063573!5m2!1sen!2sin"
                width="400"
                height="290"
                style={{ border: 0, position: "relative", marginBottom: "10%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col">
              <div className="space-x-2 mx-auto items-center flex flex-row">
                <FiMail style={{ color: "white" }} size={"30px"} />
                <span className="text-white text-lg">info@phoenixnsec.in</span>
              </div>

              <div className=" md:mb-0 mb-4 space-x-4 text-white flex flex-row  mx-auto items-center px-10 mt-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/phoenix_nsec/"
                  className="hover:text-slate-300"
                >
                  <BsInstagram size={"30px"} />
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/phoenix.avenir"
                  className="hover:text-slate-300"
                >
                  <BsFacebook size={"30px"} />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/phoenix-the-official-tech-club-of-netaji-subhash-engineering-college/"
                  className="hover:text-slate-300"
                >
                  <BsLinkedin size={"30px"} />
                </a>

                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA"
                  className="hover:text-slate-300"
                >
                  <BsYoutube size={"30px"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
