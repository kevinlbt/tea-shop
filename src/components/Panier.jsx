import React, { useEffect, useState } from "react";


export default function Panier ({panierDisplay, panier}) {

    const [isEmpty,setIsEmpty] = useState(!panier.length ? false : true)

    useEffect(() => {
        setIsEmpty(!panier.length ? false : true);
    },[setIsEmpty, panier])

    const total = panier.reduce((acc, tea) => acc + tea.amount * tea.price, 0) ;

    const panierfull = panier.map(({name,price,amount}, index) => (
        <li key={index}>- {name} {price}€ x {amount} </li> 
    ));

    
    return isEmpty ? ( <aside className={`panier w-40 h-auto ${panierDisplay ? "activeAside" : "hiddenAside"}`}>
                <h3 className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>Mon panier</h3>
                <ul className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>
                    {panierfull}
                </ul>
                <h4 className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>Total : {total} €</h4>
            </aside>
            ) : (
            <aside className={`panier w-40 h-auto ${panierDisplay ? "activeAside" : "hiddenAside"}`}>
                <h3 className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>votre panier est vide</h3>
            </aside>
            )
}