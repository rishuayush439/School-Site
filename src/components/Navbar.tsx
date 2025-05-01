
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-school-blue" />
            <span className="text-xl font-bold text-school-blue-dark font-heading">Evergreen Academy</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#faculty" className="nav-link">Faculty</a>
            <a href="#news" className="nav-link">News</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-school-blue hover:bg-school-blue-dark text-white">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
              <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
              <a href="#programs" className="nav-link" onClick={toggleMenu}>Programs</a>
              <a href="#faculty" className="nav-link" onClick={toggleMenu}>Faculty</a>
              <a href="#news" className="nav-link" onClick={toggleMenu}>News</a>
              <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
              <Button className="bg-school-blue hover:bg-school-blue-dark text-white w-full">
                Apply Now
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
