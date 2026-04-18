import { useNavigate } from "react-router-dom";

const ViewMenuButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/menu")}
      className="border border-gold text-gold px-6 py-3 rounded-xl font-elegant text-lg hover:bg-gold hover:text-black transition shadow-lg"
    >
      VIEW FULL MENU
    </button>
  );
};

export default ViewMenuButton;
