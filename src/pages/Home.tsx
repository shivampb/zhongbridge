import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import InspectionDemo from '@/components/InspectionDemo';
import Pricing from '@/components/Pricing';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <InspectionDemo />
      <Pricing />
      <LeadForm />
    </>
  );
}
