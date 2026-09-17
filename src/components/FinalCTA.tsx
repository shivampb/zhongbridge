import { ArrowRight, MessageSquare } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-600/15 rounded-full blur-[140px]" />

      <div
        ref={ref}
        className={`reveal ${isVisible ? 'is-visible' : ''} relative max-w-4xl mx-auto px-6 lg:px-8 text-center`}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          China Is Closer
          <span className="block text-primary-400">Than You Think.</span>
        </h2>
        <p className="mt-8 text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Build your presence in China without booking another flight. Receive
          your products, inspect them live, and make better sourcing decisions
          from wherever you are.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Your Virtual Office
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <MessageSquare className="w-5 h-5 text-primary-400" />
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
