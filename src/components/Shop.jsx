import React, { useState, useEffect } from "react";
import { teaData } from "../data/teaData"
import Navbar from "./Navbar";
import Products from "./Products"
import Panier from "./Panier";
import Footer from "./Footer";

export default function Shop () {

    const [panierDisplay, setPanierDisplay] = useState(null);
    const [panier, setPanier] = useState(localStorage.getItem('panierItems') ? JSON.parse(localStorage.getItem('panierItems')) : [] );
    const [products, setProducts] = useState(teaData)

    useEffect(() => {
        localStorage.setItem('panierItems', JSON.stringify(panier));
    }, [panier]); 

    return <React.Fragment>
        <Navbar setPanierDisplay={setPanierDisplay} panier={panier} panierDisplay={panierDisplay} />
        <section className="fondtea flex">
            <Panier 
                panierDisplay={panierDisplay}
                panier={panier} 
                setPanier={setPanier}
             />
            <Products 
                setPanier={setPanier} 
                panier={panier}
                products={products}
                setProducts={setProducts}
            />
        </section>
        <Footer />
    </React.Fragment>
}
