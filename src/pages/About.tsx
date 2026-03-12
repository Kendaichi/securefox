import FoxBackground from '@/components/FoxBackground';
import StatsBar from '@/components/StatsBar';
import { Shield } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-sf-dark">
        <div className="grid-overlay" />
        <FoxBackground />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-16">
          <div className="max-w-2xl">
            <div className="section-label hero-anim hero-anim-1">About SecureFox</div>
            <h1
              className="hero-anim hero-anim-2 font-rajdhani font-700 leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              MILITARY PRECISION.
              <br />
              <span className="glow-text">CIVILIAN PROTECTION.</span>
            </h1>
            <p className="hero-anim hero-anim-3 mt-6 text-sf-text/50 font-barlow font-300 text-lg max-w-lg leading-relaxed">
              We understand that every business is different. Whether residential, commercial, event or
              corporate security — we design and implement a service to best suit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="bg-sf-dark py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Our Founder</div>
            <h2 className="font-rajdhani font-700 text-3xl md:text-4xl mb-8">
              20 YEARS OF <span className="glow-text">EXPERTISE.</span>
            </h2>
            <p className="font-barlow font-300 text-sf-text/60 leading-relaxed mb-4">
              Founded by Chris Tsavdaris — a military veteran with over 20 years of security expertise —
              SecureFox was built on one principle: clients should never have to think about their security.
            </p>
            <p className="font-barlow font-300 text-sf-text/60 leading-relaxed">
              Our team is trained in real-life criminal psychology and human behaviour, giving us a unique
              edge in identifying threats before they materialise.
            </p>
          </div>

          {/* Director card */}
          <div className="bg-sf-card border border-sf-green/10 p-10 shadow-lg shadow-sf-green/5">
            <div className="flex items-center gap-5 mb-6">
              <div
                className="w-16 h-16 flex items-center justify-center font-rajdhani font-700 text-xl text-sf-dark bg-gradient-to-br from-sf-green to-sf-green/60"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                CT
              </div>
              <div>
                <div className="font-rajdhani font-700 text-lg">Chris Tsavdaris</div>
                <div className="text-sf-green text-xs font-barlow font-500 uppercase tracking-widest">
                  Founder & Director
                </div>
              </div>
            </div>
            <blockquote className="border-l-2 border-sf-green pl-5 italic font-barlow font-300 text-sf-text/60 text-sm leading-relaxed mb-6">
              "Our mission is to ensure that our clients don't have to even think about their security. We
              focus on mitigation and prevention — not reaction."
            </blockquote>
            <div className="flex flex-wrap gap-2">
              {['Military Veteran', '20+ Years', 'Licensed VIC'].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.65rem] font-barlow uppercase tracking-wider border border-sf-green/20 text-sf-text/50 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sf-surface py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
          <h3 className="font-rajdhani font-700 text-2xl md:text-4xl">
            OUR <span className="glow-text">MISSION.</span>
          </h3>
          <p className="font-barlow font-300 text-sf-text/60 leading-relaxed">
            Our mission is to ensure that our clients don't have to even think about their security.
            With our well-trained, professional team, we focus on mitigating and prevention tactics. Our
            team is well versed in real-life criminal psychology with a strong understanding of human
            behaviour. This is part of our training that really helps build long-term solutions for our
            clients.
          </p>
        </div>
      </section>

      {/* License */}
      <section className="bg-sf-dark py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="bg-sf-green/5 border border-sf-green/15 px-8 py-6 flex items-center gap-4">
            <Shield className="text-sf-green shrink-0" size={24} />
            <p className="font-barlow text-xs text-sf-text/50 uppercase tracking-widest">
              Fully licensed by Victoria Police Security | License: 946-182-80S | ACN: 618-425-602 | ABN:
              36-618-425-602
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar variant="cards" />
    </>
  );
};

export default About;
