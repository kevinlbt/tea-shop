import React from "react";


export default function Navbar ({setPanierDisplay}) {

    function handleClick () {
        setPanierDisplay(v => !v)
    }

    return <nav className="nav w-full flex justify-between">
        <img className="w-40 m-4" src="./assets/logo.png" alt="" />
        <div className="flex justify-center items-center">
            <button onClick={handleClick} className="px-7 m-16 text-2xl rounded-md p-2 bg-amber-700 hover:bg-gray-700 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">Panier</button>
        </div>
    </nav>
}