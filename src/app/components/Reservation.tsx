import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export default function Reservation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request. We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reserve" ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-sm tracking-[0.3em] uppercase text-primary/80 font-light mb-4">
            Book Your Experience
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
            Reserve Your <span className="italic text-primary">Table</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Embark on an unforgettable culinary journey. Limited seating ensures an intimate and exclusive experience.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glassmorphism Container */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                  Full Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                />
              </motion.div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="phone" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                    Phone *
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all"
                    placeholder="+91 98765 43210"
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                  />
                </motion.div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="date" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                    Date *
                  </label>
                  <motion.input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all"
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="time" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                    Time *
                  </label>
                  <motion.input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all"
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="guests" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                    Guests *
                  </label>
                  <motion.select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all"
                    whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>
              </div>

              {/* Special Requests */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm tracking-wider uppercase text-foreground/80 mb-2">
                  Special Requests
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-input-background border border-border px-6 py-4 text-foreground focus:border-primary focus:outline-none transition-all resize-none"
                  placeholder="Dietary restrictions, celebrations, preferred seating..."
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="group relative w-full px-10 py-5 bg-primary text-background tracking-widest text-sm uppercase overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 50px rgba(212, 175, 55, 0.6)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="relative z-10 group-hover:text-primary transition-colors duration-300"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Confirm Reservation
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-foreground/0"
                  whileHover={{ borderColor: 'rgba(245, 245, 240, 0.3)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <p className="text-sm text-center text-foreground/50 mt-6">
                Reservations are held for 15 minutes. For parties of 8+, please contact us directly.
              </p>
            </form>
          </div>

          {/* Decorative Border */}
          <div className="absolute -inset-4 border border-primary/20 pointer-events-none -z-10" />
        </motion.div>
      </div>
    </section>
  );
}