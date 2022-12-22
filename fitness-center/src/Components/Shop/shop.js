import "./css/style.css"
import { useEffect, useState } from "react";
import { products } from "./products.js";
import React from "react"
import "./main.js"
export default function Shop() {

    const [query, setQuery] = useState("");
    return (
        <section className="about-section text-center" id="shop">
            <body>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <div className="body-overlay"/>
            <main>

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

                <div className="product_area pt-120 pb-110">
                    <div className="container custome-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="product_sidebar">
                                    <div className="product_sidebar-widget mb-30">
                                        <div className="product_sidebar-inner">
                                            <div className="sidebar__search-2">
                                                <form action="#">
                                                    <div className="sidebar__search-input-2">
                                                        <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                                                            <button type="submit"><i className="far fa-search"/>
                                                            </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_sidebar-widget mb-30">
                                        <h5 className="classes_widget_title mb-25"><i
                                            className="far fa-circle"/> Category</h5>
                                        <ul className="product-catagory_list list">
                                            <li>
                                                Cardio Therapy
                                            </li>
                                            <li>
                                                Beauty & Spa
                                            </li>
                                            <li>
                                                Free Hand Workout
                                            </li>
                                            <li>
                                                Muscle Building
                                            </li>
                                            <li>
                                                Body Supplement
                                            </li>
                                            <li>
                                                Boxing & Fitness
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="product_sidebar-widget mb-30">
                                        <h5 className="classes_widget_title mb-25"><i
                                            className="far fa-circle"/> Price Filter</h5>
                                        <div className="price__slider">
                                            <div id="slider-range"
                                                 className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                                <div className="ui-slider-range ui-corner-all ui-widget-header"/>
                                                <span tabIndex="0"
                                                      className="ui-slider-handle ui-corner-all ui-state-default"/><span tabIndex="0"
                                                                                     className="ui-slider-handle ui-corner-all ui-state-default"/></div>
                                            <div>
                                                <form action="#">
                                                    <input type="text" id="amount" readOnly=""/>
                                                        <button type="submit" className="tp-btn-square-lg">Filter <i
                                                            className="fal fa-chevron-double-right"/></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="product">
                                    <div className="row list">
                                        {products.filter((asd) =>
                                            asd.name.toLowerCase().includes(query)
                                        ).map((product) => (
                                        <div className="col-lg-6 col-md-6 listItem" key={product.id}>

                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix image-out "><img class="shop-item-image" src={ product.img
                                                        } height="300"/></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-shopping-basket"/></a>
                                                            <a href="#" className="image-popups"><i className="fas fa-compress"/></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name shop-item-title">{product.name}</h5>
                                                            <span className="product_price shop-item-price">{product.price}$</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="#" className="add-cart tp-btn-round-product shop-item-button">buy now <i className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="cart-area pt-120 pb-110">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <form action="#">
                                                <div className="table-content table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th className="product-thumbnail">Images</th>
                                                            <th className="cart-product-name">Product</th>
                                                            <th className="product-price">Unit Price</th>
                                                            <th className="product-quantity">Quantity</th>
                                                            <th className="product-subtotal">Total</th>
                                                            <th className="product-remove">Remove</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="product-thumbnail"><a href="shop-details.html"><img
                                                                src="#" alt=""/></a></td>
                                                            <td className="product-name"> </td>
                                                            <td className="product-price"><span className="amount"> </span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="cart-plus-minus cdcart-plus-minus"><input
                                                                    type="text" value="1"/>
                                                                    <div className="dec qtybutton">-</div>
                                                                    <div className="inc qtybutton">+</div></div>
                                                            </td>
                                                            <td className="product-subtotal"><span className="amount"> </span>
                                                            </td>
                                                            <td className="product-remove "><i
                                                                className="fa fa-times"></i></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="coupon-all">
                                                            <div className="coupon">
                                                                <input id="coupon_code" className="input-text" name="coupon_code"
                                                                       value="" placeholder="Coupon code" type="text"/>
                                                                <button className="tp-btn-square-lg" name="apply_coupon"
                                                                        type="submit">Apply
                                                                    coupon
                                                                </button>
                                                            </div>
                                                            <div className="coupon2">
                                                                <button className="tp-btn-square-lg" name="update_cart"
                                                                        type="submit">Update cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <div className="col-md-5">
                                                        <div className="cart-page-total">
                                                            <h2>Cart total</h2>
                                                            <ul className="mb-20">
                                                                <li>Subtotal <span>$250.00</span></li>
                                                                <li>Total <span>$250.00</span></li>
                                                            </ul>
                                                            <div className="checkout_btn f-right">
                                                                <a className="tp-btn-square-lg" href="checkout.html"> checkout</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <div className="modal fade" id="search-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form>
                            <input type="text" placeholder="Search here..."/>
                                <button>
                                    <i className="fa fa-search"/>
                                </button>
                        </form>
                    </div>
                </div>
            </div>
            </body>
        </section>
    )
}