export default function Shop() {
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

                <div className="page__title align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">our products</h3>
                                    <div className="page_title__bread-crumb">
                                        <nav>
                                            <nav className="breadcrumb-trail breadcrumbs">
                                                <ul className="breadcrumb-menu">
                                                    <li className="breadcrumb-trail">
                                                        <a href="index.html"><span>Home</span></a>
                                                    </li>
                                                    <li className="trail-item">
                                                        <span>Products</span>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </nav>
                                    </div>
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
                                                        <input type="text" placeholder="Search..."/>
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
                                        <ul className="product-catagory_list">
                                            <li>
                                                <a href="#">Cardio Therapy</a>
                                                <a href="#">(07)</a>
                                            </li>
                                            <li>
                                                <a href="#">Beauty & Spa</a>
                                                <a href="#">(12)</a>
                                            </li>
                                            <li>
                                                <a href="#">Free Hand Workout</a>
                                                <a href="#">(13)</a>
                                            </li>
                                            <li>
                                                <a href="#">Muscle Building</a>
                                                <a href="#">(10)</a>
                                            </li>
                                            <li>
                                                <a href="#">Body Supplement</a>
                                                <a href="#">(15)</a>
                                            </li>
                                            <li>
                                                <a href="#">Boxing & Fitness</a>
                                                <a href="#">(08)</a>
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
                                    <div className="product_sidebar-widget mb-30">
                                        <h5 className="classes_widget_title mb-25"><i
                                            className="far fa-circle"/> Product Tag</h5>
                                        <div className="product_sidebar-tag">
                                            <a href="#">Decor</a>
                                            <a href="#">Strenth</a>
                                            <a href="#">Trendy</a>
                                            <a href="#">art</a>
                                            <a href="#">Fitness</a>
                                            <a href="#">Workout</a>
                                            <a href="#">Body</a>
                                            <a href="#">Feature</a>
                                            <a href="#">Modern</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="product-meta mb-20">
                                    <div className="search_result">Showing 1–12 of 19 results</div>
                                    <div className="selection">
                                        <select name="Short by popularity" id="transport"

                                        >
                                            <option value="01">Short by popularity</option>
                                            <option value="01">Fitness</option>
                                            <option value="02">Swimming</option>
                                            <option value="03">Stick</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="product">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-5.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-5.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                        <div className="sale-tag">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Hand
                                                                Dumbell</a></h5>
                                                            <span className="product_price">$508.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-6.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-6.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Fitness
                                                                Grip</a></h5>
                                                            <span className="product_price">$408.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-7.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-7.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                        <div className="sale-tag">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Boxing
                                                                Glove</a></h5>
                                                            <span className="product_price">$608.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-8.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-8.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"></i></a>
                                                        </div>
                                                        <div className="sale-tag">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Sport
                                                                Powder</a></h5>
                                                            <span className="product_price">$508.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-9.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-9.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Blue
                                                                Sneaker</a></h5>
                                                            <span className="product_price">$408.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-10.jpg"
                                                            className="img-fluid" alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-10.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                        <div className="sale-tag">
                                                            <span className="new">new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Summer
                                                                Short</a></h5>
                                                            <span className="product_price">$608.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-5.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-5.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                        <div className="sale-tag">
                                                            <span className="new">sold</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Hand
                                                                Dumbell</a></h5>
                                                            <span className="product_price">$508.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-6.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"/></a>
                                                            <a href="assets/img/product/product-6.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Fitness
                                                                Grip</a></h5>
                                                            <span className="product_price">$408.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-7.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"></i></a>
                                                            <a href="assets/img/product/product-7.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"/></a>
                                                            <a href="#"><i className="far fa-exchange"/></a>
                                                        </div>
                                                        <div className="sale-tag">
                                                            <span className="new">sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Boxing
                                                                Glove</a></h5>
                                                            <span className="product_price">$608.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html"
                                                               className="tp-btn-round-product">buy now <i
                                                                className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-item mb-40">
                                                <div className="prouct-wrapper">
                                                    <div className="product_thum product_thum-new mb-30">
                                                        <div className="fix"><a href="shop-details.html"><img
                                                            src="assets/img/product/product-8.jpg" className="img-fluid"
                                                            alt="product-img"/></a></div>
                                                        <div className="product-item-action">
                                                            <a href="#"><i className="far fa-heart"></i></a>
                                                            <a href="assets/img/product/product-8.jpg"
                                                               className="image-popups"><i
                                                                className="fas fa-compress"></i></a>
                                                            <a href="#"><i className="far fa-exchange"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-info">
                                                            <h5 className="product_name"><a href="shop-details.html">Sport
                                                                Powder</a></h5>
                                                            <span className="product_price">$608.00</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a href="shop-details.html" className="tp-btn-round-product">buy now <i className="fal fa-chevron-double-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-40">
                                    <div className="col-12">
                                        <div className="basic-pagination-two mt-10 wow fadeInUp" data-wow-delay=".5s" >
                                            <ul>
                                                <li>
                                                    <a href="shop.html"><span aria-current="page" className="page-numbers current">1</span></a>
                                                </li>
                                                <li><a className="page-numbers" href="shop.html">2</a></li>
                                                <li><a className="next page-numbers" href="shop.html">
                                                    <i className="fal fa-long-arrow-right"/>
                                                </a>
                                                </li>
                                            </ul>
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