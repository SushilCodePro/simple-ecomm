
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ products, handleFav}) {

    return (
        <div className="grid grid-cols-4 gap-4 ">
            {products.map((product) => {
                return (
                    <div className="border border-black w-60 rounded p-1" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="w-44 h-40" />
                        </Link>
                        
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <button
                            className="bg-green-500 p-1 rounded text-white"
                            onClick={()=>handleFav(product.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductCard;
