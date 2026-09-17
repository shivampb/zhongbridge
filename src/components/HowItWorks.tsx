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
    desc: "Pick the plan that matches how you source — from a single inspection to a full-time office presence. Every plan gives you a real Zhongshan address and a dedicated team ready to act as your eyes on the ground.",
  },
  {
    icon: Send,
    title: 'Send Your Orders to Your China Office',
    desc: 'Have suppliers ship directly to your virtual office. We receive, log, and photograph every parcel the moment it arrives, so nothing sits unaccounted for and you always know what landed and when.',
  },
  {
    icon: CalendarCheck,
    title: 'Book a Live Inspection',
    desc: 'Pick a time that works for your schedule, anywhere in the world, and reserve a 60-minute video session. A local representative will have your products ready and unpacked before the call starts.',
  },
  {
    icon: Eye,
    title: 'Watch Your Products Live',
    desc: "Join the call and watch in real time as the representative opens boxes, unwraps items, and walks you through the shipment — just as if you were standing in the warehouse yourself.",
  },
  {
    icon: Search,
    title: 'Inspect & Decide',
    desc: 'Direct the inspection as it happens: ask to zoom in, check stitching or seals, verify quantities, compare against spec sheets, and raise any concern the moment you spot it.',
  },
  {
    icon: CheckCircle2,
    title: 'Approve, Return or Replace',
    desc: 'Once you’ve seen everything, decide with confidence — accept the batch, flag items for return, or request a replacement, all backed by the video record from your session.',
  },
  {
    icon: Truck,
    title: 'Continue or Ship',
    desc: 'With approval given, we consolidate, repackage, or forward your goods exactly as instructed — whether that means holding stock, combining shipments, or sending straight to your next destination.',
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
                    <p className="text-lg text-neutral-500 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
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
