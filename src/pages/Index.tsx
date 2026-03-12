import { Link } from 'react-router-dom';
import { Shield, Eye, Building, DoorOpen } from 'lucide-react';
import ParticleCanvas from '@/components/ParticleCanvas';
import FoxBackground from '@/components/FoxBackground';
import StatsBar, { TrustStrip } from '@/components/StatsBar';

const services = [
  {
    icon: <Shield size={28} />,
    title: 'Security Guards',
    body: 'Licensed, highly-trained security personnel available 24/7. Our guards pass a rigorous recruitment process ensuring professionalism on every assignment.',
  },
  {
    icon: <Building size={28} />,
    title: 'Corporate & Events',
    body: 'From high-profile corporate functions to large-scale public events — we design and execute bespoke security plans that keep guests and assets protected.',
  },
  {
    icon: <DoorOpen size={28} />,
    title: 'Concierge Security',
    body: 'Redefining first impressions. Our concierge officers combine elite access control with unmatched professionalism for premium buildings.',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-sf-dark">
        <ParticleCanvas />
        <div className="grid-overlay" />
        <FoxBackground />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="section-label hero-anim hero-anim-1">Melbourne's Premier Security</div>
            <h1
              className="hero-anim hero-anim-2 font-rajdhani font-700 leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              YOUR
              <br />
              <span className="glow-text">SIXTH</span>
              <br />
              SENSE.
            </h1>
            <p className="hero-anim hero-anim-3 mt-6 text-sf-text/50 font-barlow font-300 text-lg max-w-lg leading-relaxed">
              Military-grade expertise meets civilian protection. SecureFox delivers bespoke security
              solutions across Melbourne — 24 hours, 7 days.
            </p>
            <div className="hero-anim hero-anim-4 flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="btn-clip btn-clip-filled">
                Get Protected Now
              </Link>
              <Link to="/services" className="btn-clip btn-clip-outline">
                Our Services
              </Link>
            </div>
            <div className="hero-anim hero-anim-5 flex items-center gap-3 mt-10">
              <span className="pulse-dot" />
              <span className="font-barlow text-sm text-sf-text/50">
                Open 24 Hours — <span className="text-sf-green">1300 911 369</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Services Preview */}
      <section className="bg-sf-dark py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="section-label">What We Offer</div>
          <h2 className="font-rajdhani font-700 text-3xl md:text-5xl mb-12">
            FEATURED <span className="glow-text">SERVICES.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="text-sf-green mb-5">{s.icon}</div>
                <h3 className="font-rajdhani font-700 text-lg mb-3 uppercase tracking-wide">{s.title}</h3>
                <p className="font-barlow font-300 text-sm text-sf-text/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="font-rajdhani font-600 text-sm uppercase tracking-wider text-sf-green hover:underline"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustStrip />
    </>
  );
};

export default Home;
