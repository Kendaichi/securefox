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

const serviceDetails = [
  {
    bg: 'bg-sf-dark',
    label: 'Security Guards',
    heading: <>MELBOURNE'S MOST PROFESSIONAL <br className="hidden md:block" /><span className="glow-text">SECURITY GUARDS.</span></>,
    body: [
      'When it comes to physical security, the quality of your personnel is everything. A security guard is only as effective as their training, their situational awareness, and their ability to make good decisions under pressure. At SecureFox, we set the standard that others in Melbourne\'s security industry are measured against.',
      'Every SecureFox security guard holds a current Victoria Police individual security licence and has passed our multi-stage recruitment and vetting process. We don\'t use labour hire agencies and we don\'t rely on unvetted subcontractors — every officer who wears the SecureFox name has been personally assessed by our senior management team and briefed specifically for your site before their first shift.',
      'Our security guards are trained in conflict de-escalation and non-physical intervention techniques, access control and visitor management, emergency response and evacuation procedures, detailed incident documentation and reporting, criminal psychology and pre-incident threat identification, and first aid and CPR response.',
      'Whether you need a single guard for a small commercial premises, a team for a corporate campus, or a rapid-deployment response to an emerging security situation, SecureFox can scale to your exact requirements — with the same uncompromising standard of professionalism at every level.',
    ],
    bullets: [
      'Individually licensed under Victoria Police — every officer, every shift',
      'Fully briefed on your specific site before first deployment',
      'Available for short-term, long-term, and emergency deployments',
      'Regular performance reviews and ongoing professional development',
    ],
  },
  {
    bg: 'bg-sf-surface',
    label: 'Event Security',
    heading: <>EVENT SECURITY THAT HANDLES <br className="hidden md:block" /><span className="glow-text">EVERYTHING BEFORE IT HAPPENS.</span></>,
    body: [
      'Running a successful event in Melbourne means managing an enormous number of variables — and security is the one you absolutely cannot afford to get wrong. A single incident can define how an event is remembered, undermine your brand, and expose you to significant legal liability. SecureFox event security teams are deployed with one mandate: make sure that doesn\'t happen.',
      'We approach every event engagement the same way we approach every other SecureFox deployment — with a proper assessment, a tailored plan, and officers who have been specifically briefed on your event\'s unique requirements before the first guest arrives.',
      'Our event security experience spans corporate conferences, award nights, and product launches, live music events, festivals, and concerts, sporting events and community gatherings, private functions and VIP experiences, and charity events, galas, and formal dinners.',
      'For every event, we develop a detailed security management plan that addresses access control and credential management, crowd management and flow planning, emergency evacuation procedures, communication protocols between security, venue, and event staff, incident response hierarchy and escalation procedures, and coordination with Victoria Police and emergency services where required.',
      'Our event security officers are experienced in crowd psychology — they understand how large groups of people behave, how situations can escalate, and how to intervene early and decisively before small problems become large ones. We don\'t just react to incidents. We prevent them.',
    ],
    bullets: [
      'Detailed security management plans developed for every event',
      'Officers trained in crowd psychology and pre-incident intervention',
      'Full coordination with venue management and emergency services',
      'Available for events from 50 to 5,000+ attendees',
    ],
  },
  {
    bg: 'bg-sf-dark',
    label: 'Concierge Security',
    heading: <>THE FIRST THING PEOPLE SEE <br className="hidden md:block" /><span className="glow-text">SHOULD INSPIRE CONFIDENCE.</span></>,
    body: [
      'The reception desk or front entrance of your building is the intersection of two things that might seem contradictory: warm, professional hospitality and uncompromising access control. Most buildings choose one or the other. SecureFox concierge security officers deliver both simultaneously — because we train specifically for that challenge.',
      'A SecureFox concierge security officer is selected not just for their security credentials but for their communication skills, professional presentation, emotional intelligence, and ability to manage high-pressure situations with calm authority. They understand that in premium environments, how they handle a situation is as important as the outcome they achieve.',
      'Our concierge security services include front-of-house visitor reception and sign-in management, access card, key, and fob management, contractor and delivery management and verification, CCTV monitoring and alarm response, emergency warden and evacuation responsibilities, after-hours building security and lockup, and detailed daily logs and incident reporting.',
      'SecureFox concierge officers are deployed across Melbourne\'s premium CBD office towers, luxury residential complexes, high-end retail precincts, and corporate headquarters. In every environment, they represent the building\'s standard of professionalism — which means they represent your brand, your values, and your commitment to the people who live and work there.',
    ],
    bullets: [
      'Selected for communication skills and professional presentation — not just security credentials',
      'Experienced in premium CBD, residential, and corporate environments',
      'Full front-of-house capability combined with rigorous access control',
      'Site-specific briefing ensures seamless integration with existing building operations',
    ],
  },
  {
    bg: 'bg-sf-surface',
    label: 'Retail Security',
    heading: <>RETAIL SECURITY THAT PROTECTS <br className="hidden md:block" /><span className="glow-text">YOUR TENANTS AND YOUR BRAND.</span></>,
    body: [
      'Shopping centres are among the most operationally complex security environments in existence. You\'re managing thousands of daily visitors, dozens or hundreds of individual tenants, large physical footprints with multiple entry and exit points, and the constant tension between maintaining a welcoming retail atmosphere and enforcing genuine security.',
      'SecureFox shopping centre security teams are built for exactly this environment. We understand retail — its rhythms, its risks, and the fine line between effective security and a heavy-handed presence that drives shoppers away.',
      'Our shopping centre security approach is built around three pillars: visible deterrence that prevents incidents before they occur, active intelligence that identifies and monitors individuals who present a risk, and rapid, professional response when intervention is required.',
      'Our shopping centre security services include uniformed security officer patrols and static posts, plain-clothes loss prevention officers, access control at loading docks and staff entrances, CCTV monitoring and footage management, management of anti-social behaviour and trespass situations, coordination with Victoria Police for escalated incidents, first aid response, and detailed incident and daily activity reporting for centre management.',
      'We\'ve worked with retail environments across Melbourne ranging from neighbourhood shopping strips to large multi-level regional centres, and we understand that each has its own security culture, its own risk profile, and its own expectations of how security should look and feel.',
    ],
    bullets: [
      'Uniformed and plain-clothes capability for maximum versatility',
      'Specialist retail loss prevention expertise and training',
      'Full incident reporting suite for centre management and insurers',
      'Experience across Melbourne retail environments of all sizes',
    ],
  },
  {
    bg: 'bg-sf-dark',
    label: 'Residential Security',
    heading: <>YOUR RESIDENTS DESERVE TO FEEL <br className="hidden md:block" /><span className="glow-text">COMPLETELY AT HOME.</span></>,
    body: [
      'There is something uniquely sensitive about residential building security. Unlike a commercial office or a retail centre, a residential building is where people sleep, raise families, and expect an absolute baseline of safety and privacy. The security team you deploy into that environment needs to understand that — and behave accordingly.',
      'SecureFox residential security officers are selected and trained with this in mind. They are professional and authoritative when the situation demands it, and approachable and discreet at all other times. Residents should feel reassured by their presence, not surveilled by it.',
      'We work closely with building managers, strata managers, and owners\' corporations to develop security protocols that match the specific profile of each building — its layout, its resident demographics, its existing access control infrastructure, and its particular history of security incidents or concerns.',
      'Our residential building security services include 24-hour concierge and access control for premium buildings, visitor and contractor management and verification, patrol and overnight monitoring services, CCTV oversight and management, key, fob, and access card management, after-hours emergency response, parking and common area management, and comprehensive incident documentation and reporting.',
      'Whether you manage a boutique apartment complex of 20 units or a large-scale residential tower of several hundred, SecureFox has the personnel, the protocols, and the experience to deliver a security solution that makes every resident feel exactly as they should: safe, respected, and at home.',
    ],
    bullets: [
      'Officers specifically selected for interpersonal skills in residential environments',
      'Customised protocols developed for each building\'s unique profile',
      'Full range of services from 24/7 concierge to periodic patrol',
      'Direct reporting line to building management at all times',
    ],
  },
  {
    bg: 'bg-sf-surface',
    label: 'Tailored Security',
    heading: <>YOUR SECURITY PLAN. <br className="hidden md:block" /><span className="glow-text">BUILT ENTIRELY AROUND YOU.</span></>,
    body: [
      'The most dangerous assumption in the security industry is that all security problems look the same. They don\'t. A logistics warehouse has completely different vulnerabilities to a CBD office tower. A music festival presents entirely different challenges to a corporate awards dinner. A residential building in Southbank operates in a different risk environment to a shopping centre in Melbourne\'s outer suburbs.',
      'When a security company applies a templated solution to a unique security environment, the gaps between what the template assumes and what the environment actually requires become vulnerabilities. At SecureFox, we close those gaps by starting from scratch with every new client engagement.',
      'Our tailored security approach begins with a comprehensive security audit — a professional assessment of your physical environment, your operational patterns, your existing security measures, and the specific threat vectors relevant to your industry, location, and risk profile. From this foundation, we design a security framework that addresses your actual situation, not a hypothetical average.',
      'A tailored SecureFox security package can incorporate any combination of uniformed security officer deployment, mobile patrol services, plain-clothes security personnel, CCTV monitoring and management, access control oversight and management, alarm response services, security management planning and documentation, staff security awareness briefings, emergency response planning, and regular security reviews and package adaptation as your needs evolve.',
      'Pricing is always transparent and itemised — you pay for what you actually need and nothing you don\'t. We will walk you through every element of the proposal so you understand exactly what you\'re getting and why we\'ve recommended it. And because your security requirements will change over time, we build review cycles into every ongoing contract so your package stays current, effective, and genuinely tailored — always.',
    ],
    bullets: [
      'Full security audit conducted before any proposal is developed',
      'Every package individually designed — no templates, no shortcuts',
      'Transparent itemised pricing with no hidden fees or lock-in penalties',
      'Built-in review cycles ensure your security evolves with your needs',
    ],
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

      {/* Expanded Service Details */}
      {serviceDetails.map((svc, i) => (
        <section key={i} className={`${svc.bg} py-[120px]`}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <div className="section-label">{svc.label}</div>
                <h2 className="font-rajdhani font-700 text-2xl md:text-4xl mb-8">{svc.heading}</h2>
                <div className="space-y-5">
                  {svc.body.map((p, j) => (
                    <p key={j} className="font-barlow font-300 text-[1.1rem] leading-[1.9] text-sf-text/65">{p}</p>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  {svc.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-sf-green mt-2 shrink-0" />
                      <p className="font-barlow font-300 text-sm text-sf-text/60">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="aspect-[4/5] rounded-none bg-gradient-to-br from-sf-card to-sf-dark border border-sf-white-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sf-green/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-sf-green/3 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
