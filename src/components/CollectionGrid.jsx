import { motion } from "framer-motion";

const CollectionsGrid = () => {
  const collections = [
    {
      title: "Silver Collection",
      description: "Delicate pastel tones for everyday luxury",
      image: "/src/assets/images/slivercollection.jpg",
      price: "From $29.99",
      items: "12 varieties",
    },
    {
      title: "Gold Collection",
      description: "Rich, formal hues for special moments",
      image: "/src/assets/images/goldcollection.jpg",
      price: "From $49.99",
      items: "15 varieties",
    },
    {
      title: "Imperial Collection",
      description: "Exclusive luxury packaging for grand occasions",
      image: "/src/assets/images/imperialcollection.png",
      price: "From $89.99",
      items: "20 varieties",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Discover Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Our Collections
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-lg overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              >
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif">{collection.title}</h3>
                    <p className="text-gray-300 text-sm">
                      {collection.description}
                    </p>
                    <div className="pt-4 flex justify-between items-center">
                      <span className="text-gold">{collection.price}</span>
                      <span className="text-sm text-gray-400">
                        {collection.items}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-6 py-3 bg-gold text-black text-sm tracking-wider hover:bg-gold/90 transition-colors w-full"
                    >
                      EXPLORE COLLECTION
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Always Visible Title */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <div className="h-px flex-grow bg-gold/30" />
                <span className="px-4 py-2 text-xs tracking-widest border border-gold/30 text-gold">
                  {`COLLECTION ${String(index + 1).padStart(2, "0")}`}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
