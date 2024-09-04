
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <div className="bg-blue-950 h-10 grid grid-cols-2 text-white">
            <div className="col-span-1">
                <Link to={'/'}>Logo</Link>
            </div>
            <div className="col-span-1 flex space-x-20">
                <Link to={'/cart'}>Cart</Link>
                <Link to={''}>Detail</Link>
            </div>
        </div>
    );
}
export default NavBar;
