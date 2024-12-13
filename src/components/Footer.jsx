import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    collections: [
      { name: "Silver Collection", href: "#" },
      { name: "Gold Collection", href: "#" },
      { name: "Imperial Collection", href: "#" },
      { name: "Special Edition", href: "#" },
      { name: "Corporate Gifts", href: "#" },
    ],
    information: [
      { name: "About Us", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    support: [
      { name: "Track Order", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Wholesale", href: "#" },
      { name: "Career", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-4">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest collections and special offers
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gold text-black rounded-lg hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <img src="/logo.png" alt="Expressions" className="h-8" />
            <p className="text-gray-400 leading-relaxed">
              Crafting moments of joy with handmade chocolate delights since
              1995.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@expressions.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@expressions.com
              </a>
              <a
                href="tel:+12345678901"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 234 567 890
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                123 Chocolate Avenue, Sweet City
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-medium mb-6">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-medium mb-6">Information</h4>
            <ul className="space-y-3">
              {footerLinks.information.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-medium mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Expressions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
