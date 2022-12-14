export default function About() {
    return (
        <section className="about-section text-center" id="/about">
            <body>
            {/*<div id="preloader">*/}
            {/*    <div className="preloader">*/}
            {/*        <span></span>*/}
            {/*        <span></span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <div className="sidebar__area">
            <div className="body-overlay"></div>
                <div className="page__title align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">About Us</h3>
                                    <div className="page_title__bread-crumb">
                                        <nav>
                                            <nav className="breadcrumb-trail breadcrumbs">
                                                <ul className="breadcrumb-menu">
                                                    <li className="breadcrumb-trail">
                                                        <a href="index.html"><span>Home</span></a>
                                                    </li>
                                                    <li className="trail-item">
                                                        <span>About</span>
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
                <div className="tp-about-area pt-120 pb-95">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-image mb-30 wow fadeInUp" data-wow-delay=".4s">
                                    <img src="assets/img/about/about-1.jpg" alt="" className="img-fluid"/>
                                        <div className="about-shape">
                                            <img src="assets/img/about/about-shape.png" alt=""/>
                                                <div className="content">
                                                    <h4>25 + Year</h4>
                                                    <span>Work Experience</span>
                                                </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 ">
                                <div className="about-info wow fadeInUp" data-wow-delay=".7s">
                                    <div className="section-wrap">
                                        <span className="tpsub-title mb-15">About us</span>
                                        <h3 className="section-title mb-20">Make yourself stronger than
                                            your best excuses</h3>
                                        <span className="section-border mb-20"><i className="far fa-circle"></i></span>
                                        <p className="section-description mb-40">Duis nunc sodales conubia a laoreet
                                            aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat
                                            a pulvina integer semper ridiculus lectus con dimentum obor tise verodar
                                            capmtaso morin</p>
                                    </div>
                                    <blockquote className="ab-bquote">
                           <span>Push harder than yesterday if you want on
                              the different tomorrow.</span>
                                        <div className="quote">
                                            <img src="assets/img/about/quote.png" alt=""/>
                                        </div>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-data">
                                            <div className="author_img mb-30"><a href="#"><img
                                                src="assets/img/about/author.jpg" alt=""/></a></div>
                                            <div className="author-degination mb-30">
                                                <h4>Mark Hander</h4>
                                                <span>CEO - Fetoxe</span>
                                            </div>
                                        </div>
                                        <div className="about_play mb-25">
                                            <a className="video-play-button ab-play_btn hero-play popup-video"
                                               href="https://www.youtube.com/watch?v=ZoZSp-wy8h8">
                                                <i className="fas fa-play"></i>
                                            </a>
                                            <span>Intro Video</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-bg-shape">
                        <img src="assets/img/about/about-bg-png.png" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="services-list mt-100" data-background="assets/img/services/services-bg.jpg">
                    <div className="container custome-container">
                        <div className="section-wrap-two text-center wow fadeInUp" data-wow-delay=".2s">
                            <span className="tpsub-title-two mb-15"><i className="far fa-circle"></i>Our services<i
                                className="far fa-circle"></i></span>
                            <h3 className="section-title-two  mb-30 white-color">Solutions for moving better and feeling
                                a healthier</h3>
                        </div>
                        <div className="row mt-60">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="services-item services-item-two text-center mb-30 wow fadeInUp"
                                     data-wow-delay=".4s">
                                    <div className="sv-inner sv-inner3">
                                        <div className="services-icon">
                                            <i className="flaticon-dumbbell"></i>
                                        </div>
                                    </div>
                                    <h4 className="services-item-title mb-20"><a href="protfolio-details.html">Visit the
                                        Fitoxe</a></h4>
                                    <p className="mb-25">Duis nunc sodales conubia laoreet aliquet on nostra eleifend
                                        lacinia </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="services-item services-item-two text-center wow fadeInUp mb-30"
                                     data-wow-delay=".7s">
                                    <div className="sv-inner sv-inner3">
                                        <div className="services-icon">
                                            <i className="flaticon-customer"></i>
                                        </div>
                                    </div>
                                    <h4 className="services-item-title mb-20"><a href="protfolio-details.html">Discuss
                                        Service</a></h4>
                                    <p className="mb-25">Nibh augue dignissim volutp duisen ever corner. Malesuada
                                        rutrum</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="services-item services-item-two text-center wow fadeInUp mb-30"
                                     data-wow-delay="1s">
                                    <div className="sv-inner sv-inner3">
                                        <div className="services-icon">
                                            <i className="flaticon-lawn-mower"></i>
                                        </div>
                                    </div>
                                    <h4 className="services-item-title mb-20"><a href="protfolio-details.html">Choose
                                        Plan</a></h4>
                                    <p className="mb-25">Volutp duisen evermale suadalibero ornare ultrices nibh
                                        augue</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="services-item services-item-two text-center wow fadeInUp mb-30"
                                     data-wow-delay="1.3s">
                                    <div className="sv-inner sv-inner3">
                                        <div className="services-icon">
                                            <i className="flaticon-muscle"></i>
                                        </div>
                                    </div>
                                    <h4 className="services-item-title mb-20"><a href="protfolio-details.html">Get
                                        Fitness</a></h4>
                                    <p className="mb-25">Ultrices nibh augue, Malesuada rutrum libero ornare
                                        dignissim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tpcounter-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="counter-lists">
                                    <div className="row g-0">
                                        <div className="col-lg-3">
                                            <div className="counter-item counter-item-border">
                                                <div className="counter-number">
                                                    <h4><span className="counter">330</span></h4>
                                                </div>
                                                <div className="counterinfo">
                                                    <i className="flaticon-support"></i>
                                                    <span>Expert Trainer</span>
                                                </div>
                                                <div className="counter-shape">
                                                    <img src="assets/img/bg/counter-shape.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="counter-item counter-item-border">
                                                <div className="counter-number">
                                                    <h4><span className="counter">430</span></h4>
                                                </div>
                                                <div className="counterinfo">
                                                    <i className="flaticon-feedback"></i>
                                                    <span>Client Feedback</span>
                                                </div>
                                                <div className="counter-shape">
                                                    <img src="assets/img/bg/counter-shape.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="counter-item counter-item-border">
                                                <div className="counter-number">
                                                    <h4><span className="counter">230</span></h4>
                                                </div>
                                                <div className="counterinfo">
                                                    <i className="flaticon-kettlebells"></i>
                                                    <span>Total Branches</span>
                                                </div>
                                                <div className="counter-shape">
                                                    <img src="assets/img/bg/counter-shape.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="counter-item">
                                                <div className="counter-number">
                                                    <h4><span className="counter">540</span></h4>
                                                </div>
                                                <div className="counterinfo">
                                                    <i className="flaticon-medal"></i>
                                                    <span>Award Winning</span>
                                                </div>
                                                <div className="counter-shape">
                                                    <img src="assets/img/bg/counter-shape.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trainer-area pt-145 pb-35">
                    <div className="container  custome-container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-wrap section-wrap-s wow fadeInUp" data-wow-delay=".2s">
                                    <span className="tpsub-title mb-15">Best Trainer</span>
                                    <h3 className="section-title mb-20">Dedicated and qualified trainer ready to
                                        supporting</h3>
                                    <span className="section-border mb-30"><i className="far fa-circle"></i></span>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4">
                                <div className="trainer-more text-lg-end">
                                    <a href="team.html" className="tp-btn-round wow fadeInUp" data-wow-delay=".7s">What
                                        do we do <i className="fal fa-chevron-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fitnes-gallery-shape">
                        <img src="assets/img/protfolio/gallery-shape.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="fitnes-gallery-shape-2">
                        <img src="assets/img/protfolio/gallery-shape-2.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row mt-35">
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-30 wow fadeInUp" data-wow-delay="1s">
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
                                <div className="trainer-single mb-30 wow fadeInUp" data-wow-delay="1.3s">
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
                                <div className="trainer-single wow fadeInUp mb-30" data-wow-delay="1.7s">
                                    <div className="trainer-image">
                                        <a href="team-details.html"><img src="assets/img/trainer/trainer-3.jpg"
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
                                <div className="trainer-single wow fadeInUp mb-30" data-wow-delay="2s">
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
                <div className="blog-area pt-50 pb-120">
                    <div className="container custome-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="section-wrap-two text-center">
                                    <span className="tpsub-title-two mb-15"><i className="far fa-circle"></i>recent article<i
                                        className="far fa-circle"></i></span>
                                    <h3 className="section-title-two  mb-30">Every single update and story from our
                                        journal</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-shape-two fix">
                        <img src="assets/img/features/schedule-shape-2.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="container mt-30 custome-container">
                        <div className="row justify-content-center">
                            <div className="blog__slider-inner p-relative">
                                <div className="blog-slider_active swiper-container wow fadeInUp" data-wow-delay=".4s">
                                    <div className="blog-slider_wrapper swiper-wrapper">
                                        <div className="bolg_slider_item swiper-slide">
                                            <div className="row g-0">
                                                <div className="col-lg-6">
                                                    <div className="blog-image">
                                                        <a href="blog-details.html"><img
                                                            src="assets/img/blog/blog-1.jpg" className="img-fluid"
                                                            alt="blog-img"/></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="blog_content mt-85"
                                                         data-background="assets/img/blog/blog-bg.jpg">
                                                        <div className="blog-info">
                                                            <div className="blog__meta mb-15">
                                                                <span><a href="#"><i className="far fa-bookmark"></i>Fitness Workout</a></span>
                                                                <span><a href="#"><i className="far fa-comments"></i> 02 Comment</a></span>
                                                            </div>
                                                            <h5 className="blog_title mb-20"><a
                                                                href="blog-details.html">Risus purus namien parturient
                                                                accumsan cacus pulvinar magna.</a></h5>
                                                            <p className="mb-40">Tincidunt litora eget pulvinar
                                                                fringilla rhoncus cuirae tristique, tortor orci Etiam
                                                                auctor torquent vel tortor porta class natoque est
                                                                luctus at rutrum ipsum porttitor viverra in curabitur
                                                                conubia non vivamus hymenaeos enim suscipit.</p>
                                                            <div className="blog-button">
                                                                <a href="blog-details.html" className="tp-btn-round">Read
                                                                    More <i className="fal fa-chevron-double-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bolg_slider_item swiper-slide">
                                            <div className="row g-0">
                                                <div className="col-lg-6">
                                                    <div className="blog-image">
                                                        <a href="blog-details.html"><img
                                                            src="assets/img/blog/blog-2.jpg" className="img-fluid"
                                                            alt="blog-img"/></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="blog_content mt-85"
                                                         data-background="assets/img/blog/blog-bg.jpg">
                                                        <div className="blog-info">
                                                            <div className="blog__meta mb-15">
                                                                <span><a href="#"><i className="far fa-bookmark"></i>Fitness Workout</a></span>
                                                                <span><a href="#"><i className="far fa-comments"></i> 02 Comment</a></span>
                                                            </div>
                                                            <h5 className="blog_title mb-20"><a
                                                                href="blog-details.html">Parturient accumsan cacus
                                                                pulvinar magna, Risus purus namien.</a></h5>
                                                            <p className="mb-40">Fringilla rhoncus cuirae tristique
                                                                tincidunt litora eget pulvinar, tortor orci Etiam auctor
                                                                torquent vel tortor porta class natoque est luctus at
                                                                rutrum ipsum porttitor viverra in curabitur conubia non
                                                                vivamus hymenaeos enim suscipit.</p>
                                                            <div className="blog-button">
                                                                <a href="blog-details.html" className="tp-btn-round">Read
                                                                    More <i className="fal fa-chevron-double-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bolg_slider_item swiper-slide">
                                            <div className="row g-0">
                                                <div className="col-lg-6">
                                                    <div className="blog-image">
                                                        <a href="blog-details.html"><img
                                                            src="assets/img/blog/blog-3.jpg" className="img-fluid"
                                                            alt="blog-img"/></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="blog_content mt-85">
                                                        <div className="blog-info">
                                                            <div className="blog__meta mb-15">
                                                                <span><a href="#"><i className="far fa-bookmark"></i>Fitness Workout</a></span>
                                                                <span><a href="#"><i className="far fa-comments"></i> 02 Comment</a></span>
                                                            </div>
                                                            <h5 className="blog_title mb-20">
                                                                <a href="blog-details.html">Going to the gym for the
                                                                    first time doesnвЂ™t need to be daunting</a>
                                                            </h5>
                                                            <p className="mb-40">Etiam auctor torquent vel tortor porta
                                                                class natoque est luctus at rutrum ipsum porttitor
                                                                viverra in curabitur conubia non vivamus hymenaeos enim
                                                                suscipit. Fringilla rhoncus cuirae tristique tincidunt
                                                                litora eget pulvinar orci.</p>
                                                            <div className="blog-button">
                                                                <a href="blog-details.html" className="tp-btn-round">Read
                                                                    More <i className="fal fa-chevron-double-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-prev bs-button bs-button-prev"><i
                                    className="far fa-long-arrow-left"></i></div>
                                <div className="swiper-button-next bs-button bs-button-next"><i
                                    className="far fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </section>
    )
}