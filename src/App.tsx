import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import HowItWorksPage from '@/pages/HowItWorksPage';
import WhyUsPage from '@/pages/WhyUsPage';
import FaqPage from '@/pages/FaqPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
