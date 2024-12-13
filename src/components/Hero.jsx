import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/header1.jpg",
      title: ["Indulge", "in Luxury"],
      highlight: "NEW COLLECTION",
      description:
        "Handcrafted chocolate brownies made with Belgian dark chocolate",
    },
    {
      image: "/images/header2.jpg",
      title: ["Artisanal", "Excellence"],
      highlight: "BESTSELLER",
      description: "Award-winning recipes perfected over generations",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <img
            src={slides[currentSlide].image}
            alt="Luxury Brownies"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl space-y-8">
            {/* Highlight Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              {/* <span className="text-gold tracking-[0.3em] text-sm font-light border border-gold/30 px-4 py-2"> */}
              <span className="text-gold tracking-[0.3em] text-sm text-white font-light border border-gold/30 px-4 py-2">
                {slides[currentSlide].highlight}
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2">
              {slides[currentSlide].title.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="overflow-hidden"
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white">
                    {line}
                  </h1>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl font-light max-w-lg"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6 pt-4"
            >
              <button className="px-8 py-4 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-colors duration-300">
                SHOP NOW
              </button>
              <button className="px-8 py-4 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-colors duration-300">
                DISCOVER MORE
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          key={currentSlide}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-gold origin-left"
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white/70 font-light">
        <span className="text-2xl text-gold">
          {(currentSlide + 1).toString().padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        <span>{slides.length.toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default HeroSection;
