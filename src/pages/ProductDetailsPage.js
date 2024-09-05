import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/products/cartSlice";

function PrductDetailsPage(){

const{items:products}= useSelector((state)=>state.products);
const dispatch=useDispatch();
const {id}=useParams();

const product=products.find(product=> product.id === parseInt(id));
if (!product) {
    return <div>Product not found.</div>;
}
    return(
        <div className="p-4">
            <img src={product.image} alt={product.title} className="w-60 h-60" />
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl">${product.price}</p>
            <p>{product.description}</p>
            <button
                className="bg-green-500 p-2 mt-4 rounded text-white"
                onClick={() => dispatch(addToCart(product))}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default PrductDetailsPage;