import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Accueil from "./Accueil";
import ListProducts from "./ListProducts";
import Connexion from "../Components/Connexion/Connexion";
import Product from "./Product";
import CartProducts from "./CartProducts";
import Payment from "./Payment";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};


const Roots = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><ScrollToTop /> <Accueil /></>} />
                <Route path="/products/:category" element={<><ScrollToTop /> <ListProducts /></>} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/productdetails/:id" element={<><ScrollToTop />  <Product /></>} />
                <Route path="/cart" element={<><ScrollToTop />  <CartProducts /></>} />
                <Route path="/checkout" element={<><ScrollToTop />  <Payment /></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Roots;


