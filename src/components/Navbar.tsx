import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <div className="flex items-baseline">
                <span className="font-raider text-3xl">
                  <span className="text-primary-red">G</span>
                  <span className="text-primary-black">M</span>
                </span>
                <span className="ml-2 font-montserrat text-xl tracking-wider font-semibold text-primary-black">
                  EXPRESS ROUTES
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#services" className="font-montserrat text-primary-black hover:text-primary-red transition-colors">
                  Services
                </a>
                <a href="#why-choose-us" className="font-montserrat text-primary-black hover:text-primary-red transition-colors">
                  Benefits
                </a>
                <a href="#contact" className="font-montserrat text-primary-black hover:text-primary-red transition-colors">
                  Contact
                </a>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-red text-white px-6 py-2 rounded-lg font-montserrat hover:shadow-lg transition-all"
                  onClick={handleGetQuote}
                >
                  Get Quote
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-black hover:text-primary-red"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#services" className="block px-3 py-2 text-primary-black hover:text-primary-red font-montserrat">
                Services
              </a>
              <a href="#why-choose-us" className="block px-3 py-2 text-primary-black hover:text-primary-red font-montserrat">
                Benefits
              </a>
              <a href="#contact" className="block px-3 py-2 text-primary-black hover:text-primary-red font-montserrat">
                Contact
              </a>
              <button 
                className="w-full mt-2 bg-primary-red text-white px-6 py-2 rounded-lg font-montserrat hover:shadow-lg"
                onClick={handleGetQuote}
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}