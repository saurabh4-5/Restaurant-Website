import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToReserve = () => {
    const element = document.getElementById('reserve');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <motion.img
          src="https://images.unsplash.com/flagged/photo-1561350512-3d40d412d73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBmaW5lJTIwZGluaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzYxODQzNTF8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Luxury Indian Restaurant Interior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="max-w-4xl"
        >
          <motion.div
            className="mb-6 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-20 h-px bg-primary mx-auto mb-6" />
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-light">
              Fine Dining Excellence
            </p>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-tight overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              A Culinary Experience
            </motion.span>
            <br />
            <motion.span
              className="text-primary italic inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Beyond Taste
            </motion.span>
          </h1>

          <motion.p
            className="text-lg lg:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            Indulge in an orchestrated symphony of Indian flavors, where centuries-old culinary traditions meet contemporary innovation in an atmosphere of timeless elegance.
          </motion.p>

          <motion.button
            onClick={scrollToReserve}
            className="group relative px-12 py-4 bg-primary text-background tracking-widest text-sm uppercase overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="relative z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Reserve Your Table
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
