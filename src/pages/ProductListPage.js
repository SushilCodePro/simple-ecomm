
// import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";


function ProductListPage(){
//    const{items:products}= useSelector((state)=>state.products);
    return(
        <div className="p-2">
            <ProductCard/>
        </div>
    );
}

export default ProductListPage;