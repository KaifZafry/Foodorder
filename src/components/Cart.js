import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart= ()=>{

    const dispatch = useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart());
    };
    const handleRemoveItem=()=>{
        dispatch(removeItem());
    };
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems)
    return(
        <div className="cart-container" >
            <div className="cart-head">
            <h1>Cart</h1>
            <button onClick={handleClearCart}>ClearCart</button>
            </div>
            {cartItems.length === 0 && <h3>please go the menu page and add some your fav food</h3>}
            <div className="cartItems">
                <button onClick={handleRemoveItem}>Remove Item</button>
            <ItemList  item={cartItems}/>
            </div>
        
        </div>
    )
}

export default Cart;