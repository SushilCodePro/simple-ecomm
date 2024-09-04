
import React from "react";

function CartItem({ products, handleRemove}) {

    return (
        <div className="grid grid-cols-4 gap-4 p-2 ">
            {products.map((product) => {
                return (
                    <div className="border border-black rounded" key={product.id}>
                        <img src={product.image} alt={product.title} className="w-40 h-40" />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <button
                            className="bg-red-500 p-1 rounded text-white"
                            onClick={()=>handleRemove(product.id)}
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
