import React from 'react';
import { FaEnvelope, FaGlobe, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-6">
      <div className=" mx-auto px-5 max-w-[97rem]  " >
        <div className="grid grid-cols-1   md:grid-cols-3 md:gap-8 gap-4">
          {/* Contact Information */}
          <div className='text-center md:text-left'>
            <h4 className="text-xl font-bold mb-2">AJARCSE</h4>

            <div className='flex flex-col justify-center md:items-start items-center md:text-left'>
              <div className='flex gap-3 items-center'>
                <FaEnvelope />
                <p>Email: <a href="mailto:editor@AJARCSE.com" className=" ">editorajarcse@gmail.com</a></p>
              </div>
              <div className='flex gap-3 items-center'>
              <FaGlobe />
                <p>Website: <a href="https://www.AJARCSE.com" className=" ">www.ajarcse.com</a></p>
              </div>

            </div>
          </div>

          {/* Navigation Links */}
          <div className='lg:mx-auto text-center'>
            <h4 className="text-xl font-bold mb-2">Resources</h4>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/aboutus" className="hover:underline">About Us</a></li>
              <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div className='lg:ml-auto md:text-right text-center '>
            <h4 className="text-xl font-bold mb-2">Journal Overview</h4>
            <ul className="">
              <li><a href="/editorial-board" className="hover:underline">Editorial Board</a></li>
              <li><a href="/peerreview" className="hover:underline">Peer Review Process</a></li>
              <li><a href="/publicationethic" className="hover:underline">Publication Ethics</a></li>
              <li><a href="/abstracting" className="hover:underline">Abstracting and Indexing</a></li>
              <li><a href="/articleProcess" className="hover:underline">Article Processing Charges</a></li>
            </ul>
          </div>

        </div>
        <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        <div className='grid lg:grid-cols-3 grid-cols-1  items-center mt-5'>
          <div>
          </div>
          <div className="text-center lg:mb-0 mb-5">
            <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>AJARCSE</Link> </span> . All Rights Reserved.</p>
          </div>
          <div>
            <img className='md:ml-auto md:mx-0 mx-auto w-24' src="/images/Herosection/white.png" alt="ojs" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
