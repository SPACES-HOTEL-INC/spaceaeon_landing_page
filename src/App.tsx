import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Ecosystem from './sections/Ecosystem';
import GuestBenefits from './sections/GuestBenefits';
import HostBenefits from './sections/HostBenefits';
import AboutUs from './sections/AboutUs';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <GuestBenefits />
        <HostBenefits />
        <AboutUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
