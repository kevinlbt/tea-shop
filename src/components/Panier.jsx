import React, { useEffect, useState } from "react";


function PanierItem ({panier, setPanier}) {

    function handleAdd (name) {
        const currentTeaRemove = panier.find((tea) => tea.name === name)
        let newPanier = panier;

        newPanier.forEach((element) => {
            if (element === currentTeaRemove) {
                element.amount = currentTeaRemove.amount + 1;
            }
        })

        setPanier(JSON.parse(JSON.stringify(newPanier))); 
        
    }

    function handleRemoveOne (name) {
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

    function handleRemove (name) {
        
        const panierFilteredRemoveTea = panier.filter((tea) => tea.name !== name);
        setPanier(panierFilteredRemoveTea);
        
    }

    return <React.Fragment>
                {panier.map(({name,price,amount}, index) => (
                    <li className="flex flex-col lg:flex-row justify-between items-center rounded-xl border my-5 p-1 lg:m-3 lg:p-3 border-slate-700" key={index}>
                        <p> {name} {price}€ x {amount} </p>
                        <div>
                            <i onClick={() => handleAdd(name)} className="text-red-700 text-sm fa-solid fa-plus px-2 cursor-pointer"></i>
                            <i onClick={() => handleRemoveOne(name)} className="text-red-700 text-sm fa-solid fa-minus px-2 cursor-pointer"></i>
                            <i onClick={() => handleRemove(name)} class="text-red-700 text-sm fa-solid fa-trash px-2 cursor-pointer"></i>
                        </div>
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

    return isEmpty ?( <aside id="aside" className={`panier flex flex-col ${panierDisplay === "yes" ? "activeAside" : null} ${panierDisplay === "no" ? "hiddenAside" : null}`}>
                            <h3 className={`text-4xl m-7 ${panierDisplay === null || panierDisplay === "no" ? "hiddenTitle" : "activeTitle"}`}>Mon panier</h3>
                            <ul className={`text-2xl m-7 ${panierDisplay === null || panierDisplay === "no" ? "hiddenTitle" : "activeTitle"}`}>
                                <PanierItem setPanier={setPanier} panier={panier} />
                            </ul>
                            <h4 className={`text-3xl m-7 ${panierDisplay === null || panierDisplay === "no" ? "hiddenTitle" : "activeTitle"}`}>Total : {total} €</h4>
                            <button onClick={() => setPanier([])} className={`px-3 lg:w-2/4 mx-auto text-lg lg:text-xl rounded-md p-2 bg-amber-600 hover:bg-amber-500 hover:text-white ${panierDisplay === null || panierDisplay === "no" ? "hiddenTitle" : "activeTitle"}`}>Vider le panier</button>
                        </aside>
                        ) : (
                        <aside className={`panier w-40 h-auto ${panierDisplay === "yes" ? "activeAside" : null} ${panierDisplay === "no" ? "hiddenAside" : null}`}>
                            <h3 className={`text-2xl m-7 ${panierDisplay === null || panierDisplay === "no" ? "hiddenTitle" : "activeTitle"}`}>votre panier est vide</h3>
                        </aside>
                    )
}