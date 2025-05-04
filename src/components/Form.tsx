

function Form() {
  return (
    <div>
      <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border border-slate-400 rounded-md p-3 w-full outline-none" />
            <input type="text" placeholder="Last Name" className="border border-slate-400 rounded-md p-3 w-full outline-none" />
          </div>
          <input type="email" placeholder="Email" className="border border-slate-400 rounded-md p-3 w-full outline-none" />
          <input type="tel" placeholder="Phone" className="border border-slate-400 rounded-md p-3 w-full outline-none" />
          <textarea placeholder="Comments" className="border border-slate-400 rounded-md p-3 w-full h-32 outline-none"></textarea>

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
  )
}

export default Form
