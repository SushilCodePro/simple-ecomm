import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
// import { fetchProducts } from "./API/ProductAPI";
// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./feature/products/productSlice";
import { useEffect } from "react";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //   const [products, setProducts] = useState([]);  
  //   const [error, setError] = useState(null);
  //   const [favData, setFavData]=useState(()=>{
  //     const savedData=localStorage.getItem('cartData');
  //     return savedData? JSON.parse(savedData): [] ;
  //   });      

  //   useEffect(() => {
  //       async function getProducts() {
  //           try {
  //               const data = await fetchProducts();
  //               console.log('API Data', data);
  //               setProducts(data); 
  //           } catch (err) {
  //               setError('Failed to fetch products',err); 
  //           }
  //       }
  //       getProducts();
  //   }, []);


  //   const handleRemove = (id) => {
  //     const updatedFavData = favData.filter(product => product.id !== id);
  //     setFavData(updatedFavData);
  // };


  //   const handleFav=(id)=>{
  //     console.log('AddId',id);
  //     const addData=products.find(product=> product.id === id);
  //     console.log('addData',addData);
  //     const exits=favData.some(product=> product.id===id);

  //     if(!exits && addData){
  //       setFavData([...favData,addData]);
  //     }
  //     console.log('favData',favData);
  //   }

  //   useEffect(()=>{
  //     localStorage.setItem('cartData',JSON.stringify(favData))
  //   },[favData])

  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<ProductListPage handleFav={handleFav} products={products} error={error}/>}/>
          <Route path="/cart" element={<CartPage favData={favData} handleRemove={handleRemove}/>}/>
          <Route path="/product/:id" element={<PrductDetailsPage handleFav={handleFav} products={products}/>}/> */}
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<PrductDetailsPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
