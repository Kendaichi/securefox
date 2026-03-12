import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: <Phone size={18} />, label: 'PHONE', value: '1300 911 FOX (369)' },
  { icon: <Mail size={18} />, label: 'EMAIL', value: 'info@securefox.com.au' },
  {
    icon: <MapPin size={18} />,
    label: 'ADDRESS',
    value: 'PO BOX 73, Flinders Lane, Melbourne VIC 8009, Australia',
  },
  { icon: <Clock size={18} />, label: 'AVAILABILITY', value: 'Open 24 Hours, 7 Days a Week' },
];

const introStats = [
  { number: '2 hours', label: 'Average response time to enquiries' },
  { number: '24/7', label: 'Team availability for urgent matters' },
  { number: 'Free', label: 'Initial security consultation, no obligation' },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Intro Band */}
      <section className="bg-sf-surface pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <div className="section-label justify-center">Get In Touch</div>
          <h2
            className="font-rajdhani font-700 leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            WE'RE AVAILABLE <br />
            <span className="glow-text">24 HOURS A DAY.</span>
          </h2>
          <div className="max-w-[640px] mx-auto space-y-4 mb-12">
            <p className="font-barlow font-300 text-sf-text/50 leading-relaxed">
              Whether you need an urgent deployment, want to discuss an upcoming event, or are looking for an ongoing security partner for your building or business — the SecureFox team is ready to help.
            </p>
            <p className="font-barlow font-300 text-sf-text/50 leading-relaxed">
              We don't use call centres or automated systems. When you contact SecureFox, you speak to a member of our team who understands security, understands your industry, and can give you a genuinely useful answer — not a script.
            </p>
            <p className="font-barlow font-300 text-sf-text/50 leading-relaxed">
              Call us on 1300 911 369, email info@securefox.com.au, or fill in the form below and we'll be back to you within 2 hours during business hours, or first thing the next morning for after-hours enquiries.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {introStats.map((s, i) => (
              <div key={i} className="border border-sf-green/15 py-6 px-4">
                <div className="font-rajdhani font-700 text-2xl md:text-3xl text-sf-green mb-1">{s.number}</div>
                <div className="font-barlow font-300 text-xs text-sf-text/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-sf-dark py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-label">Contact Us</div>
            <h2
              className="font-rajdhani font-700 leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              LET'S DISCUSS
              <br />
              <span className="glow-text">YOUR SECURITY.</span>
            </h2>
            <p className="text-sf-text/50 font-barlow font-300 leading-relaxed mb-10">
              Every security challenge is unique. Reach out for a confidential discussion and we'll design
              a solution tailored to your needs.
            </p>

            <div className="space-y-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-sf-green/15 bg-sf-green/5 text-sf-green shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-rajdhani font-600 text-xs uppercase tracking-wider text-sf-text/40 mb-0.5">
                      {c.label}
                    </div>
                    <div className="font-barlow font-300 text-sm text-sf-text/70">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-sf-card border border-sf-green/10 p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-6">✓</div>
                <h3 className="font-rajdhani font-700 text-2xl mb-3">
                  Message <span className="glow-text">RECEIVED</span>
                </h3>
                <p className="font-barlow font-300 text-sf-text/50">
                  Our team will be in touch within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-sf-dark/40 border border-sf-green/10 px-4 py-3 text-sm font-barlow text-sf-text placeholder:text-sf-text/25 focus:border-sf-green focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-sf-dark/40 border border-sf-green/10 px-4 py-3 text-sm font-barlow text-sf-text placeholder:text-sf-text/25 focus:border-sf-green focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-sf-dark/40 border border-sf-green/10 px-4 py-3 text-sm font-barlow text-sf-text placeholder:text-sf-text/25 focus:border-sf-green focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full bg-sf-dark/40 border border-sf-green/10 px-4 py-3 text-sm font-barlow text-sf-text placeholder:text-sf-text/25 focus:border-sf-green focus:outline-none transition-colors resize-y"
                  />
                </div>
                <button type="submit" className="btn-clip btn-clip-filled w-full text-center justify-center">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
