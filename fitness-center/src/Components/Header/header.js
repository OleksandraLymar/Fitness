import {Link} from "react-router-dom";

export default function About() {

    return (
        <section className="about-section text-center" id="about">
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
                                        <i className="flaticon-pin"></i>
                                        <div className="content">
                                            <p>Our Location</p>
                                            <a href="https://www.google.com/maps/search/25%2F7+Barden,+London/@51.5287718,-0.2416803,11z/data=!3m1!4b1"
                                               target="blank">25/7 Barden, London</a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="flaticon-email"></i>
                                        <div className="content">
                                            <p>Online Support</p>
                                            <a href="mailto:info@fetoxe2.com">info@fetoxe2.com</a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="flaticon-contact"></i>
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
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                                <div className="menu-content">
                                    <div className="top-logo d-lg-none">
                                        <a href="index.js"><img src="assets/img/logo/logo.png" alt=""/></a>
                                    </div>
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><Link to="/">Home </Link></li>
                                                <li><Link to="/about">About </Link></li>
                                                <li><Link to="/about">Pages<i className="fal fa-plus dropdown-icon"></i></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/classes">Classes</Link></li>
                                                        <li><Link to="/team">Team</Link></li>
                                                        <li><Link to="/price">Pricing Plan</Link></li>
                                                        <li><Link to="/cart">Cart</Link></li>
                                                        <li><Link to="/checkout">Checkout</Link></li>
                                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/shop">Shop </Link>
                                                </li>
                                                <li><Link to="/protfolio">Portfolio</Link>

                                                </li>
                                                <li><Link to="/blog">Blog</Link>
                                                </li>
                                                <li><Link to="/contact">Contact </Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="side-menu-icon d-lg-none text-end">
                                        <a href="javascript:void(0)"
                                           className="info-toggle-btn f-right sidebar-toggle-btn"><i
                                            className="fal fa-bars"></i></a>
                                    </div>
                                    <div className="header-action-btn f-right d-none d-lg-block">
                                        <a href="javascript:void(0)" data-bs-toggle="modal" className="search"
                                           data-bs-target="#search-modal"><i className="far fa-search"></i></a>
                                        <a href="cart.html"><i className="fas fa-shopping-basket"></i>
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
        </section>
    )
}