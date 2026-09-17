import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import {
  LayoutGrid,
  Send,
  CalendarCheck,
  Eye,
  Search,
  CheckCircle2,
  Truck,
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start start', 'end end'],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-neutral-50 scroll-mt-20 lg:scroll-mt-24">
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

        <div
          ref={(el) => {
            ref.current = el;
            timelineRef.current = el;
          }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 rounded-full bg-neutral-200 lg:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 rounded-full origin-top bg-primary-600 lg:-translate-x-1/2"
          />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} relative lg:grid lg:grid-cols-2 lg:gap-12 lg:min-h-[50vh] lg:items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {isLeft ? (
                    <>
                      <div className="lg:pr-16 lg:text-right pl-20 lg:pl-0 pb-8 lg:pb-0">
                        <div className="flex flex-col lg:items-end">
                          <span className="text-base font-bold text-primary-500 mb-3">
                            Step {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl lg:text-4xl font-bold text-neutral-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-lg text-neutral-600 leading-relaxed max-w-md lg:ml-auto">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="lg:pl-16 pl-20 pb-8 lg:pb-0">
                        <span className="text-base font-bold text-primary-500 mb-3 block">
                          Step {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl lg:text-4xl font-bold text-neutral-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                          {step.desc}
                        </p>
                      </div>
                    </>
                  )}

                  <div
                    className={`absolute left-8 top-8 lg:left-1/2 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white border-2 border-primary-200 flex items-center justify-center shadow-md z-10 ${i === steps.length - 1 ? 'border-success-300 bg-success-50' : ''}`}
                  >
                    <step.icon
                      className={`w-9 h-9 lg:w-11 lg:h-11 ${i === steps.length - 1 ? 'text-success-600' : 'text-primary-600'}`}
                    />
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
