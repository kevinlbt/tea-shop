import React, { useState } from "react";
import { teaData } from "../data/teaData"

export default function Products ({setPanier, panier, products, setProducts}) {

    const [displayModal, setDisplayModal] = useState(false);
    const [modale, setModale] = useState(null);

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

    function handleCategoryChange (e) {

        if (e.target.value === "tous") {
            setProducts(teaData);
        }
        else {
            const productsFilteredCategory = teaData.filter((cat) => cat.category === e.target.value);
            setProducts(productsFilteredCategory);
        }
        
    }

    function handleDisplayModale (index) {
        setDisplayModal(true);
        setModale(index);
    }

    function handleRemoveModale () {
        setDisplayModal(false);
        setModale(null);
    }

    return <section className="products w-full flex flex-col">
                <h1 className="text-5xl text-left m-12">Nos Thés</h1>
                <select onChange={handleCategoryChange} name="category" className="w-full mx-auto mb-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option defaultValue="all">tous</option>
                    {categories.map((cat) => (
                        <option value={cat} key={cat}>{cat}</option> 
                    ))}
                </select>
                <div className="grid grid-cols-3 gap-8 justify-items-center content-center my-12 pl-8">
                    {products.map(({name, cover, price, category}, index) => (
                        <div key={`${name}-${index}`} className="relative grid-item flex flex-col py-5 px-9 mb-5 rounded-3xl">
                            <img className="w-96 h-96 rounded-xl object-contain" src={cover} alt="" />
                            <h2 className="text-2xl m-2">{name}</h2>
                            <p className="text-xl m-1">{category}</p>
                            <p className="price text-xl m-1">{price} €</p>
                            <div className="flex">
                                <button onClick={() => handleClick(name,price)} className="w-2/4 px-2 py-1 m-2 text-xl rounded-md bg-amber-600 hover:bg-amber-500">ajouter</button>
                                <button onClick={() => handleDisplayModale(index)} className="w-2/4 px-2 py-1 m-2 text-xl rounded-md border-2 border-slate-700 bg-transparent hover:border-slate-300">details</button>
                            </div>
                            {displayModal && modale === index ? (
                                <div onBlur={handleRemoveModale} className="modale relative">
                                    <i onClick={handleRemoveModale} class="cross-modale fa-solid fa-square-xmark cursor-pointer"></i>
                                    <article>
                                        <h2 className="text-2xl m-2">{name}</h2>
                                        <p className="text-2xl m-1">{category}</p>
                                        <p className="text-3xl m-2">{price} €</p>
                                        <p className="description m-1 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac blandit risus, ac vulputate justo. Sed at nulla augue. Ut tristique tortor ut nisi ultrices venenatis. Ut in fringilla dui, vitae ornare urna. Morbi et neque lectus. Nam posuere, nisi finibus rhoncus tincidunt, purus ligula rutrum augue, sed tristique nisl nisi eget turpis. Nullam neque ex, aliquet sed efficitur a, suscipit id ex. In viverra convallis lectus, eu porta tortor sodales ac</p>
                                    </article>
                                    <img className="img-modale rounded-xl object-contain" src={cover} alt="" />
                                </div>) : (null)
                            }
                        </div>
                    ))}
                </div>
            </section>
}