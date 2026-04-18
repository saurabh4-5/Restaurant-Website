import { menuData } from "../data/menuData";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";

const categories = [
  { key: "starters", label: "Starters" },
  { key: "main", label: "Main Course" },
  { key: "drinks", label: "Drinks" },
  { key: "snacks", label: "Snacks" },
];

const Menu = () => (
  <div className="min-h-screen bg-dark py-12 px-4">
    <h1 className="text-gold text-4xl font-elegant text-center mb-10">Our Menu</h1>
    {categories.map((cat) => (
      <section key={cat.key} className="mb-12">
        <h2 className="text-2xl text-gold font-elegant mb-6">{cat.label}</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {menuData[cat.key].map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>
      </section>
    ))}
  </div>
);

export default Menu;
