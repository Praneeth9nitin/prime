import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import logo from '../assets/footerlogo1.svg'
import logo1 from '../assets/footerlogo2.svg'
import env from '../assets/envelop.svg'

const Footer: React.FC = () => {
  const navigete = useNavigate()
  return (
    <footer className="bg-gray text-lgray md:px-48 px-14 py-3 gap-10">
      <div className='flex gap-3 md:p-3 md:px-0'>
        <img src={logo1} alt="" className='md:w-12 w-10' />
        <img src={logo} alt="" className='md:w-32 w-28' />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Company */}
        <div>
          <h3 className="font-bold cursor-pointer underline mb-2">Company</h3>
          <ul className="space-y-1 cursor-pointer">
            <li onClick={()=>navigete("/")}>Home</li>
            <li onClick={()=>navigete("/about")}>About Us</li>
            <li>Loan Options</li>
            <li>Mortgage Calculator</li>
            <li onClick={()=>navigete("/contact")}>Contact Us</li>
            <li onClick={()=>navigete("/terms-conditions")}>Terms and Conditions</li>
            <li onClick={()=>navigete("/privacy-policy")}>Privacy Policy</li>
            <li onClick={()=>navigete("/cookie-policy")}>Cookie Policy</li>
            <li onClick={()=>navigete("/sms-policy")}>SMS Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div className='md:pl-10'>
          <h3 className="font-bold cursor-pointer underline mb-2">Services</h3>
          <ul className="space-y-1 cursor-pointer">
          <li>Loan Options</li>
          <li>Mortgage Calculator</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='md:px-10'>
          <h3 className="font-bold underline mb-2">Contact Us</h3>
          <div className="mb-2">
            <iframe
              className="rounded-md"
              src="https://maps.google.com/maps?q=3440+Toringdon+Way,+Suite+205,+Office+254,+Charlotte+NC+28277&output=embed"
              width="100%"
              height="120"
              allowFullScreen
              loading="lazy"
              title="Company Location"
            />
          </div>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-lg w-10" /> 
              3440 Toringdon Way, Suite 205, Office 254, Charlotte NC 28277
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> 9802979827
            </p>
            <p className="flex items-center gap-2">
              <img src={env} alt="" className='w-4' />
              <a href="mailto:info@primemortgagellc.com" className="underline">info@primemortgagellc.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-10 text-xs">
        © 2025 Prime Mortgage. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
