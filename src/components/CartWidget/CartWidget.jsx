import { FaMoneyCheckAlt } from "react-icons/fa";
import "./CartWidget.css";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <FaMoneyCheckAlt
          size={30}
          style={{
            fontSize: "2rem",
            color: "beige",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
