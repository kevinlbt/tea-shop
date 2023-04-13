import React from "react";


export default function Navbar ({setPanierDisplay, panier}) {

    const total = panier.reduce((acc, tea) => acc + tea.amount * tea.price, 0) ;

    function handleClick () {
        setPanierDisplay(v => !v)
    }


    return  <nav className="nav w-full flex justify-between items-center">
                <img className="w-64 h-64 m-4" src="./assets/logo.png" alt="" />
                <div className="flex flex-col justify-center items-center bg-yellow-50 mr-16 p-5 rounded-2xl">
                    <button onClick={handleClick} className="px-7 text-2xl rounded-md p-2 bg-amber-600 hover:bg-amber-500 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">Panier</button>
                    <p className="mr-16 pt-2">total : {total}€ </p>
                </div>
            </nav>
        
}