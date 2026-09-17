import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    q: 'What is a virtual office in China?',
    a: 'A virtual office is a dedicated cubicle or space in our Zhongshan facility where your products can be received, held, and managed. You get a physical presence in China without needing to be there — products are delivered to your office, and you inspect them remotely via live video.',
  },
  {
    q: 'Where is the office located?',
    a: 'Our office is located in Zhongshan, Guangdong — in the heart of the Greater Bay Area manufacturing region. This gives you proximity to major suppliers, factories, and logistics networks across Guangzhou, Shenzhen, and Hong Kong.',
  },
  {
    q: 'Can I receive products at my virtual office?',
    a: 'Yes. Products ordered from your suppliers can be delivered directly to your virtual office in Zhongshan. Once products arrive, you will be notified so you can book an inspection session.',
  },
  {
    q: 'How does the live product inspection work?',
    a: 'You book a video session with a China-based representative. During the session, the representative physically opens your products, shows them on camera, and checks any details you request — quality, packaging, quantity, dimensions, labels, and more. You direct the inspection in real time.',
  },
  {
    q: 'How long is a video inspection?',
    a: 'A standard video inspection session lasts 60 minutes. For customers with larger or more complex orders, extended and 1-week inspection options are available depending on the selected plan.',
  },
  {
    q: 'Can I book a 60-minute session?',
    a: 'Yes. The 60-minute inspection is our standard session option and can be booked individually. It is suitable for quick product checks, sample inspections, and single-product reviews.',
  },
  {
    q: 'Can I book inspection for an entire week?',
    a: 'Yes. A 1-week service option is available for customers managing more complex sourcing that requires repeated inspections, multiple products, or ongoing monitoring of incoming goods. Contact us to discuss availability.',
  },
  {
    q: 'Can the representative inspect multiple products?',
    a: 'Yes. During a session, the representative can inspect multiple products depending on the session duration and the complexity of the inspection. For larger orders, we recommend the extended or 1-week service options.',
  },
  {
    q: 'Can I request a return or replacement after inspection?',
    a: 'Yes. During the inspection, you can identify products that should be returned, replaced, or rejected. The representative will flag those items so they can be handled according to your instructions before shipping.',
  },
  {
    q: 'Do I need to travel to China?',
    a: 'No. The entire service is designed so you can manage your China-side product process remotely. You receive products, inspect them live, and make decisions — all from wherever you are in the world.',
  },
  {
    q: 'Can businesses outside China use the service?',
    a: 'Yes. The service is built for international buyers — importers, e-commerce sellers, retailers, wholesalers, and businesses sourcing products from China. You can be located anywhere in the world.',
  },
  {
    q: 'How are products shipped after inspection?',
    a: 'Once you have approved your products, they can proceed toward consolidation, shipping, or your next sourcing step. Shipping arrangements depend on your selected plan and specific requirements — contact our team for details.',
  },
  {
    q: 'What happens if I find a defective product?',
    a: 'If you identify defective products during the live inspection, you can flag them for return or replacement. The representative will set those items aside so they do not proceed toward shipping, saving you the cost and hassle of receiving defective goods.',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Everything you need to know about the virtual office and live product
            inspection service.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl mx-auto space-y-3`}
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-xl border border-neutral-200 bg-white overflow-hidden transition-all hover:border-primary-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-neutral-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-primary-600' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-neutral-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
