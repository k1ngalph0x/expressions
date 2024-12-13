// import { ShoppingBag } from "lucide-react";
// import HeroSection from "./components/Hero";
// import Footer from "./components/Footer";
// import SpecialOccasions from "./components/SpecialOccasions";
// import FeaturedProducts from "./components/FeaturedProducts";
// import CollectionsGrid from "./components/CollectionGrid";

// // Main App Component
// const App = () => {
//   return (
//     <div className="w-full min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-semibold">EXPRESSIONS</h1>
//           <div className="flex items-center gap-8">
//             <a href="#collections" className="hover:text-gray-600">
//               Collections
//             </a>
//             <a href="#gifting" className="hover:text-gray-600">
//               Gifting
//             </a>
//             <a href="#contact" className="hover:text-gray-600">
//               Contact
//             </a>
//             <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
//               <ShoppingBag size={18} />
//               Cart
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Collections Grid */}
//       <CollectionsGrid />

//       {/* Featured Products */}
//       <FeaturedProducts />

//       {/* Special Occasions */}
//       <SpecialOccasions />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";
import SpecialOccasions from "./components/SpecialOccasions";
import FeaturedProducts from "./components/FeaturedProducts";
import CollectionsGrid from "./components/CollectionGrid";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ChevronUp } from "lucide-react";

import TestimonialsSection from "./components/TestimonialsSection";
import InstagramFeed from "./components/InstagramFeedSection";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "Gifting", href: "#gifting" },
    { name: "Special Occasions", href: "#special-occasions" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-lg"
            : "bg-black/40 text-white backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif"
            >
              EXPRESSIONS
            </motion.h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`text-sm tracking-wide transition-colors ${
                    isScrolled ? "hover:text-gold" : "hover:text-gold/80"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full flex items-center gap-2 transition-colors ${
                  isScrolled
                    ? "bg-black text-white hover:bg-black/90"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                <ShoppingBag size={18} />
                <span className="hidden md:inline">Cart</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-3 text-sm text-white hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full px-6 py-2 bg-white text-black rounded-full flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Cart
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>
        <HeroSection />

        <div className="bg-white">
          <CollectionsGrid />
        </div>

        <div className="bg-gray-50">
          <FeaturedProducts />
        </div>

        <div className="bg-white">
          <SpecialOccasions />
        </div>

        <div className="bg-gray-50">
          <TestimonialsSection />
        </div>

        <div className="bg-white">
          <InstagramFeed />
        </div>
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
