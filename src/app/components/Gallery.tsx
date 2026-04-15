import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1730280834765-79a37082d5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nJTIwbW9kZXJufGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Gourmet Indian plating',
  },
  {
    src: 'https://images.unsplash.com/flagged/photo-1561350600-6606486921f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBmaW5lJTIwZGluaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzYxODQzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Elegant Indian restaurant interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1730280836258-b0d19bfca720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nJTIwbW9kZXJufGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern Indian cuisine',
  },
  {
    src: 'https://images.unsplash.com/photo-1667254605821-cb0728cbc571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXN0YXVyYW50JTIwaW5kaWElMjBhbWJpYW5jZSUyMGVsZWdhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzYxODQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Restaurant ambiance',
  },
  {
    src: 'https://images.unsplash.com/photo-1701540747569-46bf364bbbb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nJTIwbW9kZXJufGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fine dining presentation',
  },
  {
    src: 'https://images.unsplash.com/photo-1661105031570-35e4da706f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbmRpYW4lMjBmb29kJTIwY3Vpc2luZSUyMGdvdXJtZXQlMjBwbGF0aW5nfGVufDF8fHx8MTc3NjE4NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Indian culinary artistry',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-background/50 to-background">
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
            Visual Journey
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl">
            Captured <span className="italic text-primary">Moments</span>
          </h2>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
            <Masonry gutter="1.5rem">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 60, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: [0.6, 0.05, 0.01, 0.9] }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  style={{ perspective: 1000 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                      whileHover={{ scale: 1.15, rotate: 1 }}
                      transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
                    />
                    {/* Hover Overlay with Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0"
                      whileHover={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.3) 100%)'
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Border Glow with Animation */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/0"
                      whileHover={{ borderColor: 'rgba(212, 175, 55, 0.6)' }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={false}
                      whileHover={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                        x: ['-100%', '200%'],
                      }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </div>
    </section>
  );
}
