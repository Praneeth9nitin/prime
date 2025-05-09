import Footer from '../components/Footer'

function Smspolicy() {
    return (
        <div>
        <div className='bg-lgray p-1 py-10'>
        <div className='xl:mx-28 md:p-10 p-4 bg-white'>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#11193B] text-center mb-6">SMS Policy</h1>
                        <div className="md:text-xl text-gray-700 leading-relaxed font-opensans">

                            <h2 className="font-semibold mt-4">SMS Consent Communication</h2>
                            <p>The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p>

                            <h2 className="font-semibold mt-4">Types of SMS Communications</h2>
                            <p>If you have consented to receive text messages from  Prime Mortgage Services LLC, you may receive messages related to the following:</p>
                            <ul className="list-disc ml-6">
                                <li>Appointment reminders</li>
                                <li>Follow-up messages</li>
                                <li>Billing inquiries</li>
                                <li>Promotions or offers (if applicable)</li>
                            </ul>
                            <p>Example: "Hello, this is a friendly reminder of your upcoming appointment with Dr. [Name] at [Location] on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from Prime Mortgage Services at any time."</p>

                            <h2 className="font-semibold mt-4">Message Frequency</h2>
                            <p>Message frequency may vary depending on the type of communication.</p>
                            <p>Example: "Message frequency may vary. You may receive up to 2 SMS messages per week regarding your appointments or application status."</p>

                            <h2 className="font-semibold mt-4">Potential Fees for SMS Messaging</h2>
                            <p>Standard message and data rates may apply depending on your mobile carrier's pricing plan. These fees may vary for domestic and international messages.</p>

                            <h2 className="font-semibold mt-4">Opt-In Method</h2>
                            <p>You may opt-in to receive SMS messages from Prime Mortgage Services LLC in the following ways:</p>
                            <ul className="list-disc ml-6">
                                <li>Verbally, during a conversation</li>
                                <li>By submitting an online form</li>
                                <li>By filling out a paper form</li>
                            </ul>

                            <h2 className="font-semibold mt-4">Opt-Out Method</h2>
                            <p>You can opt out of receiving SMS messages at any time. To do so:</p>
                            <ul className="list-disc ml-6">
                                <li>Reply "STOP" to any SMS message you receive.</li>
                                <li>Or contact us directly to request removal from our messaging list.</li>
                            </ul>

                            <h2 className="font-semibold mt-4">Help</h2>
                            <p>If you are experiencing any issues:</p>
                            <ul className="list-disc ml-6">
                                <li>You can reply with the keyword "HELP"</li>
                                <li>Or contact us directly at info@primemtgs.com or call 980-297-9827</li>
                            </ul>

                            <h2 className="font-semibold mt-4">Additional Options</h2>
                            <p>If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.</p>

                            <h2 className="font-semibold mt-4">Standard Messaging Disclosures</h2>
                            <p>Message and data rates may apply. You can opt out at any time by texting "STOP." For assistance, text "HELP" or visit:</p>
                            <ul className="list-disc ml-6">
                                <li><a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a></li>
                                <li><a href="/terms-conditions" className="text-blue-500 underline">Terms and Conditions</a></li>
                            </ul>

                        </div>
                    </div>

                </div>
            <Footer />
        </div>
    )
}

export default Smspolicy
