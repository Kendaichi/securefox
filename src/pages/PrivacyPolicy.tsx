const sections = [
  {
    title: '1. Introduction',
    body: 'SecureFox Security Services Pty Ltd (ACN: 618-425-602) is committed to protecting your privacy in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This policy outlines how we collect, use, disclose, and safeguard your personal information.',
  },
  {
    title: '2. Information We Collect',
    body: 'We may collect personal information including your name, email address, phone number, and postal address. This information is collected when you contact us via our website enquiry form, by telephone, or by email. We may also collect non-personal data through cookies and analytics tools to improve user experience.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'Your information is used to respond to enquiries and provide security services, to send relevant communications about our services (with your consent), and to improve our website and service delivery.',
  },
  {
    title: '4. Disclosure of Information',
    body: 'SecureFox does not sell, trade, or rent your personal information to third parties. We may disclose your information where required by law, to comply with a legal obligation, or to protect the rights and safety of our clients and staff.',
  },
  {
    title: '5. Data Security',
    body: 'We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure. Our website uses encrypted communications (HTTPS) and secure server infrastructure.',
  },
  {
    title: '6. Cookies',
    body: 'Our website may use cookies to enhance your browsing experience and gather analytics data. You may disable cookies through your browser settings; however, this may affect the functionality of certain features on our site.',
  },
  {
    title: '7. Access & Correction',
    body: 'You have the right to access and request correction of your personal information held by us. To make a request, please contact us at info@securefox.com.au. We will respond to all requests within a reasonable timeframe.',
  },
  {
    title: '8. Contact Us',
    body: 'For any privacy-related enquiries, please contact:\nSecureFox Security Services Pty Ltd\nPO BOX 73, Flinders Lane, Melbourne VIC 8009\nEmail: info@securefox.com.au\nPhone: 1300 911 369',
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="bg-sf-dark min-h-screen pt-32 pb-24">
      <div className="max-w-[760px] mx-auto px-6 md:px-10">
        <div className="section-label hero-anim hero-anim-1">Legal</div>
        <h1
          className="hero-anim hero-anim-2 font-rajdhani font-700 leading-[0.95] mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          PRIVACY <span className="glow-text">POLICY.</span>
        </h1>
        <p className="hero-anim hero-anim-3 font-barlow text-xs text-sf-text/40 mb-6">
          Last updated: 2020 · SecureFox Security Services Pty Ltd
        </p>
        <hr className="border-sf-green/30 mb-12" />

        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-rajdhani font-600 text-sm uppercase tracking-widest text-sf-text/90 mb-3">
                {s.title}
              </h2>
              <p className="font-barlow font-300 text-sf-text/70 leading-[1.9] text-[1.05rem] whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
