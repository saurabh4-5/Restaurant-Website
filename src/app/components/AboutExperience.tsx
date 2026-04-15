import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[500px] lg:h-[700px] overflow-hidden"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="absolute inset-0 border border-primary/20" />
            <motion.img
              src="https://images.unsplash.com/photo-1753202048970-16fe8f5e55fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBmaW5lJTIwZGluaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzYxODQzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Elegant Indian Dining Experience"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDuration: '8s', animationIterationCount: 'infinite' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="mb-6">
              <div className="w-16 h-px bg-primary mb-6" />
              <p className="text-sm tracking-[0.3em] uppercase text-primary/80 font-light">
                The Aurélion Story
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
              Where Artistry Meets
              <br />
              <span className="italic text-primary">Gastronomy</span>
            </h2>

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                In the heart of culinary excellence, AURÉLION stands as a beacon of refined Indian gastronomy and unparalleled sophistication. Our philosophy transcends mere dining—we craft moments of pure sensory poetry.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Every dish is a carefully choreographed performance, where ancient spice blends meet modern culinary techniques. Our commitment to perfection honors the rich heritage of Indian cuisine while embracing contemporary innovation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                From the warm glow of traditional lighting to the meticulous plating of each course, we orchestrate an experience that lingers long after the final bite.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                <div className="text-4xl text-primary mb-2 font-serif">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">Years Excellence</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                <div className="text-4xl text-primary mb-2 font-serif">
                  <AnimatedCounter value={3} />
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">Michelin Stars</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                <div className="text-4xl text-primary mb-2 font-serif">
                  <AnimatedCounter value={50} suffix="K+" />
                </div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider">Guests Served</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
