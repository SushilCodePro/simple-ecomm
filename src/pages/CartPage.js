import {useSelector } from 'react-redux';
import CartItem from '../components/CartItem'
// import { useState } from 'react';

function CartPage() {
    const{items:products}=useSelector((state)=>state.cart)
    // const dispatch= useDispatch();

    // const [favData, setFavData] = useState(startFavData);
    let priceSum=products.reduce((total, product)=>{
        return total=total+product.price;
    },0)

    return (
        <div className='border border-green-400 grid grid-cols-6 gap-4 p-2'>
            <div className='col-span-4 border border-red-400'>
                <h1 className='text-2xl font-bold mb-4'>My Shopping Bag</h1>
                <CartItem products={products}/>
            </div>
            <div className='col-span-2 border border-blue-400'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Summary</h1>
                <p className='text-xl font-bold'>Total Cost: <p className='text-green-400  inline'>${priceSum.toFixed(2)}</p></p>
            </div>

        </div>
    );
}

export default CartPage;