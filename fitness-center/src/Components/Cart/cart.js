import "./css/style.css"
import "../Shop/js/Main.js"
import {Link} from "react-router-dom";
export default function Cart() {
    return (
        <section className="about-section text-center" id="cart">
            <body>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>

            <div className="body-overlay"></div>

            <main>
                <div className="page__title align-items-center main_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">Your Cart</h3>
                                </div>
                            </div>
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
                                            <thead className={"products-container"}>
                                                <tr>
                                                    <th className="product-thumbnail">Images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody className={"products"}>
                                                <tr>
                                                    {/*<td className="product-thumbnail"><a href="shop-details.html"><img*/}
                                                    {/*    src="assets/img/product/cart1.jpg" alt=""/></a></td>*/}
                                                    {/*<td className="product-name"><a href="shop-details.html">Water*/}
                                                    {/*    Bottle </a></td>*/}
                                                    {/*<td className="product-price"><span className="amount">$130.00</span>*/}
                                                    {/*</td>*/}
                                                    {/*<td className="product-quantity">*/}
                                                    {/*    <div className="cart-plus-minus cdcart-plus-minus"><input*/}
                                                    {/*        type="text" value="1"/>*/}
                                                    {/*        <div className="dec qtybutton">-</div>*/}
                                                    {/*        <div className="inc qtybutton">+</div></div>*/}
                                                    {/*</td>*/}
                                                    {/*<td className="product-subtotal"><span className="amount">$130.00</span>*/}
                                                    {/*</td>*/}
                                                    {/*<td className="product-remove "><a href="#"><i*/}
                                                    {/*    className="fa fa-times"></i></a></td>*/}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row justify-content-end">
                                        <div className="col-md-5">
                                            <div className="cart-page-total">
                                                <h2>Cart total</h2>
                                                <ul className="mb-20">
                                                    <li>Total <span></span></li>
                                                </ul>
                                                <div className="checkout_btn f-right">
                                                    <Link className="tp-btn-square-lg" to="/checkout"> checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            </body>

        </section>
    )
}