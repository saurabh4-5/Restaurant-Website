import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const chefs = [
  {
    name: 'Vikram',
    surname: 'Malhotra',
    title: 'Master of Cuisine',
    bio: [
      'With three Michelin stars and over two decades of culinary mastery, Chef Vikram Malhotra brings a revolutionary approach to Indian fine dining that honors ancient traditions while embracing contemporary innovation.',
      'Trained in the royal kitchens of Rajasthan and refined in the world\'s most prestigious culinary institutions, Chef Malhotra\'s philosophy centers on elevating regional Indian flavors with modern technique. Each plate tells a story—one of heritage, passion, and profound respect for India\'s rich culinary legacy.',
      '"Cooking is not just about feeding the body," he often reflects, "it\'s about celebrating culture, nourishing the soul, and creating memories that transcend time."'
    ],
    quote: 'Every ingredient has a story. My role is to let them speak.',
    image: 'https://images.unsplash.com/photo-1765735049473-7cb6466e5b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzc2MTc3NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    accolades: [
      { title: 'Awards', value: 'James Beard Winner 2024' },
      { title: 'Recognition', value: 'World\'s 50 Best Chefs' },
      { title: 'Experience', value: '20+ Years' }
    ]
  },
  {
    name: 'Priya',
    surname: 'Kapoor',
    title: 'Pastry Virtuoso',
    bio: [
      'Chef Priya Kapoor is a master of Indian fusion desserts, blending traditional mithai techniques with contemporary pastry artistry. Her innovative approach has earned her international acclaim and two Michelin stars.',
      'Trained at Le Cordon Bleu Paris and mentored by legendary Indian sweet makers in Kolkata, Chef Kapoor creates desserts that are both visually stunning and deeply rooted in Indian flavors—from saffron-infused crème brûlée to rose-cardamom macarons.',
      '"Desserts are the poetry of a meal," she believes, "they should leave you with a sweet memory that lingers long after the last bite."'
    ],
    quote: 'Tradition is my foundation, innovation is my expression.',
    image: 'https://images.unsplash.com/photo-1543876020-fa0e86833073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBjaGVmJTIwcHJvZmVzc2lvbmFsJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzYyNDU2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    accolades: [
      { title: 'Awards', value: 'Asia\'s Best Pastry Chef' },
      { title: 'Recognition', value: '2 Michelin Stars' },
      { title: 'Experience', value: '15+ Years' }
    ]
  },
  {
    name: 'Arjun',
    surname: 'Reddy',
    title: 'Spice Alchemist',
    bio: [
      'Chef Arjun Reddy is renowned for his mastery of spices and regional Indian cuisine. Having traveled across India studying local cooking techniques, he brings authentic flavors from Kerala to Kashmir to the modern fine dining table.',
      'A protégé of legendary chefs in Mumbai and Hyderabad, Chef Reddy\'s understanding of spice combinations is unparalleled. His signature dishes showcase the depth and complexity of Indian cuisine while maintaining perfect balance and refinement.',
      '"Indian cuisine is an orchestra of flavors," he explains, "and mastering it requires knowing when to let spices sing and when to let them whisper."'
    ],
    quote: 'Spices are not just flavor—they are the soul of every dish.',
    image: 'https://images.unsplash.com/photo-1744413922991-0c2ea966b1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwaW5kaWFuJTIwY3Vpc2luZXxlbnwxfHx8fDE3NzYyNDU2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    accolades: [
      { title: 'Awards', value: 'National Culinary Award' },
      { title: 'Recognition', value: 'Top 10 Indian Chefs' },
      { title: 'Experience', value: '18+ Years' }
    ]
  }
];

// Custom arrow components
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-all duration-300 group"
      aria-label="Previous chef"
    >
      <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-all duration-300 group"
      aria-label="Next chef"
    >
      <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default function ChefSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots: any) => (
      <div className="!bottom-8">
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-primary/30 hover:bg-primary/60 transition-all duration-300" />
    ),
  };

  return (
    <section id="chef" ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-sm tracking-[0.3em] uppercase text-primary/80 font-light mb-4">
            Culinary Masters
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl">
            Meet Our <span className="italic text-primary">Chefs</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Slider {...sliderSettings} className="chef-slider">
            {chefs.map((chef, index) => (
              <div key={index} className="outline-none">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-4">
                  {/* Content */}
                  <motion.div
                    className="order-2 lg:order-1"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-px bg-primary mb-6" />
                      <p className="text-sm tracking-[0.3em] uppercase text-primary/80 font-light">
                        {chef.title}
                      </p>
                    </div>

                    <h3 className="text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
                      Chef {chef.name}
                      <br />
                      <span className="italic text-primary">{chef.surname}</span>
                    </h3>

                    <div className="space-y-6 text-foreground/70 leading-relaxed mb-10">
                      {chef.bio.map((paragraph, i) => (
                        <motion.p
                          key={i}
                          className={i === 0 ? 'text-lg' : ''}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    {/* Accolades */}
                    <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                      {chef.accolades.map((accolade, i) => (
                        <div key={i}>
                          <div className="text-sm text-primary mb-1 tracking-wider uppercase">{accolade.title}</div>
                          <div className="text-foreground/80">{accolade.value}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Chef Image */}
                  <motion.div
                    className="order-1 lg:order-2 relative"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
                  >
                    <div className="relative h-[600px] lg:h-[800px]">
                      {/* Decorative Frame */}
                      <div className="absolute -top-6 -left-6 w-full h-full border border-primary/30 z-0" />

                      <div className="relative h-full overflow-hidden">
                        <motion.img
                          src={chef.image}
                          alt={`Chef ${chef.name} ${chef.surname}`}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      </div>

                      {/* Quote Accent */}
                      <motion.div
                        className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-sm border border-primary/20 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <svg className="w-8 h-8 text-primary mb-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                        <p className="text-foreground/90 italic leading-relaxed">
                          "{chef.quote}"
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Custom Slider Styles */}
      <style>{`
        .chef-slider .slick-dots li button:before {
          display: none;
        }
        .chef-slider .slick-dots li.slick-active div {
          background-color: rgb(212, 175, 55);
          transform: scale(1.3);
        }
        .chef-slider .slick-slide > div {
          padding: 0 10px;
        }
      `}</style>
    </section>
  );
}