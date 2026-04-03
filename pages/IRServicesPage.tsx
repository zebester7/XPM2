import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const IRServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Professional O Level IR Writing Help | Custom Global Perspectives Report | XPM Tutors";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert Professional IR writing help for O Level Global Perspectives. Get distinction-grade Individual Report support with personalized guidance. Book free demo today.');
    }
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Professional O Level IR Writing Consultancy",
          "description": "Expert Individual Report writing support for O Level Global Perspectives with distinction-grade guidance",
          "provider": {
            "@type": "Organization",
            "name": "XPM Tutors",
            "url": "https://xpmtutors.com",
            "logo": "https://xpmtutors.com/logo.png",
            "sameAs": ["https://facebook.com/xpmtutors"]
          },
          "areaServed": {
            "@type": "Country",
            "name": "Global"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "180"
          },
          "offers": {
            "@type": "Offer",
            "name": "Free Demo IR Consultancy Session",
            "price": "0",
            "priceCurrency": "USD",
            "url": "https://xpmtutors.com/hire-teacher"
          },
          "serviceType": ["Academic Writing Support", "Individual Report Consultation", "Global Perspectives Tutoring"]
        })}
      </script>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-xpm-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-xpm-green/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full mb-6 border border-xpm-blue/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xpm-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-xpm-green"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-xpm-blue">Expert IR Consultancy Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                Professional O Level <span className="text-xpm-blue">Individual Report</span> Support
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Don't just guide your Global Perspectives IR—get comprehensive support from expert consultants. We help you craft distinction-grade reports that stand out. Personalized feedback, structured methodology, and proven results.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Distinction-grade IR consultancy with proven track record',
                  'Customized support for your Global Perspectives research',
                  'Expert guidance on structure, analysis, and evaluation',
                  'Regular feedback and revision support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-xpm-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20need%20help%20with%20my%20O%20Level%20Global%20Perspectives%20Individual%20Report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-xpm-orange text-white font-black rounded-2xl shadow-xl shadow-xpm-orange/20 hover:bg-orange-600 transition transform hover:-translate-y-1 text-center text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
                  </svg>
                  Book Your Free Trial
                </a>
                <Link
                  to="/ir-services"
                  className="px-8 py-4 bg-white text-xpm-blue border-2 border-xpm-blue/20 font-black rounded-2xl hover:bg-slate-50 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-xpm-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a6 6 0 100 12H6a1 1 0 100 2 2 2 0 002-2v-4a9 9 0 11-8.5-8.5V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Research Partnership</h3>
                <p className="text-slate-600">Work with experienced consultants who understand O Level evaluation criteria and what examiners look for in top-grade reports.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-xpm-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Structured Methodology</h3>
                <p className="text-slate-600">Our proven framework helps you organize research, analyze sources critically, and present compelling arguments that earn top marks.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-xpm-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.051v.417a3 3 0 00-.956 1.643v1.285c0 .563-.091 1.116-.273 1.642H19.5a.75.75 0 00.75-.75V9.5a3 3 0 00-3-3h-.081a4.753 4.753 0 00-8.919 0H7.5a3 3 0 00-3 3v7.25a.75.75 0 00.75.75h4.467c-.182-.526-.273-1.079-.273-1.642v-1.285a3 3 0 00-.956-1.643V6.506a3.066 3.066 0 012.812-3.051zM9 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Expert Guidance</h3>
                <p className="text-slate-600">Get direct feedback from tutors with 7+ years of expertise in Global Perspectives, ensuring your report meets distinction standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Comprehensive IR Support</h2>
            <p className="text-xl text-slate-600">From research selection to final submission, we support every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Research Selection', desc: 'Help identifying and narrowing down contemporary global issues' },
              { title: 'Source Evaluation', desc: 'Guidance on finding credible, diverse sources for your research' },
              { title: 'Structure Optimization', desc: 'Crafting compelling introductions, body sections, and conclusions' },
              { title: 'Critical Analysis', desc: 'Developing sophisticated arguments and evaluating multiple perspectives' },
              { title: 'Revision Support', desc: 'Detailed feedback on drafts with specific improvement suggestions' },
              { title: 'Final Polish', desc: 'Ensuring academic language, proper citations, and formatting' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-xpm-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-xpm-blue">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-xpm-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Ready to Excel in Global Perspectives?</h2>
          <p className="text-xl mb-10 text-white/90">Get expert IR consultancy support and boost your grades to distinction level. Start with a free demo session today.</p>
          <a
            href="https://wa.me/923009508592?text=Assalamu%20Alaikum%20I%20want%20to%20book%20a%20free%20IR%20consultancy%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-xpm-orange text-white font-black rounded-2xl shadow-xl shadow-black/20 hover:bg-orange-600 transition transform hover:-translate-y-1 text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.842 5.404 2.439 7.623l.375 1.414 1.53-1.506c2.117 1.627 4.767 2.469 7.402 2.469 5.428 0 9.854-4.426 9.854-9.854 0-2.635-.846-5.291-2.443-7.577A9.835 9.835 0 0011.968 5.41c-5.428 0-9.847 4.426-9.847 9.851 0 .533.043 1.06.123 1.579l.26 1.561-1.534.381c-.766.184-1.41.653-1.756 1.286A10.021 10.021 0 001.5 12.208c0-5.428 4.426-9.854 9.854-9.854z"/>
            </svg>
            Book Free Trial - IR Consultancy
          </a>
        </div>
      </section>
    </div>
  );
};

export default IRServicesPage;
