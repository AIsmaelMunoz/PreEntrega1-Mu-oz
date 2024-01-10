import { RiShoppingCartFill } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)


    return(
        <Link to="/carrito" id="cartwidget" className="cartwidget">
            <RiShoppingCartFill size={30} />
           <p> {totalCantidad()} </p>
        </Link>
    )
}

export default CartWidget