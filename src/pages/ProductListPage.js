
import ProductCard from "../components/ProductCard";


function ProductListPage({handleFav, products, error}){
    return(
        <div className="p-2">
            {error? (<p>error</p>) : (<ProductCard products={products} handleFav={handleFav}/>)}
        </div>
    );
}

export default ProductListPage;