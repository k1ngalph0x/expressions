import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Exotic Brownies",
      price: "INR 350",
      image: "/images/exoticbrownies.jpg",
      rating: 4.8,
      reviews: 124,
      description: "Rich dark chocolate with exotic spices",
      badge: "BESTSELLER",
    },
    {
      name: "Chocolate Walnut Fudge",
      price: "INR 500",
      image: "/images/walnutfudge.jpg",
      rating: 4.9,
      reviews: 89,
      description: "Premium walnuts in Belgian chocolate",
      badge: "NEW",
    },
    {
      name: "Hazelnut Tarts",
      price: "INR 900",
      image: "/images/hazlenuttart.jpg",
      rating: 4.7,
      reviews: 156,
      description: "Handcrafted with Italian hazelnuts",
      badge: "PREMIUM",
    },
    {
      name: "Dry Fruit Canapes",
      price: "INR 600",
      image: "/images/canapes.jpg",
      rating: 4.6,
      reviews: 92,
      description: "Assorted dry fruits in chocolate",
      badge: "POPULAR",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Most Loved
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Bestsellers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-black text-xs tracking-wider">
                  {product.badge}
                </div>
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white rounded-full shadow-lg"
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
