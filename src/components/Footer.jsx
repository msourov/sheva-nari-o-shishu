import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white flex justify-between md:flex-row flex-col p-10">
        <section className="ml-10 mb-4 md:mb-0">
          <ul className="space-y-2">
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/works">Our Works</Link>
            </li>
          </ul>
        </section>
        <div className="flex flex-wrap md:flex-row flex-col md:space-x-8 space-y-2">
          <ul className="w-full md:w-auto">
            <li className="py-2 px-4">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="py-2 px-4">
              <Link to="/internship">Internship</Link>
            </li>
            <li className="py-2 px-4">Tree Plantation</li>
            <li className="py-2 px-4">Govt. Events</li>
            <li className="py-2 px-4">Generation of Bangladesh</li>
          </ul>
          <ul className="w-full md:w-auto">
            <li className="py-2 px-4">
              <Link to="microCredit">Micro Credit</Link>
            </li>
            <li className="py-2 px-4">
              <Link to="partnershipProgram">Partnership Program</Link>
            </li>
            <li className="py-2 px-4">
              <Link to="/dayCare">Day Care</Link>
            </li>
            <li className="py-2 px-4">
              <Link to="/consultancyServices">Consultancy Services</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end md:justify-start">
          <img
            src="./sheva_transparent.png"
            alt="Hidayah Smart Solutions Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
      <div className="text-center bg-black text-white font-thin">
        All rights reserved | Hidayah Smart Solutions | 2024
      </div>
    </>
  );
};

export default Footer;
