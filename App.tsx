import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ventures from './components/Ventures';
import Timeline from './components/Timeline';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Ventures />
        <Timeline />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
};

export default App;