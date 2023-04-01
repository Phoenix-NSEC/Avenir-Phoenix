import React from "react";
import "./Style.css";
function Contact() {
  return (
    <>
      <style>
        {`
        input::placeholder {
          color: white
          
        }

        textarea::placeholder {
          color: white
        }
      `}
      </style>
      <div style={{ backgroundColor: "black" }}>
        <p className="py-6 text-center justify-center  text-white text-4xl md:text-5xl  font-orbitron">
          ABOUT NSEC
        </p>
        <div className="container mx-auto flex-col text-center justify-center items-center font-chakra">
          <div className="mt-4 mx-2 flex flex-col md:flex-row text-center justify-center items-center">
            <div className="text-center md:text-right text-white font-chakra text-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              voluptatem quae? Iste aperiam ullam esse, porro corporis
              perspiciatis magnam asperiores quas quaerat molestiae assumenda
              sequi excepturi rem enim maiores quos provident vel?
            </div>

            <img
              src="https://www.collegesignal.com/images/colleges/cz_5922c05980d57172229/cover/nsec_cover-m4032-original.jpg"
              alt=""
              className="m-4 w-[400px] h-[200px]"
            />
          </div>
          <p className="py-[40px] mx-1 text-center justify-center text-white text-4xl md:text-5xl font-orbitron">
            {" "}
            ABOUT AVENIR
          </p>
          <div className="mt-4 mx-2 mb-4 flex flex-col-reverse md:flex-row text-center justify-center items-center ">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png"
              alt=""
              className="m-4 h-[200px] w-[300px]"
            />

            <div className="text-center md:text-left text-white  font-chakra text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              quibusdam dolorem cum saepe id, nobis sunt voluptatibus porro
              soluta similique, officiis rerum facilis ut distinctio eum,
              tempora quas placeat sapiente commodi ipsam.
            </div>
          </div>
        </div>
        <p className=" text-center justify-center text-white text-4xl md:text-5xl font-orbitron py-4">
          CONTACT US
        </p>
        <div className="container mx-auto mt-2 flex flex-col md:flex-row  text-center justify-around items-center">
          <div className=" ml-2 text-left text-white ">
            <div className=" p-8 rounded-xl shadow-lg  md:w-67 min-w-full ">
              <form
                action="https://formspree.io/f/xrgvyapq"
                method="POST"
                className="flex flex-col space-y-4"
              >
                <div>
                  <input
                    style={{ background: "none" }}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-[250px] rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400 md:w-[450px]"
                    required
                  />
                </div>
                <div>
                  <input
                    style={{ background: "none" }}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    style={{ background: "none" }}
                    placeholder="Enter Message"
                    rows="4"
                    name="message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-zinc-400"
                    required
                  ></textarea>
                </div>
                <button className="inline-block self-start bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
              </form>

              <div className="mx-auto flex-col mt-2">
                <p className="text-white font-chakra ">
                  Abhinil :<a href="tel:8910903081"> 8910903081</a>
                </p>

                <p className="text-white font-chakra py-[2px]">
                  Abhinil :<a href="tel:8910903081"> 8910903081</a>
                </p>

                <p className="text-white font-chakra py-[2px]">
                  Abhinil :<a href="tel:8910903081"> 8910903081</a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex-col  text-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7432996511134!2d88.41275651494412!3d22.47627878523247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1680350063573!5m2!1sen!2sin"
                width="300"
                height="290"
                style={{ border: 0, position: "relative", marginBottom: "20%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
