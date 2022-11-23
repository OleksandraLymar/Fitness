export default function Team() {

    return (
        <section className="about-section text-center" id="team">
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
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                    </div>
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><a href="index.html">Home </a></li>
                                                <li><a href="about.html">About </a></li>
                                                <li><a href="about.html" className="active">Pages <i
                                                    className="fal fa-plus dropdown-icon"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="classes.html">Classes</a></li>
                                                        <li><a href="classes-details.html">Classes Details</a></li>
                                                        <li><a href="team.html" className="active">Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                        <li><a href="price.html">Pricing Plan</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Shop <i
                                                    className="fal fa-plus dropdown-icon"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="shop.html">Shop </a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="protfolio.html">Portfolio <i
                                                    className="fal fa-plus dropdown-icon"></i></a>
                                                    <ul className="sub-menu">
                                                        <li><a href="protfolio.html">Portfolio </a></li>
                                                        <li><a href="protfolio-details.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">Blog<i
                                                    className="fal fa-plus dropdown-icon"></i></a>
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
                            <i className="fal fa-times"></i>
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
                                    <button type="submit"><i className="far fa-search"></i></button>
                            </form>
                        </div>
                        <div className="mobile-menu fix"></div>
                        <div className="sidebar__contact mt-30 mb-20">
                            <h4>Contact Info</h4>
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div className="sidebar__contact-icon mr-15">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="sidebar__contact-text">
                                        <a target="_blank"
                                           href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A,
                                            Mirnada City Tower, NYC</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="sidebar__contact-icon mr-15">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="sidebar__contact-text">
                                        <a href="tel:+012-345-6789">088889797697</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="sidebar__contact-icon mr-15">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="sidebar__contact-text">
                                        <a href="mailto:support@gmail.com">support@mail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar__social">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="body-overlay"></div>


            <main>


                <div className="page__title align-items-center" data-background="assets/img/bg/breadcam-bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">our trainer</h3>
                                    <div className="page_title__bread-crumb">
                                        <nav>
                                            <nav className="breadcrumb-trail breadcrumbs">
                                                <ul className="breadcrumb-menu">
                                                    <li className="breadcrumb-trail">
                                                        <a href="index.html"><span>Home</span></a>
                                                    </li>
                                                    <li className="trail-item">
                                                        <span>Trainer</span>
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

                <div className="trainer_parea pt-120 pb-60">
                    <div className="container">
                        <div className="section-wrap-two text-center">
                            <span className="tpsub-title-two mb-15"><i className="far fa-circle"></i>Best Trainer<i
                                className="far fa-circle"></i></span>
                            <h3 className="section-title-two  mb-30">Dedicated and professional trainer ready to
                                supporting</h3>
                        </div>
                        <div className="row mt-60">
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-1.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-2.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-3.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="#">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-4.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-5.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-6.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-7.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-4.jpg"
                                                                         alt="trainer-img"/></a>
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Desert Antony</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-google"></i></a>
                                        </div>
                                    </div>
                                    <div className="trainer-btn">
                                        <a href="team-details.html" className="tp-btn-square"><i
                                            className="fal fa-chevron-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sponsor-area mb-120" data-background="assets/img/sponsor/sponsor-bg.png">
                    <div className="container custome-container">
                        <div className="swiper-container sponsor_slider-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-4.png" alt=""/></a>
                                </div>
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-1.png" alt=""/></a>
                                </div>
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-2.png" alt=""/></a>
                                </div>
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-3.png" alt=""/></a>
                                </div>
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-4.png" alt=""/></a>
                                </div>
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-3.png" alt=""/></a>
                                </div>
                                <div className="swiper-slide sponsor_item">
                                    <a href="#"><img src="assets/img/sponsor/sponsor-1.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customer_support_area pt-40  pb-85">
                    <div className="container">
                        <div className="row g-0 justify-content-start">
                            <div className="col-xxl-5 col-lg-6">
                                <div className="suppoter-image">
                                    <img src="assets/img/classes/cs-supporot.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-6">
                                <div className="supportt-info">
                                    <div className="section-wrap mb-35">
                                        <span className="tpsub-title mb-15">Customer support</span>
                                        <h3 className="section-title mb-20">Dedicated supporting team ready for help
                                            you</h3>
                                        <span className="section-border mb-30"><i className="far fa-circle"></i></span>
                                    </div>
                                    <form action="#">
                                        <div className="tp-support-form-field mb-20">
                                            <input type="text" placeholder="Full name"/>
                                        </div>
                                        <div className="tp-support-form-field mb-20">
                                            <input type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="tp-support-form-field mb-20">
                                            <textarea placeholder="Your Message"></textarea>
                                        </div>

                                        <div className="support-btn">
                                            <a href="#" className="tp-btn-round">Get Estimate<i
                                                className="fal fa-chevron-double-right"></i></a>
                                        </div>
                                    </form>
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
                                                        now <i className="fal fa-chevron-double-right"></i></button>
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
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g"></i></a>
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
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </div>
                                                    <div className="footer__info-text">
                                                        <a target="_blank"
                                                           href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">25/A,
                                                            Brokelyn <br/> Square Circle, New York</a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start mb-20">
                                                    <div className="footer__info-icon mr-20">
                                                        <i className="far fa-envelope-open"></i>
                                                    </div>
                                                    <div className="footer__info-text">
                                                        <span>Email:</span>
                                                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start mb-20">
                                                    <div className="footer__info-icon mr-20">
                                                        <i className="fas fa-phone-alt"></i>
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
                                                                <a href="blog-details.html">Malesuada bagittis introc
                                                                    dolor curabitur</a>
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
                                    <p>Copyright <a href="#">Futexo</a> В©2022. All Rights Reserved</p>
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
                    <span aria-hidden="true">Г—</span>
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
            {/*<script src="assets/js/ajax-form.js"></script>*/}
            {/*<script src="assets/js/wow.min.js"></script>*/}
            {/*<script src="assets/js/isotope.pkgd.min.js"></script>*/}
            {/*<script src="assets/js/imagesloaded.pkgd.min.js"></script>*/}
            {/*<script src="assets/js/main.js"></script>*/}
            </body>

        </section>
    )
}