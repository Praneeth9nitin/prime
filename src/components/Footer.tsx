import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-white px-14 py-10 gap-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Company */}
        <div>
          <h3 className="font-bold underline mb-2">Company</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Loan Options</li>
            <li>Mortgage Calculator</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>SMS Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold underline mb-2">Services</h3>
          <ul className="space-y-1">
          <li>Loan Options</li>
          <li>Mortgage Calculator</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
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
              <FaMapMarkerAlt className="text-lg" /> 
              3440 Toringdon Way, Suite 205, Office 254, Charlotte NC 28277
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> 9802979827
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-lg" /> 
              <a href="mailto:info@primemortgagellc.com" className="underline">info@primemortgagellc.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-xs">
        © 2025 Prime Mortgage. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
