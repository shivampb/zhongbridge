import { Plane, Hotel, Clock, PackageSearch, Search, Undo2, Handshake, Languages, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const painPoints = [
  { icon: Plane, title: 'Expensive Flights', desc: 'Round-trip airfare for every sourcing trip adds up fast.' },
  { icon: Hotel, title: 'Hotels & Accommodation', desc: 'Days or weeks of hotel stays, meals, and local transport.' },
  { icon: Clock, title: 'Time Away From Business', desc: 'Days or weeks away from your operations, team, and customers.' },
  { icon: PackageSearch, title: 'Difficult Verification', desc: 'Hard to confirm product quality before committing to bulk.' },
  { icon: Search, title: 'Quality Uncertainty', desc: 'You cannot see, touch, or check the products yourself.' },
  { icon: Undo2, title: 'Costly Returns', desc: 'Receiving defective goods means expensive returns and replacements.' },
  { icon: Handshake, title: 'No One On The Ground', desc: 'You need someone trustworthy in China to act on your behalf.' },
  { icon: Languages, title: 'Language Barriers', desc: 'Miscommunication with suppliers leads to costly mistakes.' },
];

const traditionalSteps = ['Travel', 'China', 'Hotel', 'Supplier', 'Inspect', 'Negotiate', 'Return'];
const virtualSteps = ['Order', 'Receive in China', 'Book Inspection', 'Inspect Live', 'Approve', 'Ship'];

export default function ProblemSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Buying From China Shouldn't Require a{' '}
            <mark className="bg-primary-200/70 text-neutral-900 px-1 rounded-sm">
              Trip to China.
            </mark>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Every year, thousands of international buyers spend significant
            time and money travelling to China just to verify products before
            committing to bulk orders. There's a better way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {painPoints.map((point, i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            const isBlue = (row + col) % 2 === 0;
            return (
              <div
                key={point.title}
                className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${(i % 4) + 1} group p-6 py-8 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition-colors transition-transform duration-150 ease-out ${
                  isBlue
                    ? 'bg-primary-600 border-primary-600 hover:bg-white hover:border-neutral-200'
                    : 'bg-white border-neutral-200 hover:bg-primary-600 hover:border-primary-600'
                }`}
                ref={i === 0 ? ref : undefined}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-150 ${
                    isBlue ? 'bg-white/15 group-hover:bg-neutral-100' : 'bg-neutral-100 group-hover:bg-white/15'
                  }`}
                >
                  <point.icon
                    className={`w-5 h-5 transition-colors duration-150 ${
                      isBlue ? 'text-white group-hover:text-neutral-900' : 'text-neutral-600 group-hover:text-white'
                    }`}
                  />
                </div>
                <h3
                  className={`text-base font-semibold mb-2 transition-colors duration-150 ${
                    isBlue ? 'text-white group-hover:text-neutral-900' : 'text-neutral-900 group-hover:text-white'
                  }`}
                >
                  {point.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-150 ${
                    isBlue ? 'text-white/80 group-hover:text-neutral-500' : 'text-neutral-500 group-hover:text-white/80'
                  }`}
                >
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-2 p-8 rounded-2xl bg-neutral-100 border border-neutral-200`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center">
                <Plane className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                The Traditional Way
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {traditionalSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-2 rounded-lg bg-white border border-neutral-300 text-sm font-semibold text-neutral-800">
                    {step}
                  </span>
                  {i < traditionalSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-neutral-600">
              Expensive, time-consuming, and hard to repeat for every order.
            </p>
          </div>

          <div className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-3 p-8 rounded-2xl bg-primary-600 border border-primary-700`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                <PackageSearch className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                With Our Virtual Office
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {virtualSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-2 rounded-lg bg-white/15 border border-white/20 text-sm font-medium text-white">
                    {step}
                  </span>
                  {i < virtualSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary-200" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-primary-100">
              Efficient, repeatable, and managed entirely from wherever you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
