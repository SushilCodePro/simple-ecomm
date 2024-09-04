import CartItem from '../components/CartItem'
// import { useState } from 'react';

function CartPage({ favData,handleRemove }) {

    // const [favData, setFavData] = useState(startFavData);
    let priceSum=favData.reduce((total, product)=>{
        return total=total+product.price;
    },0)

    return (
        <div className='border border-green-400 grid grid-cols-6 gap-4 p-2'>
            <div className='col-span-4 border border-red-400'>
                <h1 className='text-2xl font-bold mb-4'>My Shopping Bag</h1>
                <CartItem products={favData} handleRemove={handleRemove} />
            </div>
            <div className='col-span-2 border border-blue-400'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Summary</h1>
                <p>Total Cost: ${priceSum.toFixed(2)}</p>
            </div>

        </div>
    );
}

export default CartPage;