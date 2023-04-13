import React, { useEffect, useState } from "react";


function PanierItem ({panier, setPanier}) {

    function handleRemove (name) {
        const currentTeaRemove = panier.find((tea) => tea.name === name)
        if (currentTeaRemove.amount === 1) {
            const panierFilteredRemoveTea = panier.filter((tea) => tea.name !== name);
            setPanier(panierFilteredRemoveTea);
        }
        else {

            let newPanier = panier;

            newPanier.forEach((element) => {
                if (element === currentTeaRemove) {
                    element.amount = currentTeaRemove.amount - 1;
                }
            })

            setPanier(JSON.parse(JSON.stringify(newPanier))); 
        }
    }

    return <React.Fragment>
                {panier.map(({name,price,amount}, index) => (
                    <li className="flex justify-between items-center border m-3 p-3 border-slate-700" key={index}>
                        <p> {name} {price}€ x {amount} </p>
                        <i onClick={() => handleRemove(name,price)} className="text-red-700 text-lg fa-solid fa-xmark px-3 cursor-pointer"></i>
                    </li> 
                ))}
            </React.Fragment>
}



export default function Panier ({panierDisplay, panier, setPanier}) {

    const [isEmpty,setIsEmpty] = useState(!panier.length ? false : true)

    useEffect(() => {
        setIsEmpty(!panier.length ? false : true);
    },[setIsEmpty, panier])

    const total = panier.reduce((acc, tea) => acc + tea.amount * tea.price, 0) ;

    return isEmpty ? ( <aside className={`panier flex flex-col w-40 h-auto ${panierDisplay ? "activeAside" : "hiddenAside"}`}>
                <h3 className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>Mon panier</h3>
                <ul className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>
                    <PanierItem setPanier={setPanier} panier={panier} />
                </ul>
                <h4 className={`text-3xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>Total : {total} €</h4>
                <button onClick={() => setPanier([])} className={`px-3 w-2/4 mx-auto text-xl rounded-md p-2 bg-amber-600 hover:bg-amber-500 hover:text-white ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>Vider le panier</button>
            </aside>
            ) : (
            <aside className={`panier w-40 h-auto ${panierDisplay ? "activeAside" : "hiddenAside"}`}>
                <h3 className={`text-2xl m-7 ${panierDisplay ? "activeTitle" : "hiddenTitle"}`}>votre panier est vide</h3>
            </aside>
            )
}