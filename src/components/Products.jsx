import React, { useState } from "react";
import TeaItem from "./TeaItem";
import { teaData } from "../data/teaData"

function Select ({setProducts}) {

    const categories = teaData.reduce((acc,tea) => acc.includes(tea.category) ? acc : acc.concat(tea.category), [])

    function handleCategoryChange (e) {

        if (e.target.value === "tous") {
            setProducts(teaData);
        }
        else {
            const productsFilteredCategory = teaData.filter((cat) => cat.category === e.target.value);
            setProducts(productsFilteredCategory);
        }
        
    }
    return  <select onChange={handleCategoryChange} name="category" className="w-full mx-auto mb-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option defaultValue="all">tous</option>
                {categories.map((cat) => (
                    <option value={cat} key={cat}>{cat}</option> 
                ))}
            </select>
}


export default function Products ({setPanier, panier, products, setProducts}) {

    const [displayModal, setDisplayModal] = useState(false);
    const [modale, setModale] = useState(null);


    return <section className="products w-full flex flex-col">
                <h1 className="text-5xl text-left m-12">Nos Thés</h1>
                <Select setProducts={setProducts} />
                <div className="grid grid-cols-3 gap-8 justify-items-center content-center my-12 pl-8">
                    <TeaItem 
                        products={products}
                        setModale={setModale} 
                        setDisplayModal={setDisplayModal} 
                        displayModal={displayModal} 
                        modale={modale} 
                        panier={panier} 
                        setPanier={setPanier} />
                </div> 
            </section>
}