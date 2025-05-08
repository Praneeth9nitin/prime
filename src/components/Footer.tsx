import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';
import logo from '../assets/footerlogo1.svg'
import logo1 from '../assets/footerlogo2.svg'
import env from '../assets/envelop.svg'

const Footer: React.FC = () => {
  const navigete = useNavigate()
  return (
    <footer className="bg-gray flex items-baseline flex-col text-lgray xl:px-48 px-14 py-3 gap-10">
      <div className='max-w-7xl mx-auto'>
      <div className='flex max-w-7xl gap-3 md:p-3 md:px-0 md:mb-5'>
        <img src={logo1} alt="" className='md:w-12 w-10' />
        <img src={logo} alt="" className='md:w-32 w-28' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Company */}
        <div>
          <h3 className="font-bold cursor-pointer underline mb-2">Company</h3>
          <ul className="space-y-1">
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/");window.scrollTo(0,0)}}>Home</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/about");window.scrollTo(0,0)}}>About Us</li>
            <li className='hover:underline cursor-pointer'>Loan Options</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/mortgage-calculator");window.scrollTo(0,0)}}>Mortgage Calculator</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/contact");window.scrollTo(0,0)}}>Contact Us</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/terms-conditions");window.scrollTo(0,0)}}>Terms and Conditions</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/privacy-policy");window.scrollTo(0,0)}}>Privacy Policy</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/cookie-policy");window.scrollTo(0,0)}}>Cookie Policy</li>
            <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/sms-policy");window.scrollTo(0,0)}}>SMS Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div className='md:pl-10'>
          <h3 className="font-bold cursor-pointer underline mb-2">Services</h3>
          <ul className="space-y-1 cursor-pointer">
          <li className='hover:underline cursor-pointer'>Loan Options</li>
          <li className='hover:underline cursor-pointer' onClick={()=>{navigete("/mortgage-calculator");window.scrollTo(0,0)}}>Mortgage Calculator</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='md:px-10'>
          <h3 className="font-bold underline mb-2">Contact Us</h3>
          <div className="mb-2">
            <iframe
              className="rounded-md w-2/3 md:w-full"
              src="https://maps.google.com/maps?q=3440+Toringdon+Way,+Suite+205,+Office+254,+Charlotte+NC+28277&output=embed"
              height="120"
              allowFullScreen
              loading="lazy"
              title="Company Location"
            />
          </div>
          <div className="space-y-2">
            <p className="flex items-start text-sm w-2/3 md:w-full gap-2 hover:underline cursor-pointer">
              <FaMapMarkerAlt className="text-lg w-10" /> 
              3440 Toringdon Way, Suite 205, Office 254, Charlotte NC 28277
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <FaPhoneAlt className="text-lg" /> 9802979827
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <img src={env} alt="" className='w-4' />
              <a href="mailto:info@primemortgagellc.com" className="underline">info@primemtgs.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-10 text-xs">
        © 2025 Prime Mortgage. All Rights Reserved
      </div>
      </div>
    </footer>
  );
};

export default Footer;
