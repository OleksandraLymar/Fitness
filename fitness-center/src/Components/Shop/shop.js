export default function Shop() {
    return (
        <section className="about-section text-center" id="shop">
            <body>
            <div id="preloader">
                <div className="preloader">
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>

            <header className="top-nav">
                <div className="top-address d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-7 col-xl-5 col-lg-4 col-md-3">
                                <div className="top-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-7 col-lg-8 col-md-9">
                                <div className="topbar-info">
                                    <div className="contact-item">
                                        <i className="flaticon-pin"/>
                                        <div className="content">
                                            <p>Our Location</p>
                                            <a href="https://www.google.com/maps/search/25%2F7+Barden,+London/@51.5287718,-0.2416803,11z/data=!3m1!4b1"
                                               target="blank">25/7 Barden, London</a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="flaticon-email"/>
                                        <div className="content">
                                            <p>Online Support</p>
                                            <a href="mailto:info@fetoxe2.com">info@fetoxe2.com</a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="flaticon-contact"/>
                                        <div className="content">
                                            <p>Free Contact</p>
                                            <a href="tel:02-325-562-3652">02-325-562-3652</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-area" id="header-sticky">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="topcontact-btn f-right d-none d-lg-block">
                                    <div className="contact-btn">
                                        <a href="contact.html" className="top-btn">Contact Us <i
                                            className="fal fa-chevron-double-right"/></a>
                                    </div>
                                </div>
                                <div className="menu-content">
                                    <div className="top-logo d-lg-none">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                    </div>
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><a href="index.html">Home </a></li>
                                                <li><a href="about.html">About </a></li>
                                                <li><a href="about.html">Pages <i className="fal fa-plus dropdown-icon"/></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="classes.html">Classes</a></li>
                                                        <li><a href="classes-details.html">Classes Details</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                        <li><a href="price.html">Pricing Plan</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html" className="active">Shop <i className="fal fa-plus dropdown-icon"/></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="shop.html" className="active">Shop </a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="protfolio.html">Portfolio <i className="fal fa-plus dropdown-icon"/></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="protfolio.html">Portfolio </a></li>
                                                        <li><a href="protfolio-details.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">Blog<i className="fal fa-plus dropdown-icon"/></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog.html">Blog </a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact </a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="side-menu-icon d-lg-none text-end">
                                        <a href="javascript:void(0)" className="info-toggle-btn f-right sidebar-toggle-btn"><i className="fal fa-bars"/></a>
                                    </div>
                                    <div className="header-action-btn f-right d-none d-lg-block">
                                        <a href="javascript:void(0)" data-bs-toggle="modal" className="search" data-bs-target="#search-modal"><i className="far fa-search"/></a>
                                        <a href="cart.html"><i className="fas fa-shopping-basket"/>
                                            <span>0</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="sidebar__area">
                <div className="sidebar__wrapper">
                    <div className="sidebar__close">
                        <button className="sidebar__close-btn" id="sidebar__close-btn">
                            <i className="fal fa-times"/>
                        </button>
                    </div>
                    <div className="sidebar__content">
                        <div className="sidebar__logo mb-40">
                            <a href="index.html">
                                <img src="assets/img/logo/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="sidebar__search mb-25">
                            <form action="#">
                                <input type="text" placeholder="What are you searching for?"/>
                                    <button type="submit"><i className="far fa-search"/></button>
                            </form>
                        </div>
                        <div className="mobile-menu fix"/>
                        <div className="sidebar__contact mt-30 mb-20">
                            <h4>Contact Info</h4>
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div className="sidebar__contact-icon mr-15">
                                        <i className="fal fa-map-marker-alt"/>
                                    </div>
                                    <div className="sidebar__contact-text">
                                        <a target="_blank" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A, Mirnada City Tower, NYC</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="sidebar__contact-icon mr-15">
                                        <i className="far fa-phone"/>
                                    </div>
                                    <div className="sidebar__contact-text">
                                        <a href="tel:+012-345-6789">088889797697</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="sidebar__contact-icon mr-15">
                                        <i className="fal fa-envelope"/>
                                    </div>
                                    <div className="sidebar__contact-text">
                                        <a href="mailto:support@gmail.com">support@mail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar__social">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"/></a></li>
                                <li><a href="#"><i className="fab fa-twitter"/></a></li>
                                <li><a href="#"><i className="fab fa-youtube"/></a></li>
                                <li><a href="#"><i className="fab fa-linkedin"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body-overlay"/>

            <main>

                <div className="page__title align-items-center" data-background="assets/img/bg/breadcam-bg.jpg">
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
                                                <div className="ui-slider-range ui-corner-all ui-widget-header"
                                                     // style="left: 0%; width: 100%;"
                                                />
                                                <span tabIndex="0"
                                                      className="ui-slider-handle ui-corner-all ui-state-default"
                                                      // style="left: 0%;"
                                                /><span tabIndex="0"
                                                                                     className="ui-slider-handle ui-corner-all ui-state-default"
                                                                                     // style="left: 100%;"
                                            /></div>
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
                                                // style="display: none;"
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
                                        <div className="basic-pagination-two mt-10 wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
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

            <footer>
                <div className="footer-area" data-background="assets/img/bg/footer-bg.jpg">
                    <div className="footer_top-info">
                        <div className="container custome-container">
                            <div className="news-letter-area pt-100 pb-20">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <h5 className="news-letter-title mb-30">Subscribe Newsletter</h5>
                                    </div>
                                    <div className="col-lg-7">
                                        <form action="#">
                                            <div className="news_letter-info">
                                                <div className="news_letter_search mb-30">
                                                    <input type="text" placeholder="Email Address |"/>
                                                </div>
                                                <div className="subscrive-button mb-30">
                                                    <button type="submit" className="tp-btn-round-newsletter">Subscribe
                                                        now <i className="fal fa-chevron-double-right"/></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-80 pb-45">
                        <div className="container custome-container">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-8 col-sm-8">
                                    <div className="footer-widget fotter-col2 wow fadeInUp mb-40" data-wow-delay=".3s">
                                        <div className="footer-logo mb-25">
                                            <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                        </div>
                                        <p className="pb-30">Consequat lacinia into gravida nisie facils porto lorem
                                            ultricies vivamus maecenas one iaculis</p>
                                        <div className="footer-social">
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                            <a href="#"><i className="fab fa-linkedin-in"/></a>
                                            <a href="#"><i className="fab fa-google-plus-g"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4">
                                    <div className="footer-widget wow fadeInUp mb-40" data-wow-delay=".6s">
                                        <h5 className="fotter_widget-title mb-35">Projects</h5>
                                        <ul className="fotter_project_lists">
                                            <li><a href="protfolio-details.html">February - 2020</a></li>
                                            <li><a href="protfolio-details.html">March - 2020</a></li>
                                            <li><a href="protfolio-details.html">October - 2020</a></li>
                                            <li><a href="protfolio-details.html">November - 2020</a></li>
                                            <li><a href="protfolio-details.html">January - 2021</a></li>
                                            <li><a href="protfolio-details.html">February - 2021</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer-widget wow fadeInUp mb-40" data-wow-delay=".9s">
                                        <h5 className="fotter_widget-title mb-35">Contact Info</h5>
                                        <div className="footer__info">
                                            <ul>
                                                <li className="d-flex align-items-start pt-5 mb-20">
                                                    <div className="footer__info-icon mr-20">
                                                        <i className="fas fa-map-marker-alt"/>
                                                    </div>
                                                    <div className="footer__info-text">
                                                        <a target="_blank"
                                                           href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">25/A,
                                                            Brokelyn <br/> Square Circle, New York</a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start mb-20">
                                                    <div className="footer__info-icon mr-20">
                                                        <i className="far fa-envelope-open"/>
                                                    </div>
                                                    <div className="footer__info-text">
                                                        <span>Email:</span>
                                                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start mb-20">
                                                    <div className="footer__info-icon mr-20">
                                                        <i className="fas fa-phone-alt"/>
                                                    </div>
                                                    <div className="footer__info-text">
                                                        <span>Phone:</span>
                                                        <a href="tel:+012-345-6789">+012 (344) 678 99</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer-widget wow fadeInUp mb-40" data-wow-delay="1.3s">
                                        <h5 className="fotter_widget-title mb-35">Recent Post</h5>
                                        <div className="footer__blog">
                                            <ul>
                                                <li className="mb-25 pt-5">
                                                    <div className="footer__blog-sm d-flex align-items-center">
                                                        <div className="footer__blog-sm-thumb mr-25">
                                                            <a href="blog-details.html">
                                                                <img src="assets/img/blog/footer-blog.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className="footer__blog-sm-content">
                                                            <h6 className="footer__blog-sm-title">
                                                                <a href="blog-details.html">Malesuada bagittis introc dolor curabitur</a>
                                                            </h6>
                                                            <div className="footer__blog-sm-meta">
                                                                <p><span>25 nov 2021</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="footer__blog-sm d-flex align-items-center">
                                                        <div className="footer__blog-sm-thumb mr-20">
                                                            <a href="blog-details.html">
                                                                <img src="assets/img/blog/footer-blog2.jpg" alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className="footer__blog-sm-content">
                                                            <h6 className="footer__blog-sm-title">
                                                                <a href="blog-details.html">Introc bagittis curabitur
                                                                    malesuada dolor</a>
                                                            </h6>
                                                            <div className="footer__blog-sm-meta">
                                                                <p>25 nov 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right-area">
                        <div className="container custome-container">
                            <div className="copyright-info">
                                <div className="owner_name">
                                    <p>Copyright <a href="#">Futexo</a> ©2022. All Rights Reserved</p>
                                </div>
                                <div className="copy-right_useful_link">
                                    <a href="contact.html">Terms & Conditions</a>
                                    <a href="protfolio-details.html">. Services</a>
                                    <a href="contact.html">. Privacy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-shape fix">
                        <img src="assets/img/bg/footer-shape.png" alt=""/>
                    </div>
                    <div className="footer-shape-two fix">
                        <img src="assets/img/bg/footer-shape1.png" alt=""/>
                    </div>
                    <div className="footer-curve fix">
                        <img src="assets/img/bg/footer-curve.png" alt=""/>
                    </div>
                </div>
            </footer>
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

            {/*<script src="assets/js/vendor/jquery-3.6.0.min.js"></script>*/}
            {/*<script src="assets/js/vendor/waypoints.min.js"></script>*/}
            {/*<script src="assets/js/bootstrap.bundle.min.js"></script>*/}
            {/*<script src="assets/js/meanmenu.js"></script>*/}
            {/*<script src="assets/js/swiper-bundle.min.js"></script>*/}
            {/*<script src="assets/js/owl.carousel.min.js"></script>*/}
            {/*<script src="assets/js/magnific-popup.min.js"></script>*/}
            {/*<script src="assets/js/parallax.min.js"></script>*/}
            {/*<script src="assets/js/backToTop.js"></script>*/}
            {/*<script src="assets/js/nice-select.min.js"></script>*/}
            {/*<script src="assets/js/counterup.min.js"></script>*/}
            {/*<script src="assets/js/ui-slider-range.js"></script>*/}
            {/*<script src="assets/js/ajax-form.js"></script>*/}
            {/*<script src="assets/js/wow.min.js"></script>*/}
            {/*<script src="assets/js/isotope.pkgd.min.js"></script>*/}
            {/*<script src="assets/js/imagesloaded.pkgd.min.js"></script>*/}
            {/*<script src="assets/js/main.js"></script>*/}
            </body>
        </section>
    )
}