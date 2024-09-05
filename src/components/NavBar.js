
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className="bg-blue-950 h-14 grid grid-cols-6 gap-2 text-white">
            <div className="col-span-4 flex items-center text-xl font-semibold">
                <Link to={'/'}>FastDelivery</Link>
            </div>
            <div className="col-span-1 flex items-center space-x-20">
            <Link to={'/'}>Home</Link>
                <Link to={'/cart'}>Cart</Link>
            </div>
        </div>
    );
}
export default NavBar;
