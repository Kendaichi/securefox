import { Link } from 'react-router-dom';
import Fox3D from '@/components/Fox3D';
import StatsBar from '@/components/StatsBar';
import { Shield } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-sf-dark">
        <div className="grid-overlay" />
        <Fox3D />
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
            <p className="hero-anim hero-anim-3 mt-6 text-sf-text/70 font-barlow font-300 text-lg max-w-lg leading-relaxed">
              We understand that every business is different. Whether residential, commercial, event or
              corporate security — we design and implement a service to best suit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="bg-sf-dark py-24 relative overflow-hidden">
        <div className="ambient-blob ambient-blob-tr" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start relative z-10">
          <FadeIn>
            <div className="section-label">Our Founder</div>
            <h2 className="font-rajdhani font-700 text-3xl md:text-4xl mb-8">
              20 YEARS OF <span className="glow-text">EXPERTISE.</span>
            </h2>
            <p className="font-barlow font-300 text-sf-text/75 leading-relaxed mb-4">
              Founded by Chris Tsavdaris — a military veteran with over 20 years of security expertise —
              SecureFox was built on one principle: clients should never have to think about their security.
            </p>
            <p className="font-barlow font-300 text-sf-text/75 leading-relaxed">
              Our team is trained in real-life criminal psychology and human behaviour, giving us a unique
              edge in identifying threats before they materialise.
            </p>
          </FadeIn>

          {/* Director card */}
          <FadeIn delay={1}>
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
              <blockquote className="border-l-2 border-sf-green pl-5 italic font-barlow font-300 text-sf-text/75 text-sm leading-relaxed mb-6">
                "Our mission is to ensure that our clients don't have to even think about their security. We
                focus on mitigation and prevention — not reaction."
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {['Military Veteran', '20+ Years', 'Licensed VIC'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] font-barlow uppercase tracking-wider border border-sf-green/20 text-sf-text/70 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-sf-dark py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="max-w-[760px] mx-auto">
            <FadeIn>
              <div className="section-label">Our Story</div>
              <h2 className="font-rajdhani font-700 text-3xl md:text-4xl mb-8">
                HOW SECUREFOX <span className="glow-text">CAME TO BE.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={1}>
              <div className="space-y-6 font-barlow font-300 text-[1.1rem] leading-[1.9] text-sf-text/80">
                <p>SecureFox Security Services was founded on a straightforward observation: Melbourne's security industry was full of companies providing mediocre service at mediocre prices, and clients were either settling for it or paying premium rates for premium-sounding names that delivered the same mediocre reality.</p>
                <p>Chris Tsavdaris had spent over two decades in environments where security wasn't a line item on a budget — it was a matter of life and safety. Military operations, high-risk civilian deployments, and complex close-protection assignments had taught him exactly what professional security looks like when the stakes are real.</p>
                <p>When he founded SecureFox, he applied that same standard to the Melbourne commercial security market. The result was a company built around three principles that haven't changed since day one: hire only the best people, train them properly, and never compromise on the quality of the service — regardless of the size of the contract.</p>
                <p>Those principles are easy to say and hard to live by. They mean turning away clients whose requirements can't be met without compromising standards. They mean rejecting the majority of security officer applicants. They mean investing in ongoing training and development rather than just maintaining minimum industry compliance.</p>
                <p>They also mean that when a SecureFox client calls at 2am with an urgent security issue, they get the same quality of response they'd expect at 2pm. That consistency — that reliability — is what has built SecureFox's reputation as one of Melbourne's most trusted security companies.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-sf-surface py-[120px] relative overflow-hidden">
        <div className="ambient-blob ambient-blob-tl" />
        <div className="ambient-blob ambient-blob-br" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <FadeIn>
            <div className="section-label">What We Stand For</div>
            <h2 className="font-rajdhani font-700 text-3xl md:text-4xl mb-12">
              THE PRINCIPLES THAT DRIVE <br className="hidden md:block" />
              <span className="glow-text">EVERYTHING WE DO.</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'PREVENTION OVER REACTION',
                body: [
                  'Security that works is security that prevents incidents from occurring in the first place. Reactive security — showing up after something has gone wrong — is the lowest standard in our industry.',
                  'SecureFox trains its officers in criminal psychology, behavioural analysis, and pre-incident indicator recognition precisely because we believe the highest value a security company can provide is the incident that never happened. Our officers don\'t wait for situations to escalate. They identify, assess, and intervene early — reducing risk before it becomes reality.',
                  'This prevention-first philosophy shapes everything: how we conduct risk assessments, how we write site protocols, how we position officers, and how we train and develop our team.',
                ],
              },
              {
                num: '02',
                title: 'PEOPLE ABOVE PROCESS',
                body: [
                  'Security is ultimately about protecting people. Not assets, not buildings, not insurance premiums — people. Their physical safety, their dignity, their peace of mind, and their ability to go about their lives without fear.',
                  'Every decision SecureFox makes flows from this principle. We hire officers who understand that their role is fundamentally human — who can read a situation with empathy as well as authority, and who know that how you handle something matters as much as what you do.',
                  'Systems, protocols, and processes exist to support good people making good decisions. They are tools, not substitutes for judgment. We hire for judgment first — and build the systems around it.',
                ],
              },
              {
                num: '03',
                title: 'INTEGRITY WITHOUT COMPROMISE',
                body: [
                  'We hold a Victoria Police security licence. We operate in environments where our clients trust us with access to their most sensitive spaces, their most valuable assets, and the safety of the people in their care. That trust is not taken lightly.',
                  'Integrity at SecureFox means we report accurately — including when that\'s uncomfortable. It means we tell clients when we think their current security approach has gaps, even when they don\'t want to hear it. It means we never inflate incident reports, never pad proposals with services that aren\'t needed, and never compromise on licensing or vetting to fill a roster gap.',
                  'Our licence, our reputation, and our clients\' trust are the foundation of this business. We protect them the same way we protect everything else — fiercely and without exception.',
                ],
              },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.5}>
                <div className="bg-sf-card border border-sf-white-8 p-8 md:p-10 relative overflow-hidden border-t-2 border-t-sf-green h-full">
                  <div className="absolute top-4 right-6 font-rajdhani font-700 text-sf-green/[0.12] text-[5rem] leading-none select-none pointer-events-none">
                    {v.num}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-rajdhani font-700 text-lg mb-6">{v.title}</h3>
                    <div className="space-y-4">
                      {v.body.map((p, j) => (
                        <p key={j} className="font-barlow font-300 text-sm text-sf-text/70 leading-[1.9]">{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-sf-dark py-[120px] relative overflow-hidden">
        <div className="ambient-blob ambient-blob-bl" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <FadeIn>
            <div className="section-label">Leadership</div>
            <h2 className="font-rajdhani font-700 text-3xl md:text-4xl mb-4">
              THE PEOPLE BEHIND <br className="hidden md:block" />
              <span className="glow-text">YOUR SECURITY.</span>
            </h2>
            <p className="font-barlow font-300 text-sf-text/70 max-w-[560px] mb-12 leading-relaxed">
              SecureFox is led by professionals with real operational experience — not just management credentials.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                initials: 'CT',
                name: 'Chris Tsavdaris',
                title: 'Founder & Director',
                bio: 'Chris founded SecureFox after more than 20 years of operational security experience spanning military service and complex civilian deployments. His hands-on approach to leadership means he remains personally involved in major client onboarding, risk assessment methodology, and the professional development of SecureFox\'s security officer team. Chris\'s philosophy — that great security should feel invisible — defines the standard SecureFox holds itself to every single day.',
              },
              {
                initials: 'SF',
                name: 'Operations Team',
                title: 'Senior Operations',
                bio: 'SecureFox\'s operations team brings together decades of combined experience across corporate security, event management, residential building management, and law enforcement liaison. Available 24 hours a day, 7 days a week, our operations team is the constant behind every deployment — briefing officers, managing client communications, responding to incidents, and ensuring that every SecureFox engagement runs exactly as planned.',
              },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.5}>
                <div className="bg-sf-card border border-sf-white-8 p-8 md:p-10 h-full">
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="w-16 h-16 flex items-center justify-center font-rajdhani font-700 text-xl text-sf-dark bg-gradient-to-br from-sf-green to-sf-green/60"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <div className="font-rajdhani font-700 text-lg">{member.name}</div>
                      <div className="text-sf-green text-xs font-barlow font-500 uppercase tracking-widest">
                        {member.title}
                      </div>
                    </div>
                  </div>
                  <p className="font-barlow font-300 text-sm text-sf-text/75 leading-[1.9]">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sf-surface py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <h3 className="font-rajdhani font-700 text-2xl md:text-4xl">
              OUR <span className="glow-text">MISSION.</span>
            </h3>
          </FadeIn>
          <FadeIn delay={1}>
            <p className="font-barlow font-300 text-sf-text/75 leading-relaxed">
              Our mission is to ensure that our clients don't have to even think about their security.
              With our well-trained, professional team, we focus on mitigating and prevention tactics. Our
              team is well versed in real-life criminal psychology with a strong understanding of human
              behaviour. This is part of our training that really helps build long-term solutions for our
              clients.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* License */}
      <section className="bg-sf-dark py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="bg-sf-green/5 border border-sf-green/15 px-8 py-6 flex items-center gap-4">
              <Shield className="text-sf-green shrink-0" size={24} />
              <p className="font-barlow text-xs text-sf-text/70 uppercase tracking-widest">
                Fully licensed by Victoria Police Security | License: 946-182-80S | ACN: 618-425-602 | ABN:
                36-618-425-602
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <StatsBar variant="cards" />

      {/* CTA Band */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #242332, #0e0d1a)' }}>
        <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-rajdhani font-700 text-2xl md:text-4xl mb-4">
              READY TO WORK WITH <br className="hidden md:block" />
              <span className="glow-text">MELBOURNE'S BEST?</span>
            </h2>
            <p className="font-barlow font-300 text-sf-text/70 mb-8 leading-relaxed">
              Join the Melbourne businesses, building managers, and event organisers who trust SecureFox to protect what matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="btn-clip btn-clip-outline">
                View Our Services
              </Link>
              <Link to="/contact" className="btn-clip btn-clip-filled">
                Get In Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default About;
