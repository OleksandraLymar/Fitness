import "./styles.css"
export default function Checkout() {

    return (
        <section className="about-section text-center" id="checkout">
            <body>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <div className="body-overlay"></div>

            <main>

                <div className="page__title align-items-center main_bg" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">Checkout</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-area pb-85">
                    <div className="container">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkbox-form">
                                        <h3>Billing Details</h3>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <label>Country <span className="required">*</span></label>
                                                    <input type="text" placeholder=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>First Name <span className="required">*</span></label>
                                                    <input type="text" placeholder=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Last Name <span className="required">*</span></label>
                                                    <input type="text" placeholder=""/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <label>Address <span className="required">*</span></label>
                                                    <input type="text" placeholder="Street address"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <input type="text"
                                                           placeholder="Apartment, suite, unit etc. (optional)"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <label>Town / City <span className="required">*</span></label>
                                                    <input type="text" placeholder="Town / City"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>State / County <span className="required">*</span></label>
                                                    <input type="text" placeholder=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Postcode / Zip <span className="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Email Address <span className="required">*</span></label>
                                                    <input type="email" placeholder=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Phone <span className="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="your-order mb-30 ">
                                        <h3>Your order</h3>
                                        <div className="your-order-table table-responsive">
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total"></th>
                                                </tr>
                                                </thead>

                                                <tfoot>

                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount"></span></strong>
                                                    </td>
                                                </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="payment-method">
                                            <div className="order-button-payment mt-20">
                                                <button type="submit" className="tp-btn-square-lg">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
                                                    </body>

        </section>
    )
}

