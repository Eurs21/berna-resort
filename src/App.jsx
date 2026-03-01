// Import the components from your components folder
import BernaHero from './components/BernaHero';
import RoomCatalog from './components/RoomCatalog';
import BistroSection from './components/BistroSection';
import TrustSection from './components/TrustSection';
import StickyFooterCTA from './components/StickyFooter';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Step 1: Hook the user with the Hero & Search */}
      <BernaHero />

      {/* Step 2: Show the value (The Wings) */}
      <RoomCatalog />

      {/* Step 3: Build desire with Food & Dining */}
      <BistroSection />

      {/* Step 4: Build Trust with Map and Reviews */}
      <TrustSection />

      {/* Step 5: Constant Conversion for Mobile Users */}
      <StickyFooterCTA />

      {/* Simple Footer for Desktop */}
      <footer className="bg-slate-900 text-white py-10 text-center text-sm">
        <p>© 2026 Bernabeach Resort - Apacible Blvd, Nasugbu, Batangas</p>
        <p className="mt-2 text-slate-400 font-mono italic text-[10px]">
          Designed for High-Performance Local Service
        </p>
      </footer>
    </div>
  );
}

export default App;