import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The most exquisite brownies I've ever tasted. Perfect for special occasions!",
      author: "Sarah Mitchell",
      role: "Food Critic",
      rating: 5,
    },
    {
      text: "These brownies are simply divine. The Imperial Collection was a perfect corporate gift.",
      author: "James Wilson",
      role: "Marketing Director",
      rating: 5,
    },
    {
      text: "Exceptional quality and presentation. Every bite is pure luxury.",
      author: "Emily Parker",
      role: "Event Planner",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">`{testimonial.text}`</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
