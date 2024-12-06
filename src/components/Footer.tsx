import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Name */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-baseline">
              <span className="font-raider text-3xl">
                <span className="text-primary-red">G</span>
                <span className="text-primary-black">M</span>
              </span>
              <span className="ml-2 font-montserrat text-xl tracking-wider font-semibold text-primary-black">
                EXPRESS ROUTES
              </span>
            </div>
            <p className="mt-4 text-neutral-gray font-roboto">
              Your trusted partner in freight and logistics services
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-black font-montserrat">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-red" />
                <a href="mailto:contact@gmexpressroutes.com" className="text-neutral-gray hover:text-primary-red transition-colors font-roboto">
                  contact@gmexpressroutes.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-red" />
                <a href="tel:+13055550123" className="text-neutral-gray hover:text-primary-red transition-colors font-roboto">
                  +1 (305) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-red" />
                <span className="text-neutral-gray font-roboto">
                  Miami, Florida
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-black font-montserrat">Quick Links</h3>
            <div className="space-y-3">
              <a href="#services" className="block text-neutral-gray hover:text-primary-red transition-colors font-roboto">
                Our Services
              </a>
              <a href="#why-choose-us" className="block text-neutral-gray hover:text-primary-red transition-colors font-roboto">
                Why Choose Us
              </a>
              <a href="#contact" className="block text-neutral-gray hover:text-primary-red transition-colors font-roboto">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-neutral-gray font-roboto">
            © {new Date().getFullYear()} GM Express Routes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}