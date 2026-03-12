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

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-sf-dark min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <div className="section-label hero-anim hero-anim-1">Get In Touch</div>
          <h2
            className="hero-anim hero-anim-2 font-rajdhani font-700 leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            LET'S DISCUSS
            <br />
            <span className="glow-text">YOUR SECURITY.</span>
          </h2>
          <p className="hero-anim hero-anim-3 text-sf-text/50 font-barlow font-300 leading-relaxed mb-10">
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
  );
};

export default Contact;
