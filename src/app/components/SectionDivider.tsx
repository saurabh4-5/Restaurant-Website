import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center justify-center py-16">
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: 120 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </motion.div>

        <motion.div
          className="h-px bg-gradient-to-r from-primary via-primary to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: 120 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
