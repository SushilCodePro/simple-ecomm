
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../feature/products/cartSlice";
function CartItem({ products}) {
const dispatch=useDispatch();
    return (
        <div className="grid grid-cols-4 gap-4 p-2 ">
            {products.map((product) => {
                return (
                    <div className="border border-black rounded" key={product.id}>
                        <img src={product.image} alt={product.title} className="w-44 h-40" />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <button
                            className="bg-red-500 p-1 rounded text-white"
                            onClick={()=>dispatch(removeFromCart(product.id))}
                        >
                            Remove
                        </button> 
                    </div>
                );
            })}
        </div>
    );
}

export default CartItem;
