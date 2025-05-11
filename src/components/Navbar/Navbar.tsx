"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react';

export default function ShamsTexNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items (English only)
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 z-50 w-full scroll-smooth">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 ml-2" />
            <span className="text-2xl font-bold text-amber-500 mr-2">
              SHAMS TEX
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={'px-3 py-2 text-sm font-medium hover:text-amber-500 transition-colors ' + (isActive(item.href) ? 'text-amber-500' : 'text-white')} // Add the 'pathname'${item.href}' ? 'text-amber-500' : 'text-white'}}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-amber-500 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden text-left">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:text-amber-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}