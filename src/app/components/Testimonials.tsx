import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Anika Sharma',
    title: 'Food Critic, The Indian Epicurean',
    quote: 'AURÉLION redefines luxury dining. Every course is a masterpiece, every moment unforgettable. The culinary team has created something truly transcendent that honors our Indian heritage.',
    rating: 5,
  },
  {
    name: 'Rohan Mehta',
    title: 'CEO, Global Ventures India',
    quote: 'The attention to detail is extraordinary. From the ambiance to the final dessert, this is dining elevated to art. An experience I will treasure forever.',
    rating: 5,
  },
  {
    name: 'Kavya Patel',
    title: 'Travel Journalist',
    quote: "In all my travels across India and beyond, few restaurants have captured elegance and flavor so perfectly. AURÉLION isn't just a meal—it's a journey through India's culinary soul.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-sm tracking-[0.3em] uppercase text-primary/80 font-light mb-4">
            Guest Experiences
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl">
            What They <span className="italic text-primary">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-card/30 backdrop-blur-sm border border-border/30 p-8 lg:p-10"
              initial={{ opacity: 0, y: 60, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{
                y: -12,
                borderColor: 'rgba(212, 175, 55, 0.5)',
                boxShadow: '0 20px 60px rgba(212, 175, 55, 0.15)',
              }}
              style={{ perspective: 1000 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + i * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                className="text-foreground/80 leading-relaxed mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                className="pt-6 border-t border-border/30"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                <motion.div
                  className="font-serif text-lg text-foreground mb-1"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                >
                  {testimonial.name}
                </motion.div>
                <motion.div
                  className="text-sm text-foreground/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                >
                  {testimonial.title}
                </motion.div>
              </motion.div>

              {/* Quote Icon */}
              <svg
                className="absolute top-8 right-8 w-12 h-12 text-primary/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}