
export default function contact() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10">Get a <span className="text-card">Quote</span></h1>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border rounded p-3 w-full" />
            <input type="text" placeholder="Last Name" className="border rounded p-3 w-full" />
          </div>
          <input type="email" placeholder="Email" className="border rounded p-3 w-full" />
          <input type="tel" placeholder="Phone" className="border rounded p-3 w-full" />
          <textarea placeholder="Comments" className="border rounded p-3 w-full h-32"></textarea>

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="smsConsent" className="mt-1" />
            <label htmlFor="smsConsent">
              By checking this box, I consent to receive SMS from Prime Mortgage Services. I may receive messages in regards to appointment reminders, billing inquiries, follow-up messages, and promotional offers. Reply STOP to opt-out; For assistance Reply HELP; Message and data rates may apply; Messaging frequency may vary. Visit our{' '}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{' '}
              <a href="#" className="text-blue-600 underline">Terms and Conditions</a>.
            </label>
          </div>

          <button className="bg-card text-white py-3 px-6 rounded w-full mt-4 hover:bg-blue-800">
            Send Message
          </button>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-900">Prime Mortgage Services</h2>
            <p className="mt-2">3440 Toringdon Way, Suite 205<br />Office 254, Charlotte NC 28277</p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="material-icons">phone</span>
            <a href="tel:9802979827" className="text-blue-600">980-297-9827</a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="material-icons">email</span>
            <a href="mailto:info@primemortgagellc.com" className="text-blue-600">info@primemortgagellc.com</a>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.719831381582!2d-80.8404571847824!3d35.06377778034243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569b9a15b3ed27%3A0x90294dc3ed914d6!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sin!4v1680177314087!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded shadow"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
