'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nameVisible, setNameVisible] = useState(true);
  const [isCondensed, setIsCondensed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setNameVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setIsCondensed(currentScrollY > 100);
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    
    if (path === '#home') {
      // If we're already on home page, scroll to top
      if (location.pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Navigate to home page
        router.push('/');
      }
      return;
    }

    // Handle resume page navigation
    if (path === '/resume') {
      router.push(path);
      return;
    }

    // Handle hash navigation for other sections
    if (path.startsWith('#') && location.pathname === '/') {
      const element = document.querySelector(path);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (path.startsWith('#')) {
      // If trying to navigate to a section but not on home page,
      // first navigate to home then scroll
      const element = document.querySelector(path);
      if (element) {
        router.push('/');
        setTimeout(() => {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 500);  
      }
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      router.push('/');
    }
  };

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Contact', path: '#contact' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 
        transition duration-500 ease-in-out ${
        scrolled ? 'py-4' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center">
                <button 
                  onClick={handleHomeClick}
                  className="overflow-hidden relative h-8 cursor-pointer group"
                >
                  <div className={`transition-all duration-1000 ease-in-out transform relative ${
                    nameVisible 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-full opacity-0'
                  }`}>
                    <h1 className={`text-white/90 font-medium text-xl transition-all duration-1000 ease-in-out transform ${
                      isCondensed 
                        ? 'opacity-0 translate-y-full' 
                        : 'opacity-100 translate-y-0'
                    }`}>
                      Aryan Singh
                    </h1>
                    <h1 className={`text-white/90 font-medium text-xl absolute top-0 left-0 transition-all duration-1000 ease-in-out transform ${
                      isCondensed 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-full'
                    }`}>
                      AS
                    </h1>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100" />
                </button>
              </div>

              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-white/70 hover:text-white transition-colors duration-100 font-medium"
              >
                <span>Menu</span>
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 transition-all duration-[1000ms] ease-in-out ${
        isOpen 
          ? 'opacity-100 pointer-events-auto overflow-y-auto'
          : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-[1200ms] ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => setIsOpen(false)} 
        />
        
        <div className={`absolute inset-x-0 top-24 transition-all duration-[1500ms] ease-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="max-w-7xl mx-auto px-4 pb-8">
            <div className={`bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-[1500ms] transform ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`block px-6 py-4 rounded-xl font-medium text-lg
                      text-white/70 hover:text-white hover:bg-white/5
                      transition-all duration-[1200ms] ease-out transform
                      ${isOpen 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-full opacity-0'
                      }`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;