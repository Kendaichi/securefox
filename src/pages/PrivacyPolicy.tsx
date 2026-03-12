const sections = [
  {
    title: '1. Introduction',
    body: `SecureFox Security Services Pty Ltd (ACN: 618-425-602, ABN: 36-618-425-602) is committed to protecting the privacy of all individuals who interact with our business — including website visitors, clients, prospective clients, and members of the public who contact us for any reason.

This Privacy Policy explains how SecureFox collects, uses, discloses, stores, and protects your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) contained in Schedule 1 of that Act.

By using the SecureFox website at www.securefox.com.au or by engaging SecureFox for security services, you agree to the collection and use of your personal information in accordance with this policy.

We review this policy periodically and may update it from time to time. The current version is always available on this page.`,
  },
  {
    title: '2. What Personal Information We Collect',
    body: `SecureFox may collect the following categories of personal information:

Contact information — including your full name, email address, phone number, and postal or business address.

Enquiry and communication records — including the content of messages you send us via our website contact form, email, or telephone, and records of any subsequent communications.

Service-related information — for clients engaging SecureFox for security services, this may include details about your business or property, your operational requirements, and security-related information necessary to deliver our services.

Website usage data — including your IP address, browser type, referring website, pages visited, and time spent on our site, collected automatically through cookies and analytics tools.

We do not collect sensitive information (as defined under the Privacy Act) unless it is reasonably necessary for our functions and you have consented to its collection.`,
  },
  {
    title: '3. How We Collect Your Information',
    body: `SecureFox collects personal information in the following ways:

Directly from you — when you submit an enquiry through our website contact form, call us by telephone, send us an email, or engage SecureFox for security services.

Automatically through our website — cookies and analytics tools collect non-personally identifiable usage data when you visit www.securefox.com.au.

From third parties — in limited circumstances, we may receive personal information from third parties such as referral partners or business associates. We handle any such information in accordance with this policy.`,
  },
  {
    title: '4. Why We Collect Your Information and How We Use It',
    body: `SecureFox collects personal information for the following purposes:

To respond to your enquiries — when you contact us with a question or request for information, we use your contact details to get back to you with a helpful response.

To provide our security services — when you engage SecureFox as a client, we use your information to deliver, manage, and improve the security services we provide to you.

To communicate relevant information — with your consent, we may contact you with information about our services, updates, or relevant security industry information. You can opt out of marketing communications at any time by contacting us at info@securefox.com.au.

To improve our website and service delivery — anonymised website usage data helps us understand how visitors interact with our site and where improvements can be made.

To comply with our legal obligations — in some circumstances, we may be required to collect, retain, or disclose personal information to comply with applicable laws, regulations, or legal proceedings.`,
  },
  {
    title: '5. Disclosure of Your Information',
    body: `SecureFox does not sell, rent, or trade your personal information to any third party under any circumstances.

We may disclose your information to:

Service providers who assist us in operating our business — such as IT service providers, cloud storage providers, and communications platforms. These providers are contractually required to handle your information securely and in accordance with applicable privacy laws.

Legal and regulatory authorities — where disclosure is required by law, court order, or regulatory requirement, or where we believe disclosure is necessary to protect the safety of any person or to investigate suspected illegal activity.

We do not disclose your information to any overseas recipients unless required by law or with your explicit consent.`,
  },
  {
    title: '6. Data Security',
    body: `SecureFox takes reasonable and appropriate steps to protect your personal information from misuse, loss, unauthorised access, modification, and disclosure. These measures include:

Secure website infrastructure with HTTPS encrypted communications. Access controls limiting who within SecureFox can access personal information. Secure email systems for handling client communications. Regular review of our data handling practices and security measures.

While we take these precautions seriously, no method of data transmission or storage is entirely without risk. If you have concerns about the security of information you have provided to us, please contact us at info@securefox.com.au.

In the event of a data breach that is likely to result in serious harm to affected individuals, SecureFox will comply with the Notifiable Data Breaches scheme under the Privacy Act, including notifying affected individuals and the Office of the Australian Information Commissioner (OAIC) as required.`,
  },
  {
    title: '7. Cookies and Website Analytics',
    body: `Our website uses cookies — small text files stored on your device — to improve your browsing experience and collect anonymised analytics data about how visitors use our site.

The types of cookies we may use include:

Functional cookies that enable core website functionality. Analytics cookies (such as Google Analytics) that collect anonymised data about page visits, traffic sources, and user behaviour to help us improve our website. These analytics services may process data on servers outside of Australia.

You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. For information on managing cookies in your specific browser, refer to your browser's help documentation.`,
  },
  {
    title: '8. Accessing and Correcting Your Information',
    body: `Under the Australian Privacy Principles, you have the right to request access to the personal information SecureFox holds about you, and to request correction of any information that is inaccurate, incomplete, or out of date.

To make an access or correction request, please contact us in writing at info@securefox.com.au or by post to PO BOX 73, Flinders Lane, Melbourne VIC 8009. We will respond to your request within 30 days.

In some limited circumstances, we may decline an access or correction request — for example, where providing access would unreasonably affect the privacy of another individual, or where the request is frivolous. If we decline your request, we will provide written reasons.`,
  },
  {
    title: '9. Complaints',
    body: `If you believe SecureFox has not handled your personal information in accordance with this Privacy Policy or the Australian Privacy Principles, you are entitled to make a complaint.

To make a complaint, please contact us at:

Email: info@securefox.com.au
Post: PO BOX 73, Flinders Lane, Melbourne VIC 8009
Phone: 1300 911 369

We will acknowledge your complaint within 5 business days and aim to resolve it within 30 days. If you are not satisfied with our response, you may refer your complaint to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
  },
  {
    title: '10. Contact Us',
    body: `For any questions, concerns, or requests relating to this Privacy Policy or the personal information SecureFox holds about you, please contact us:

SecureFox Security Services Pty Ltd
PO BOX 73, Flinders Lane
Melbourne VIC 8009
Australia

Email: info@securefox.com.au
Phone: 1300 911 369
Website: www.securefox.com.au`,
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
          SecureFox Security Services Pty Ltd · ACN: 618-425-602 · Last reviewed: 2024
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
