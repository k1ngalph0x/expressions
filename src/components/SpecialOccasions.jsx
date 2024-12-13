import { motion } from "framer-motion";
import { Gift, ChevronRight } from "lucide-react";

const SpecialOccasions = () => {
  const occasions = [
    {
      title: "Baby Announcements",
      subtitle: "Celebrate new beginnings",
      description: "Luxury chocolate arrangements for your precious moments",
      image: "/images/babyannouncement.jpg",
      features: [
        "Custom packaging",
        "Gender reveal options",
        "Premium gift wrap",
      ],
      price: "Starting from INR 1,499",
    },
    {
      title: "Festive Gifting",
      subtitle: "Make occasions memorable",
      description: "Curated collections for festive celebrations",
      image: "/images/gifting.jpg",
      features: [
        "Personalized messages",
        "Corporate bulk orders",
        "Express delivery",
      ],
      price: "Starting from INR 2,499",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Gift className="w-5 h-5 text-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-sm">
              Celebrate with us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Special Occasions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Make your celebrations extraordinary with our handcrafted chocolate
            collections
          </motion.p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {occasions.map((occasion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-[500px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={occasion.image}
                  alt={occasion.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white"
                >
                  <span className="text-gold uppercase tracking-wider text-sm">
                    {occasion.subtitle}
                  </span>
                  <h3 className="text-3xl font-serif mt-2 mb-4">
                    {occasion.title}
                  </h3>
                  <p className="text-gray-200 mb-6">{occasion.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {occasion.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1 h-1 bg-gold rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gold">{occasion.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-sm tracking-wider"
                    >
                      VIEW COLLECTION
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOccasions;
