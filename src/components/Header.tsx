import React from 'react';
import { Menu, X, Home, Calendar, Star, Phone } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Kakamega Haven</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#rooms">Rooms</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button className="hidden md:block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
            Book Now
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#rooms">Rooms</MobileNavLink>
            <MobileNavLink href="#events">Events</MobileNavLink>
            <MobileNavLink href="#reviews">Reviews</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-700 hover:text-emerald-600 transition">
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition">
      {children}
    </a>
  );
}