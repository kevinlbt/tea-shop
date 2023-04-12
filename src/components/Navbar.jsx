import React from "react";


export default function Navbar ({setPanierDisplay, panier}) {

    const total = panier.reduce((acc, tea) => acc + tea.amount * tea.price, 0) ;

    function handleClick () {
        setPanierDisplay(v => !v)
    }

    return <nav className="nav w-full flex justify-between">
        <img className="w-40 m-4" src="./assets/logo.png" alt="" />
        <div className="flex flex-col justify-center items-center">
            <button onClick={handleClick} className="px-7 mr-16 text-2xl rounded-md p-2 bg-amber-600 hover:bg-amber-500 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">Panier</button>
            <p className="mr-16 pt-2">total : {total}€ </p>
        </div>
    </nav>
}