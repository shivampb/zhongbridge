import { useReveal } from '@/hooks/useReveal';
import {
  LayoutGrid,
  Send,
  CalendarCheck,
  Eye,
  Search,
  CheckCircle2,
  Truck,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: LayoutGrid,
    title: 'Choose Your Virtual Office',
    desc: 'Select the office/service plan that fits your sourcing requirements.',
  },
  {
    icon: Send,
    title: 'Send Your Orders to Your China Office',
    desc: 'Your products are delivered to your assigned virtual office in Zhongshan.',
  },
  {
    icon: CalendarCheck,
    title: 'Book a Live Inspection',
    desc: 'Choose a convenient time and book a 60-minute video session with a representative.',
  },
  {
    icon: Eye,
    title: 'Watch Your Products Live',
    desc: 'The representative physically opens and shows your products through the video call.',
  },
  {
    icon: Search,
    title: 'Inspect & Decide',
    desc: 'Ask questions, check quality, packaging, quantity, specifications and other details.',
  },
  {
    icon: CheckCircle2,
    title: 'Approve, Return or Replace',
    desc: 'Identify products to accept, return, replace, or handle differently before moving forward.',
  },
  {
    icon: Truck,
    title: 'Continue or Ship',
    desc: 'Once satisfied, proceed with your bulk order, consolidation, shipping, or next sourcing step.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useReveal({ threshold: 0, rootMargin: '0px 0px -10% 0px' });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-white scroll-mt-20 lg:scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            From Order to Approval — In Seven Steps
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            A clear, structured process that gives you full visibility into your
            products before you commit to bulk purchasing.
          </p>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 border-l-2 border-dashed border-primary-200 lg:-translate-x-1/2" />

          <div className="space-y-16 lg:space-y-28">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={`pl-20 lg:pl-0 ${
                      isLeft ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'
                    }`}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-neutral-500 leading-relaxed max-w-md mb-4">
                      {step.desc}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className={`hidden lg:block ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className={`relative mx-auto w-full max-w-xs aspect-square rounded-[5px] flex items-center justify-center ${
                        i % 2 === 0 ? 'bg-primary-50' : 'bg-accent-50'
                      }`}
                    >
                      <step.icon
                        className={`w-16 h-16 ${i % 2 === 0 ? 'text-primary-500' : 'text-accent-500'}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="absolute left-8 top-0 lg:left-1/2 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center z-10">
                    <span className="font-display text-4xl lg:text-6xl font-bold text-neutral-100 select-none leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-1 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-100" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
