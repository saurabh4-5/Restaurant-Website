import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const menuItems = [
  {
    name: 'Tandoori Lamb Chops',
    description: 'Succulent lamb chops marinated in aromatic spices, charcoal-grilled to perfection with saffron reduction',
    price: '₹3,850',
    image: 'https://images.unsplash.com/photo-1643995531157-93c50012e7f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3Vpc2luZSUyMGdvdXJtZXQlMjBwbGF0aW5nfGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Kashmiri Prawns',
    description: 'Tiger prawns with Kashmiri spices, coconut emulsion, and edible gold leaf',
    price: '₹4,200',
    image: 'https://images.unsplash.com/photo-1678358082845-db9ccd4efaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBmb29kJTIwY3Vpc2luZSUyMGdvdXJtZXQlMjBwbGF0aW5nfGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Dal Maharani',
    description: 'Heritage black lentils slow-cooked for 24 hours with butter, cream and rare spices',
    price: '₹1,850',
    image: 'https://images.unsplash.com/photo-1587040691592-082b08625712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBmb29kJTIwY3Vpc2luZSUyMGdvdXJtZXQlMjBwbGF0aW5nfGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Biryani Royale',
    description: 'Fragrant basmati rice layered with premium meats, saffron threads, and aromatic spices',
    price: '₹2,950',
    image: 'https://images.unsplash.com/photo-1580876205972-0dc89bc0e336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBmb29kJTIwY3Vpc2luZSUyMGdvdXJtZXQlMjBwbGF0aW5nfGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function SignatureMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="menu" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-background to-background/50">
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
            Curated Selections
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl">
            Signature <span className="italic text-primary">Creations</span>
          </h2>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-card border border-border/50 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{ y: -12, rotateY: 2, rotateX: -2 }}
              style={{ perspective: 1000 }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <motion.h3
                    className="text-2xl"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.span
                    className="text-xl text-primary font-serif"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4, type: 'spring', stiffness: 200 }}
                  >
                    {item.price}
                  </motion.span>
                </div>
                <motion.p
                  className="text-foreground/60 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                >
                  {item.description}
                </motion.p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="group relative px-10 py-4 border border-primary text-primary tracking-widest text-sm uppercase overflow-hidden">
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              View Full Menu
            </span>
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
