import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black mb-4 font-montserrat">Contact Us</h2>
          <p className="text-xl text-neutral-gray font-roboto">
            Get in touch with our team for any inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-black mb-2 font-montserrat">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent font-roboto"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-primary-black mb-2 font-montserrat">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent font-roboto"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-primary-black mb-2 font-montserrat">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent font-roboto"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-primary-red text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-montserrat"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-black mb-2 font-montserrat">Location</h3>
                <p className="text-neutral-gray font-roboto">Miami, Florida</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-black mb-2 font-montserrat">Phone</h3>
                <p className="text-neutral-gray font-roboto">+1 (305) 555-0123</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-black mb-2 font-montserrat">Email</h3>
                <p className="text-neutral-gray font-roboto">contact@gmexpressroutes.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}