import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`text-2xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              <i className="fas fa-store"></i>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Art Informática
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Início' },
              { id: 'about', label: 'Quem Somos' },
              { id: 'services', label: 'Serviços' },
              { id: 'contact', label: 'Contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col py-4">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Quem Somos' },
                { id: 'services', label: 'Serviços' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;