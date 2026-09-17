import { useStaggerReveal } from '@/hooks/useStaggerReveal';
import { Check, ArrowRight, Building2, Clock, Star } from 'lucide-react';

const plans = [
  {
    icon: Building2,
    name: 'Virtual Office',
    tagline: 'For buyers who need a China-based presence.',
    price: '$99',
    priceNote: 'per month',
    features: [
      'Dedicated virtual office cubicle',
      'Product receiving',
      'Product holding',
      'Notification on arrival',
      'Remote coordination',
    ],
    cta: 'Get Started',
    ctaHref: '#contact',
    featured: false,
  },
  {
    icon: Clock,
    name: '60-Minute Inspection',
    tagline: 'For one-time product verification.',
    price: '$49',
    priceNote: 'per session',
    features: [
      '60-minute live video session',
      'Real-time product inspection',
      'Quality, quantity & packaging check',
      'Direct communication with representative',
      'Inspection summary',
    ],
    cta: 'Book Inspection',
    ctaHref: '#contact',
    featured: true,
  },
  {
    icon: Star,
    name: '1-Week Service',
    tagline: 'For complex sourcing and inspection needs.',
    price: '$299',
    priceNote: 'per week',
    features: [
      'Up to 1 week of inspection access',
      'Multiple products & orders',
      'Detailed sourcing support',
      'Compare products side by side',
      'Dedicated representative time',
    ],
    cta: 'Contact Us',
    ctaHref: '#contact',
    featured: false,
  },
];

export default function Pricing() {
  const ref = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-neutral-50 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Choose Your China Presence
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Select the plan that matches your sourcing and inspection needs.
            Pricing is tailored to your requirements — contact us for a custom
            quote.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border transition-all flex flex-col ${
                plan.featured
                  ? 'bg-primary-950 border-primary-900 shadow-2xl lg:scale-105'
                  : 'bg-white border-neutral-200 hover:border-primary-200 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold shadow-md">
                  Most Popular
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  plan.featured
                    ? 'bg-primary-600'
                    : 'bg-primary-50'
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 ${plan.featured ? 'text-white' : 'text-primary-600'}`}
                />
              </div>

              <h3
                className={`text-lg font-bold mb-1 ${
                  plan.featured ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mb-5 pb-5 border-b border-neutral-200/20">
                <div
                  className={`text-3xl font-bold ${
                    plan.featured ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {plan.price}
                </div>
                <div
                  className={`text-sm mt-1 ${
                    plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                >
                  {plan.priceNote}
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured
                          ? 'bg-primary-600'
                          : 'bg-primary-100'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.featured ? 'text-white' : 'text-primary-600'}`}
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={`text-sm ${plan.featured ? 'text-neutral-300' : 'text-neutral-600'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.featured
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                    : 'bg-neutral-100 text-neutral-900 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
          Prices are shown as placeholders and will be customized based on your
          specific requirements. Contact our team for a detailed quote.
        </p>
      </div>
    </section>
  );
}
