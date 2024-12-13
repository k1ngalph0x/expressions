import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ArrowRight } from "lucide-react";

const InstagramFeed = () => {
  const posts = [
    {
      image: "/src/assets/images/insta1.jpg",
      likes: 234,
      comments: 12,
      caption: "Indulge in our signature Belgian chocolate brownies",
      category: "Featured",
    },
    {
      image: "/src/assets/images/insta2.png",
      likes: 456,
      comments: 23,
      caption: "Perfect corporate gifting solutions",
      category: "Gifting",
    },
    {
      image: "/src/assets/images/insta3.jpg",
      likes: 789,
      comments: 45,
      caption: "Behind the scenes: Crafting perfection",
      category: "Process",
    },
    {
      image: "/src/assets/images/insta4.jpg",
      likes: 321,
      comments: 16,
      caption: "Luxury meets artisanal excellence",
      category: "Featured",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 inline-block">
            Social Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 mb-8">
            Discover the artistry behind our creations and join our community of
            chocolate enthusiasts
          </p>
          <div className="flex items-center justify-center gap-2 text-gold">
            <Instagram className="w-6 h-6" />
            <span className="text-xl font-light">@expressions</span>
          </div>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-black/80 text-white px-3 py-1 text-xs tracking-wider rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm mb-3 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            //href="https://instagram.com/expressions"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
          >
            <span className="text-sm tracking-wider">
              VIEW MORE ON INSTAGRAM
            </span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
