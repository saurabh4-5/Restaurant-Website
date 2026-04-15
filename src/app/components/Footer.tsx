import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/30 pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-6 tracking-wider">
              AURÉLION
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-6">
              An elevated dining experience where artistry meets gastronomy in perfect harmony.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground/80 mb-6">Hours</h4>
            <div className="space-y-3 text-foreground/60">
              <div className="flex justify-between">
                <span>Tuesday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
              <div className="text-primary/80 mt-4">
                Closed Mondays
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground/80 mb-6">Contact</h4>
            <div className="space-y-3 text-foreground/60">
              <p>
                <span className="block text-foreground/80 mb-1">Address</span>
                42 MG Road, Connaught Place
                <br />
                New Delhi, 110001
              </p>
              <p>
                <span className="block text-foreground/80 mb-1">Phone</span>
                +91 11 4567 8900
              </p>
              <p>
                <span className="block text-foreground/80 mb-1">Email</span>
                reserve@aurelion.com
              </p>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground/80 mb-6">Follow</h4>
            <div className="space-y-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="block text-foreground/60 hover:text-primary transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <span className="border-b border-transparent group-hover:border-primary transition-all">
                    {social}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © 2026 AURÉLION. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}