import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <Booking />
    </div>
  );
}

export default App;