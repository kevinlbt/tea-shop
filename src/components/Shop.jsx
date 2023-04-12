import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products"
import Panier from "./Panier";
import Footer from "./Footer";


export default function Shop () {

    const [panierDisplay, setPanierDisplay] = useState(false);
    const [panier, setPanier] = useState([]);

    return <React.Fragment>
        <Navbar setPanierDisplay={setPanierDisplay} />
        <section className="flex">
            <Panier panierDisplay={panierDisplay} panier={panier} setPanier={setPanier}/>
            <Products setPanier={setPanier} panier={panier}/>
        </section>
        <Footer />
    </React.Fragment>
}
