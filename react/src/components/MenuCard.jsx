import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 24px #FFD700" }}
      className="bg-black/50 border border-gold p-4 rounded-2xl shadow-xl backdrop-blur-md transition"
    >
      <img src={item.image} className="rounded-lg mb-3 w-full h-40 object-cover" />
      <h3 className="text-white text-xl font-elegant">{item.name}</h3>
      <p className="text-gray-400">{item.desc}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gold font-bold text-lg">₹{item.price}</span>
        <button
          onClick={() => addToCart(item)}
          className="bg-gold text-black px-3 py-1 rounded hover:bg-yellow-400 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default MenuCard;
