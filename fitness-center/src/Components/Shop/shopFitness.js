
import Main from './js/Main.js';
import Basket from './js/Basket.js';
import data from './data.js';
import { useState } from 'react';
import "./css/index.css"
import React from "react";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
function ShopFitness() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        console.log("on add")
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <section className="about-section text-center" id="shopFitness">
            <div className="page__title align-items-center bg-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-content text-center">
                                <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">our products</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-wrap mb-35 block1_text_map">
                <span className="tpsub-title mb-15">Shop list</span>
                <h3 className="section-title mb-20">We offer you our small package of goods!</h3>
                <span className="section-border mb-30"><i className="far fa-circle"></i></span>
            </div>
            <div className="App">
                <div className="block_shop">
                    <Main products={products} onAdd={onAdd}/>
                    <Basket
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />
                </div>
            </div>
        </section>
    );
}

export default ShopFitness;