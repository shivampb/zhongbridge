import { Building2 } from 'lucide-react';

const footerLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why ZhongBridge', href: '/why-us' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" strokeWidth={2.2} />
            </div>
            <span className="font-display font-bold text-base text-neutral-900">
              ZhongBridge
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} ZhongBridge
          </p>
        </div>
      </div>
    </footer>
  );
}
