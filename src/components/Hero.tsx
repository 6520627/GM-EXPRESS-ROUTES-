import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function Hero() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-screen bg-neutral-white pt-16">
        {/* Animated background with truck silhouette */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/3 transform -translate-y-1/2 opacity-5"
          >
            <Truck size={400} />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-bold text-primary-black mb-6 font-montserrat"
              >
                Driving Your
                <span className="text-primary-red block">Freight Forward</span>
              </motion.h1>
              <p className="text-xl text-neutral-gray mb-8 font-roboto">
                Experience seamless logistics solutions with Miami's most trusted freight partner.
                We deliver reliability, speed, and excellence in every mile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  className="group bg-primary-red text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all font-montserrat flex items-center justify-center"
                >
                  Get a Quote
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </motion.button>
                <motion.a 
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-primary-black text-primary-black px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-montserrat flex items-center justify-center"
                >
                  Explore Services
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/truck-hero.jpg" 
                  alt="Modern freight truck on highway" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"
        />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl" />
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}