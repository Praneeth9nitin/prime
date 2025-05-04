import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope
  } from 'react-icons/fa';

function Contactdetails() {
    return (
        <div className='space-y-7'>
        <div>
            <h2 className="text-2xl font-bold text-card">Prime Mortgage Services</h2>
            <p className="mt-2 text-lg flex gap-2"> <FaMapMarkerAlt className="text-lg relative top-1.5" /><span>3440 Toringdon Way, Suite 205 Office 254, Charlotte NC 28277</span></p>
        </div>

        <div className="flex items-center space-x-2">
            <span className="material-icons flex"><FaPhoneAlt className="text-lg" /></span>
            <a href="tel:9802979827" className="text-lg">980-297-9827</a>
        </div>

        <div className="flex items-center space-x-2">
            <span className="material-icons"><FaEnvelope className="text-lg" /></span>
            <a href="mailto:info@primemortgagellc.com" className="text-lg">info@primemortgagellc.com</a>
        </div>

        </div>
    )
}

export default Contactdetails
