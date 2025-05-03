import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa6"

function Contact1() {
    return (
        <div className="flex md:flex-row flex-col justify-center md:px-32 gap-8 items-center font-josefin h-full">
            <div className="md:w-1/2 shadow-md space-y-3 m-2 p-5 md:p-10">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold text-card">Prime Mortgage Services</h2>
                        <p className="mt-2 text-xl flex gap-2"> <FaMapMarkerAlt className="text-lg relative top-1.5" /><span>3440 Toringdon Way, Suite 205 Office 254, Charlotte NC 28277</span></p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="material-icons flex"><FaPhoneAlt className="text-lg" /></span>
                        <a href="tel:9802979827" className="text-xl">980-297-9827</a>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="material-icons"><FaEnvelope className="text-lg" /></span>
                        <a href="mailto:info@primemortgagellc.com" className="text-xl">info@primemortgagellc.com</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                        <input type="text" placeholder="First Name" className="border rounded-md p-3 w-full outline-none" />
                        <input type="text" placeholder="Last Name" className="border rounded-md p-3 w-full outline-none" />
                    </div>
                    <input type="email" placeholder="Email" className="border rounded-md p-3 w-full outline-none" />
                    <input type="tel" placeholder="Phone" className="border rounded-md p-3 w-full outline-none" />
                    <textarea placeholder="Comments" className="border rounded-md p-3 w-full h-32 outline-none"></textarea>

                    <div className="flex items-start gap-2 text-sm">
                        <input type="checkbox" id="smsConsent" className="mt-1" />
                        <label htmlFor="smsConsent">
                            By checking this box, I consent to receive SMS from Prime Mortgage Services. I may receive messages in regards to appointment reminders, billing inquiries, follow-up messages, and promotional offers. Reply STOP to opt-out; For assistance Reply HELP; Message and data rates may apply; Messaging frequency may vary. Visit our{' '}
                            <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{' '}
                            <a href="#" className="text-blue-600 underline">Terms and Conditions</a>.
                        </label>
                    </div>

                    <button className="bg-card text-white py-3 px-6 rounded w-full mt-4 hover:scale-105">
                        Send Message
                    </button>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.719831381582!2d-80.8404571847824!3d35.06377778034243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569b9a15b3ed27%3A0x90294dc3ed914d6!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sin!4v1680177314087!5m2!1sen!2sin"
                height="790"
                loading="lazy"
                className="rounded shadow border-4 mx-10 md:mx-0 border-slate-300 w-96 md:w-1/2"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Contact1
