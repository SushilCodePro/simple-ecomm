
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/products/cartSlice";

function ProductCard() {
    const{items:products, status}= useSelector((state)=>state.products);
    console.log('API data in card',products);
    const dispatch=useDispatch();

    if (status === 'loading') {
        return <p>Loading...</p>;
      }
    
      if (status === 'failed') {
        return <p>Error in fetching products</p>;
      }
    return (
        <div className="grid grid-cols-4 gap-4 ">
            {products.map((product) => {
                return (
                    <div className="border border-black rounded p-1" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="w-44 h-40" />
                        </Link>
                        
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <button
                            className="bg-green-500 p-1 rounded text-white"
                            onClick={()=>dispatch(addToCart(product))}
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
