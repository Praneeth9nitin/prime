
const PrimeMortgageAbout = () => {
  return (
    <div className="md:px-36 px-4 pt-7 text-gray-800">
      <h1 className="text-4xl font-bold text-card mb-6">
        About Prime Mortgage Services
      </h1>

      <p className="text-lg mb-8">
        At Prime Mortgage Services, we're dedicated to guiding you through the journey of homeownership with clarity and confidence. Our mission is to provide personalized mortgage solutions that align with your financial goals, ensuring a seamless and transparent lending experience.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Our Commitment</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personalized Service:</strong> Our team takes the time to understand your unique needs, offering solutions tailored to your circumstances.
          </li>
          <li>
            <strong>Transparency:</strong> We believe in clear communication, ensuring you're informed at every step of the mortgage process.
          </li>
          <li>
            <strong>Efficiency:</strong> Leveraging modern technology, we streamline the application and approval process, making it as straightforward as possible.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Conventional Loans:</strong> Ideal for borrowers with strong credit histories.</li>
          <li><strong>FHA Loans:</strong> Designed for first-time homebuyers or those with less-than-perfect credit.</li>
          <li><strong>VA Loans:</strong> Exclusive benefits for veterans and active-duty military personnel.</li>
          <li><strong>Jumbo Loans:</strong> For financing properties that exceed conforming loan limits.</li>
          <li><strong>Refinancing Options:</strong> Helping you take advantage of better rates or tap into home equity.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Why Choose Prime Mortgage Services?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Expertise:</strong> Our experienced professionals stay updated with market trends to offer you the best advice.</li>
          <li><strong>Integrity:</strong> We uphold the highest ethical standards, ensuring your interests are always our top priority.</li>
          <li><strong>Customer-Centric Approach:</strong> Your satisfaction drives us. We're here to support you long after your loan closes.</li>
        </ul>
        <p className="mt-4">
          Join the countless homeowners who've trusted Prime Mortgage Services to make their homeownership dreams a reality.
        </p>
      </section>
    </div>
  );
};

export default PrimeMortgageAbout;
