import React, { useState } from "react";
import { teaData } from "../data/teaData"
import Navbar from "./Navbar";
import Products from "./Products"
import Panier from "./Panier";
import Footer from "./Footer";

export default function Shop () {

    const [panierDisplay, setPanierDisplay] = useState(false);
    const [panier, setPanier] = useState([]);
    const [products, setProducts] = useState(teaData)

    return <React.Fragment>
        <Navbar setPanierDisplay={setPanierDisplay} panier={panier} />
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
