import "./style/styles.css"

import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
export default function About() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <section className="about-section text-center" id="/about">
            <body>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <main>
                <div className="page__title align-items-center main_bg">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">About Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-about-area pt-120 pb-95">
                    <div className="container">
                        <div className="row">
                            <div className="about-info wow fadeInUp" data-wow-delay=".7s">
                                <div className="section-wrap">
                                    <span className="tpsub-title mb-15">About us</span>
                                    <h3 className="section-title mb-20">The best fitness club with 20 years of experience</h3>
                                    <span className="section-border mb-20"><i className="far fa-circle"></i></span>
                                    <p className="section-description mb-40">The network of halls of the best club is located in all parts of Germany! Equipped rooms with beauty and blue lighting give a boost of motivation for the entire workout. There are separate rooms for women and men, a separate after-workout visit to our spa and an invigorating drink in our "healthy drinks" bar.</p>
                                    </div>
                                    <blockquote className="ab-bquote">
                                        <span>Do you want to see results in a year? Start now! We are waiting for you at our club! Become a member now and get a 10% discount</span>
                                        <div className="quote">
                                            <img src="assets/img/about/quote.png" alt=""/>
                                        </div>
                                    </blockquote>
                                    <div className="about_play mb-25">
                                            <a className="video-play-button ab-play_btn hero-play popup-video"
                                               href="https://www.youtube.com/watch?v=eaRQF-7hhmo">
                                                <i className="fas fa-play"></i>
                                            </a>
                                            <span>Intro Video</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-bg-shape">
                        <img src="assets/img/about/about-bg-png.png" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="services-list mt-100" >
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
                                    <h4 className="services-item-title mb-20">Weight Lifting</h4>
                                    <p className="mb-25">Large selection of trainers and fixtures</p>
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
                                    <h4 className="services-item-title mb-20">Power Yoga</h4>
                                    <p className="mb-25">Develops the flexibility of your body</p>
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
                                    <h4 className="services-item-title mb-20">Crosfit Tools</h4>
                                    <p className="mb-25">We provide the best tools and training</p>
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
                                    <h4 className="services-item-title mb-20">Body Building</h4>
                                    <p className="mb-25">We create your personal training and nutrition plan</p>
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
                <div className="blog-area pt-50 pb-120">
                    <div className="container custome-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="section-wrap-two text-center">
                                    <span className="tpsub-title-two mb-15"><i className="far fa-circle"/>The creator<i
                                        className="far fa-circle"/></span>

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
                                                    <div className="blog-image"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="blog_content mt-85"
                                                         data-background="assets/img/blog/blog-bg.jpg">
                                                        <div className="blog-info">
                                                            <div className="blog__meta mb-15">
                                                                <span><i className="far fa-bookmark"></i>Creator of a network of fitness clubs</span>
                                                            </div>
                                                            <h5 className="blog_title mb-20"><a
                                                                href="blog-details.html">David Markian</a></h5>
                                                            <p className="mb-40">I am the creator of a network of fitness clubs throughout Germany! I can say with confidence that our customers will be satisfied with the service, the quality of training and gyms! Have time to relax in the spa and visit the pool. For regular customers we have bonuses. Welcome to us! With us, your figure will be perfect!</p>
                                                            <div className="blog-button">
                                                                <Link to="/contact" className="tp-btn-round">Have question? <i className="fal fa-chevron-double-right"></i></Link>
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
                                                                <span><i className="far fa-bookmark"></i>Fitness Workout</span>
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
                                                        <a href="#"><img
                                                            src="assets/img/blog/blog-3.jpg" className="img-fluid"
                                                            alt="blog-img"/></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="blog_content mt-85"
                                                         data-background="assets/img/blog/blog-bg.jpg">
                                                        <div className="blog-info">
                                                            <div className="blog__meta mb-15">
                                                                <span><i className="far fa-bookmark"></i>Fitness Workout</span>

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
                            </div>
                        </div>
                    </div>
                </div>

            </main>
                    </body>

            </section>
    )
}