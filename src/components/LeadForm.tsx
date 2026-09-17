import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  'Virtual Office',
  'Product Inspection',
  '60-Minute Video Inspection',
  'Extended Inspection',
  '1-Week Service',
  'Other',
];

const fieldClass =
  'w-full px-0 py-2 bg-transparent border-0 border-b border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary-600 outline-none transition-colors';

export default function LeadForm() {
  const { ref, isVisible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative bg-white scroll-mt-20 lg:scroll-mt-24">
      <div className="w-full">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} relative min-h-screen`}
        >
          <img
            src="https://res.cloudinary.com/cjzo6qye/image/upload/v1789630085/ChatGPT_Image_Sep_17_2026_12_54_37_PM.png"
            alt="Team reviewing sourcing details"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-y-0 left-0 lg:w-[42%] xl:w-[48%] z-10 hidden lg:flex flex-col items-center justify-center px-8 text-center">
            <span className="mb-4 inline-block w-fit rounded-[5px] bg-white/10 ring-1 ring-white/20 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 backdrop-blur-sm">
              No Flights Needed
            </span>
            <h3 className="font-display font-light text-white leading-[1.05] text-5xl">
              China Is
              <br />
              <span className="font-bold text-primary-400">Closer</span> Than
              <br />
              You Think.
            </h3>
            <div className="mt-5 h-1 w-16 rounded-full bg-primary-400" />
          </div>

          <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
            <div className="max-w-xs px-5 py-4 rounded-[5px] bg-white/90 backdrop-blur-sm shadow-lg text-sm text-neutral-700">
              No time to fill this out? Leave your contact — we'll reach out
              and scope your sourcing needs directly.
            </div>
          </div>

          <div className="relative z-10 w-full h-full flex lg:justify-end lg:p-8">
            <div className="w-full lg:w-[58%] xl:w-[52%] bg-white lg:rounded-[5px] lg:shadow-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-success-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-neutral-600 max-w-sm">
                  Your inquiry has been received. Our team will get back to you
                  within 1–2 business days to discuss your sourcing needs.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-950">
                    Get Started
                  </h2>
                  <p className="hidden sm:block text-sm text-neutral-500 text-right max-w-[220px]">
                    Ready to source from China? Fill the form and we'll be in
                    touch shortly.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name<span className="text-error-500">*</span>
                    </label>
                    <input type="text" required className={fieldClass} placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Company Name
                    </label>
                    <input type="text" className={fieldClass} placeholder="Acme Trading Co." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Work Email<span className="text-error-500">*</span>
                    </label>
                    <input type="email" required className={fieldClass} placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input type="tel" className={fieldClass} placeholder="+1 555 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Country
                    </label>
                    <input type="text" className={fieldClass} placeholder="United States" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Order Volume
                    </label>
                    <select className={`${fieldClass} appearance-none`} defaultValue="">
                      <option value="" disabled>Select range</option>
                      <option>Under 100 units</option>
                      <option>100–500 units</option>
                      <option>500–1,000 units</option>
                      <option>1,000–5,000 units</option>
                      <option>5,000+ units</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Interested in
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 px-3 py-2 rounded-[5px] border border-neutral-200 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-all text-sm"
                      >
                        <input
                          type="checkbox"
                          name="service"
                          value={service}
                          className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-neutral-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Tell us about the project
                  </label>
                  <textarea
                    rows={2}
                    className={`${fieldClass} resize-none`}
                    placeholder="Your sourcing needs, suppliers, or any questions you have."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 whitespace-nowrap pl-6 pr-1.5 py-1.5 rounded-[5px] bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Join Now'}
                  <span className="flex items-center justify-center w-9 h-9 rounded-[5px] bg-primary-700">
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
