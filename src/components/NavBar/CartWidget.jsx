import { BsCart } from "react-icons/bs";
import "./CartWidget.css"


const CartWidget = () => {
    return (
        <div>
            
            <BsCart size={35} />
            <p className="text-center mt-1 carrito">3</p>
        </div>
    )
}

export default CartWidget