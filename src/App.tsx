import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ValueProposition from './components/ValueProposition';
import Differentials from './components/Differentials';
import Investment from './components/Investment';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <ValueProposition />
      <Differentials />
      <Investment />
      <Testimonials />
      <FinalCTA />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;