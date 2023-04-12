import React from "react";
import {teaData} from "../data/teaData"


export default function Products ({setPanier, panier}) {

    const categories = teaData.reduce((acc,tea) => acc.includes(tea.category) ? acc : acc.concat(tea.category), [])

    function handleClick (name,price) {
        const currentTeaAdded = panier.find((tea) => tea.name === name);
        if (currentTeaAdded) {
            const panierFilteredCurentTea = panier.filter((tea) => tea.name !== name)
            setPanier([
                ...panierFilteredCurentTea, 
                {name, price, amount: currentTeaAdded.amount + 1}
            ])
        }
        else {
            setPanier([
                ...panier, {name,price, amount: 1}
            ])
        }
    }

    return <section className="products w-full">
                <h1 className="text-4xl text-left m-12">produits</h1>
                <ul className="flex items-center">
                    {categories.map((cat) => (
                        <li key={cat} className="m-3 text-xl">{cat}</li>
                    ))}
                </ul>
                <div className="grid grid-cols-3 gap-8 justify-items-center content-center my-12 pl-8">
                    {teaData.map(({name, cover, price, category}, index) => (
                        <div key={`${name}-${index}`} className="relative grid-item flex flex-col py-3 px-7 mb-5 rounded-xl">
                            <img className="w-64 h-64 rounded-xl object-contain" src={cover} alt="" />
                            <h2 className="text-xl m-2">{name}</h2>
                            <p className="text-xl m-1">{category}</p>
                            <p className="price text-xl m-1">{price} €</p>
                            <button onClick={() => handleClick(name,price)} className="w-2/4 px-2 py-1 m-2 text-xl rounded-md bg-amber-700 hover:bg-amber-600">ajouter</button>
                        </div>
                    ))}
                </div>
            </section>
}