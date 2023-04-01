import React from "react";

function Contact() {
  return (
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
            quibusdam dolorem cum saepe id, nobis sunt voluptatibus porro soluta
            similique, officiis rerum facilis ut distinctio eum, tempora quas
            placeat sapiente commodi ipsam.
          </div>
        </div>
      </div>
      <p className=" text-center justify-center text-white text-4xl md:text-5xl font-orbitron py-4">
        CONTACT US
      </p>
      <div className="container mx-auto mt-2 flex flex-col md:flex-row  text-center justify-between items-center">
        <div className=" ml-2 text-left text-white border-2 border-sky-500">
          Contact persons
        </div>

       <div className="flex flex-col justify-center">
       <div className=" py-4 flex-col  text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7432996511134!2d88.41275651494412!3d22.47627878523247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1680350063573!5m2!1sen!2sin"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className=" text-white py-4">
          <p className="font-chakra text-[15px]">
            netajisubashengineeringcollege@gmail.com
          </p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Contact;
