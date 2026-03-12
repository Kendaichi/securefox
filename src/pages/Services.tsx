import { Link } from 'react-router-dom';
import { Shield, Eye, Building, DoorOpen, Store, Home, Settings } from 'lucide-react';

const allServices = [
  {
    icon: <Shield size={28} />,
    title: 'Security Guards',
    body: 'Licensed, highly-trained security personnel available 24/7. Our guards pass a rigorous recruitment process ensuring professionalism on every assignment.',
  },
  {
    icon: <Building size={28} />,
    title: 'Corporate & Event Security',
    body: 'From high-profile corporate functions to large-scale public events — we design and execute bespoke security plans that keep guests and assets protected.',
  },
  {
    icon: <DoorOpen size={28} />,
    title: 'Concierge Services',
    body: 'Redefining first impressions. Our concierge officers combine elite access control with unmatched professionalism for premium residential and commercial buildings.',
  },
  {
    icon: <Store size={28} />,
    title: 'Shopping Centre Security',
    body: 'We provide visible deterrence, loss prevention, and incident management tailored to high-traffic commercial retail environments.',
  },
  {
    icon: <Home size={28} />,
    title: 'Residential Building Security',
    body: 'We deliver discreet, professional security for residential complexes — from access management to emergency response protocols.',
  },
  {
    icon: <Settings size={28} />,
    title: 'Tailored Security Packages',
    body: 'We conduct thorough risk assessments and design fully bespoke security frameworks matched to your environment and threat profile.',
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-sf-dark">
        <div className="grid-overlay" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-16">
          <div className="max-w-2xl">
            <div className="section-label hero-anim hero-anim-1">What We Do</div>
            <h1
              className="hero-anim hero-anim-2 font-rajdhani font-700 leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              COMPLETE SECURITY
              <br />
              <span className="glow-text">SOLUTIONS.</span>
            </h1>
            <p className="hero-anim hero-anim-3 mt-6 text-sf-text/50 font-barlow font-300 text-lg max-w-lg leading-relaxed">
              Every environment demands a different approach. Our tailored security frameworks are built
              around your unique risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-sf-dark py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div
            className="grid md:grid-cols-3 gap-[1px]"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            {allServices.map((s, i) => (
              <div key={i} className="service-card">
                <div className="text-sf-green mb-5">{s.icon}</div>
                <h3 className="font-rajdhani font-700 text-lg mb-3 uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="font-barlow font-300 text-sm text-sf-text/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-sf-surface border-y border-sf-green/15 py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-rajdhani font-700 text-2xl md:text-3xl mb-8">
            Ready to secure your environment?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-clip btn-clip-filled">
              Get In Touch
            </Link>
            <a href="tel:1300911369" className="btn-clip btn-clip-outline">
              Call 1300 911 369
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
