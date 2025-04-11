
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/9a118d41-bb97-4c55-8448-c73dfcc39b99.png" 
            alt="MUSHROOM" 
            className="h-8 md:h-10" 
            style={{ objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-800 hover:text-mushroom-mint font-medium transition-colors">
            Servicios
          </a>
          <a href="#process" className="text-gray-800 hover:text-mushroom-mint font-medium transition-colors">
            Proceso
          </a>
          <a href="#works" className="text-gray-800 hover:text-mushroom-mint font-medium transition-colors">
            Proyectos
          </a>
          <a href="#contact" className="bg-mushroom-mint text-white px-5 py-2 rounded-full hover:bg-mushroom-green transition-colors">
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-mushroom-mint focus:outline-none"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          <a 
            href="#services" 
            className="text-2xl text-gray-800 hover:text-mushroom-mint font-medium"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </a>
          <a 
            href="#process" 
            className="text-2xl text-gray-800 hover:text-mushroom-mint font-medium"
            onClick={() => setIsOpen(false)}
          >
            Proceso
          </a>
          <a 
            href="#works" 
            className="text-2xl text-gray-800 hover:text-mushroom-mint font-medium"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>
          <a 
            href="#contact" 
            className="text-2xl text-gray-800 hover:text-mushroom-mint font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
