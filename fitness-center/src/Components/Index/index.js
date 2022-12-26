import {Link} from "react-router-dom";
import React, { useState } from "react";
import "./styleindex.css";
import ChatBox from "../Chat/ChatBox";

export default function Index() {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
        let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(val);
        if (val < 18.5) {
            setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
        } else {
            setInfo("Obese");
        }

    };
    const resultbmi=()=>{
        alert(handleBmi());
    }

    return (

    <section className="about-section text-center" id="/">

    <main>


        <div className="hero-area fix">
            <div className="hero-slider slider__active swiper-container swiper-container-fade">
                <div className="swiper-wrapper p-relative">
                    <div className="hero-pagination"/>
                    <div className="item-slider swiper-slide">
                        <div className="slide-bg bg-1" />
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="slider-all-text">
                                        <span data-animation="fadeInUp" data-delay=".2s">Fitness Centre</span>
                                        <h2 className="hero-title" data-animation="fadeInUp" data-delay=".4s">be powerful</h2>
                                        <p className="description mt-10 mb-50" data-animation="fadeInUp" data-delay=".6s">The hardest thing is to start</p>
                                        <div className="play-option" data-animation="fadeInUp" data-delay=".8s">
                                            <a href="about.js" className="tp-btn">explore More <i className="fal fa-chevron-double-right"/> </a>
                                            <a className="video-play-button hero-play popup-video ml-30" href="https://www.youtube.com/watch?v=ZoZSp-wy8h8">
                                                <i className="fas fa-play"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hero-social-icon">
                                        <a href="https://www.facebook.com/FitnessFirstGER"target="_blank"><i className="fab fa-facebook"/></a>
                                        <a href="https://www.instagram.com/fitnessfirstger/"target="_blank"><i className="fab fa-instagram"/></a>
                                        <a href="https://www.youtube.com/user/FitnessFirstGER"target="_blank"><i className="fab fa-youtube"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tpfeatures-lists">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-3 col-md-3">
                        <div className="tp-features-item tp-features-item-border text-center mb-30 wow fadeInUp" data-wow-delay=".2s">
                            <div className="tpfeatures-icon mb-25">
                                <i className="flaticon-muscle"/>
                            </div>
                            <span>Services</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="tp-features-item tp-features-item-border item-active text-center mb-30 wow fadeInUp" data-wow-delay=".5s">
                            <div className="tpfeatures-icon mb-25">
                                <i className="flaticon-customer"/>
                            </div>
                            <span>Instructors</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="tp-features-item tp-features-item-border text-center mb-30 wow fadeInUp"
                             data-wow-delay=".8s">
                            <div className="tpfeatures-icon mb-25">
                                <i className="flaticon-apple"/>
                            </div>
                            <span>Proteins</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="tp-features-item text-center mb-30 wow fadeInUp" data-wow-delay=".10s">
                            <div className="tpfeatures-icon mb-25">
                                <i className="flaticon-lawn-mower"/>
                            </div>
                            <span>Programs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tp-about-area pb-95 pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 ">
                        <div className="about-info wow fadeInUp" data-wow-delay=".7s">
                            <div className="section-wrap">
                                <span className="tpsub-title mb-15">About us</span>
                                <h3 className="section-title mb-20">Many people fail just because they give up within a stone's throw of success.</h3>
                                <span className="section-border mb-20"><i className="far fa-circle"/></span>
                                <p className="section-description mb-40">We have been working for 25 years. We will help you to make your figure better, your mind clearer and your body more elastic.</p>
                            </div>
                            <blockquote className="ab-bquote">
                           <span>Salvation is on the move.</span>
                                <div className="quote">
                                    <img src="assets/img/about/quote.png" alt=""/>
                                </div>
                            </blockquote>
                            <div className="author-info">
                                <div className="about-btn mb-30">
                                    <Link to="/about" className="tp-btn-round">What do we do <i className="fal fa-chevron-double-right"/></Link>
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
                    <span className="tpsub-title-two mb-15"><i className="far fa-circle"/>Our services<i className="far fa-circle"/></span>
                    <h3 className="section-title-two  mb-30 white-color">Solutions for moving better and feeling a healthier</h3>
                </div>
                <div className="row mt-60">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="services-item text-center wow fadeInUp mb-30" data-wow-delay=".6s">
                            <div className="sv-inner sv-inner2">
                                <div className="services-icon">
                                    <i className="flaticon-dumbbell"/>
                                </div>
                            </div>
                            <h4 className="services-item-title services-item-title-2 mb-20"><a href="/about">Weight Lifting</a></h4>
                            <p className="mb-25">Large selection of trainers and fixtures</p>
                            <a href="protfolio-details.html" className="services-item-btn">Read More <i className="fal fa-chevron-double-right"/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="services-item text-center wow fadeInUp mb-30" data-wow-delay=".9s">
                            <div className="sv-inner sv-inner2">
                                <div className="services-icon">
                                    <i className="flaticon-muscle"/>
                                </div>
                            </div>
                            <h4 className="services-item-title services-item-title-2 mb-20"><a
                                href="protfolio-details.html">Power Yoga</a></h4>
                            <p className="mb-25">Develops the flexibility of your body</p>
                            <a href="/about" className="services-item-btn">Read More <i className="fal fa-chevron-double-right"/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="services-item text-center wow fadeInUp mb-30" data-wow-delay="1s">
                            <div className="sv-inner sv-inner2">
                                <div className="services-icon">
                                    <i className="flaticon-customer"/>
                                </div>
                            </div>
                            <h4 className="services-item-title services-item-title-2 mb-20"><a href="/about">Crosfit Tools</a></h4>
                            <p className="mb-25">We provide the best tools and training</p>
                            <a href="protfolio-details.html" className="services-item-btn">Read More <i className="fal fa-chevron-double-right"/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="services-item text-center wow fadeInUp mb-30" data-wow-delay="1.4s">
                            <div className="sv-inner sv-inner2">
                                <div className="services-icon">
                                    <i className="flaticon-lawn-mower"></i>
                                </div>
                            </div>
                            <h4 className="services-item-title services-item-title-2 mb-20"><a href="/about">Body Building</a></h4>
                            <p className="mb-25">We create your personal training and nutrition plan</p>
                            <a href="protfolio-details.html" className="services-item-btn">Read More <i className="fal fa-chevron-double-right"/></a>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item counter-item-border">
                                        <div className="counter-number">
                                            <h4><span className="counter">520</span></h4>
                                        </div>
                                        <div className="counterinfo">
                                            <i className="flaticon-support"/>
                                            <span>Expert Trainer</span>
                                        </div>
                                        <div className="counter-shape">
                                            <img src="assets/img/bg/counter-shape.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item counter-item-border">
                                        <div className="counter-number">
                                            <h4><span className="counter">2100</span></h4>
                                        </div>
                                        <div className="counterinfo">
                                            <i className="flaticon-feedback"/>
                                            <span>Client Feedback</span>
                                        </div>
                                        <div className="counter-shape">
                                            <img src="assets/img/bg/counter-shape.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item counter-item-border">
                                        <div className="counter-number">
                                            <h4><span className="counter">330</span></h4>
                                        </div>
                                        <div className="counterinfo">
                                            <i className="flaticon-kettlebells"/>
                                            <span>Total Branches</span>
                                        </div>
                                        <div className="counter-shape">
                                            <img src="assets/img/bg/counter-shape.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="counter-item">
                                        <div className="counter-number">
                                            <h4><span className="counter">740</span></h4>
                                        </div>
                                        <div className="counterinfo">
                                            <i className="flaticon-medal"/>
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

        <div className="fitness-gallery-area">
            <div className="container">
                <div className="wow fadeInUp" data-wow-delay=".2s">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-wrap">
                                <span className="tpsub-title mb-15">Our Team</span>
                                <h3 className="section-title mb-20">Professional trainers who will lead you to success in a short time</h3>
                                <span className="section-border mb-30"><i className="far fa-circle"/></span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="fitness_button">
                                <a href="/team" className="tp-btn-round">See more <i className="fal fa-chevron-double-right"/></a>
                            </div>
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
            <div className="gallery-items fix">
                <div className="container-fluid">
                    <div className="row mt-55 gx-0">
                        <div className="col-xxl-12 gx-0">
                            <div className="fitness-slider_active owl-carousel">
                                <div className="fitness-item position-relative  wow flipInY" data-wow-delay=".3s">
                                    <a href="protfolio-details.html"><img src="assets/img/protfolio/g-1.jpg" alt="" className="img-fluid"/></a>
                                    <div className="fitness-info">
                                        <div className="fitness-content">
                                            <span><a href="protfolio-details.html">Couple Fitness Workout</a></span>
                                            <p>Weight loss Program</p>
                                        </div>
                                        <div className="fitness-icon">
                                            <a href="protfolio-details.html" className="tp-btn-circle"><i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fitness-item position-relative wow flipInY" data-wow-delay=".6s">
                                    <a href="protfolio-details.html"><img src="assets/img/protfolio/g-3.jpg" alt="" className="img-fluid"/></a>
                                    <div className="fitness-info">
                                        <div className="fitness-content">
                                            <span><a href="protfolio-details.html">Couple Fitness Workout</a></span>
                                            <p>Weight loss Program</p>
                                        </div>
                                        <div className="fitness-icon">
                                            <a href="protfolio-details.html" className="tp-btn-circle"><i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fitness-item position-relative wow flipInY" data-wow-delay=".9s">
                                    <a href="protfolio-details.html"><img src="assets/img/protfolio/g-4.jpg" alt="" className="img-fluid"/></a>
                                    <div className="fitness-info">
                                        <div className="fitness-content">
                                            <span><a href="protfolio-details.html">Couple Fitness Workout</a></span>
                                            <p>Weight loss Program</p>
                                        </div>
                                        <div className="fitness-icon">
                                            <a href="protfolio-details.html" className="tp-btn-circle"><i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fitness-item position-relative wow flipInY" data-wow-delay=".9s">
                                    <a href="protfolio-details.html"><img src="assets/img/protfolio/g-5.jpg" alt="" className="img-fluid"/></a>
                                    <div className="fitness-info">
                                        <div className="fitness-content">
                                            <span><a href="protfolio-details.html">Couple Fitness Workout</a></span>
                                            <p>Weight loss Program</p>
                                        </div>
                                        <div className="fitness-icon">
                                            <a href="protfolio-details.html" className="tp-btn-circle"><i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fitness-item position-relative wow flipInY" data-wow-delay=".9s">
                                    <a href="protfolio-details.html"><img src="assets/img/protfolio/g-6.jpg" alt="" className="img-fluid"/></a>
                                    <div className="fitness-info">
                                        <div className="fitness-content">
                                            <span><a href="protfolio-details.html">Couple Fitness Workout</a></span>
                                            <p>Weight loss Program</p>
                                        </div>
                                        <div className="fitness-icon">
                                            <a href="protfolio-details.html" className="tp-btn-circle"><i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fitness-item position-relative wow flipInY" data-wow-delay=".9s">
                                    <a href="protfolio-details.html"><img src="assets/img/protfolio/g-7.jpg" alt="" className="img-fluid"/></a>
                                    <div className="fitness-info">
                                        <div className="fitness-content">
                                            <span><a href="protfolio-details.html">Couple Fitness Workout</a></span>
                                            <p>Weight loss Program</p>
                                        </div>
                                        <div className="fitness-icon">
                                            <a href="protfolio-details.html" className="tp-btn-circle"><i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="schedule-area pb-110">
            <div className="container custome-container">
                <div className="section-wrap-two text-center">
                    <span className="tpsub-title-two mb-15"><i className="far fa-circle"/>our schedule<i
                        className="far fa-circle"/></span>
                    <h3 className="section-title-two  mb-30">Check our every special schedule for winter </h3>
                </div>
            </div>
            <div className="schedule-shape-bg fix">
                <img src="assets/img/features/schedule-shape.png" className="img-fluid" alt=""/>
            </div>
            <div className="schedule-shape-one fix">
                <img src="assets/img/features/schedule-shape-1.png" className="img-fluid" alt=""/>
            </div>
            <div className="schedule-shape-two fix">
                <img src="assets/img/features/schedule-shape-2.png" className="img-fluid" alt=""/>
            </div>
            <div id="futexo-classes-area" className="mt-65">
                <div className="container custome-container">
                    <div className="futexo-classes-content">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="futexo-classes-tab">
                                    <div className="tab-content current">
                                        <div className="futexo-tab-d futexo-tab-all">
                                          <span className="schedule-icon">
                                             <i className="flaticon-muscle"></i>
                                          </span>
                                            <ul>
                                                <li><span className="time">07:00 am</span></li>
                                                <li><span className="time">10:00 am</span></li>
                                                <li><span className="time">04:00 pm</span></li>
                                                <li><span className="time">06:00 pm</span></li>
                                                <li><span className="time">08:00 pm</span></li>
                                            </ul>
                                        </div>
                                        <div className="futexo-tab-all">
                                            <h5>sunday</h5>
                                            <ul>
                                                <li><span>Boxing</span>Alena Jopsep</li>
                                                <li><span>Cardio</span>Bull Mentor</li>
                                                <li><span>Yoga</span>Fiter Jamson</li>
                                                <li><span>Cardio</span>Bull Mentor</li>
                                                <li><span>Ultragym</span>Roser Mack</li>
                                            </ul>
                                        </div>
                                        <div className="futexo-tab-all">
                                            <h5>Monday</h5>
                                            <ul>
                                                <li><span>Ultragym</span>Roser Mack</li>
                                                <li><span>Aerobics</span>Bull Mentor</li>
                                                <li></li>
                                                <li><span>Aerobics</span>Bull Mentor</li>
                                                <li><span>Boxing</span>Alena Josep</li>
                                            </ul>
                                        </div>
                                        <div className="futexo-tab-all">
                                            <h5>Tuesday</h5>
                                            <ul>
                                                <li><span>Yoga</span>Fiter Jamson</li>
                                                <li><span>Ultragym</span>Younji</li>
                                                <li><span>Yoga</span>Fiter Jamson</li>
                                                <li><span>Boxing</span>Franky</li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="futexo-tab-all">
                                            <h5>Wednesday</h5>
                                            <ul>
                                                <li><span>Aerobics</span>Madara</li>
                                                <li></li>
                                                <li><span>Ultragym</span>Fiter Jamson</li>
                                                <li></li>
                                                <li><span>Ultragym</span>Roser Mack</li>
                                            </ul>
                                        </div>
                                        <div className="futexo-tab-all">
                                            <h5>Thursday</h5>
                                            <ul>
                                                <li><span>Cardio</span>Cosmo Kito</li>
                                                <li><span>Boxing</span>Iqbal Mentor</li>
                                                <li><span>Yoga</span>Fiter Jamson</li>
                                                <li><span>Aerobics</span>Bull Mentor</li>
                                                <li><span>Ultragym</span>Roser Mack</li>
                                            </ul>
                                        </div>
                                        <div className="futexo-tab-all">
                                            <h5>Friday</h5>
                                            <ul>
                                                <li></li>
                                                <li><span>Yoga</span>Bull Mentor</li>
                                                <li><span>Cardio</span>Bull Mentor</li>
                                                <li><span>Ultragym</span>Roser Mack</li>
                                                <li><span>Yoga</span>Fiter Jamson</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="video-area p-relative bg-video" data-background="assets/img/bg/video-bg.jpg">
            <div className="container">
                <div className="video-content text-center wow fadeInUp" data-wow-delay=".3s">
                    <a className="video-play-button ab-play_btn hero-play popup-video mb-45"
                       href="https://www.youtube.com/user/FitnessFirstGER">
                        <i className="fas fa-play"/>
                    </a>
                    <h4 className="video-title">Overpower. Overtake. Overcome.</h4>
                </div>
            </div>
        </div>
        <div className="choose-us-area pt-120 pb-65">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="choose-info">
                            <div className="section-wrap mb-35">
                                <span className="tpsub-title mb-15">Why choose us</span>
                                <h3 className="section-title mb-20">The past doesn’t matter. Take today.</h3>
                                <span className="section-border mb-30"><i className="far fa-circle"/></span>
                            </div>
                            <div className="choose-list mb-40">
                                <div className="choose-icon-wrap">
                                    <div className="choose-icon">
                                        <i className="flaticon-dumbbell"/>
                                    </div>
                                </div>
                                <div className="choose-content">
                                    <h5>Cardio Exercise</h5>
                                    <p>Increases heart rate and respiration, raises oxygen</p>
                                </div>
                            </div>
                            <div className="choose-list mb-40">
                                <div className="choose-icon-wrap">
                                    <div className="choose-icon">
                                        <i className="flaticon-hand-grip"/>
                                    </div>
                                </div>
                                <div className="choose-content">
                                    <h5>Strength Exercise</h5>
                                    <p>Help build muscle and improve health</p>
                                </div>
                            </div>
                            <div className="choose-list mb-40">
                                <div className="choose-icon-wrap">
                                    <div className="choose-icon">
                                        <i className="flaticon-shirt"/>
                                    </div>
                                </div>
                                <div className="choose-content">
                                    <h5>Yoga Exercise</h5>
                                    <p>Helps to eliminate overwork and anxiety</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="company-static-area" data-background="assets/img/bg/static-bg.jpg">
            <div className="container custome-container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-7 col-lg-5 col-md-12 block_near_calculater">
                        <div className="section-wrap">
                            <span className="tpsub-title mb-15">company statics</span>
                            <h3 className="section-title mb-20">Calculate your body mass index</h3>
                            <span className="section-border mb-20"><i className="far fa-circle"/></span>
                            <p className="section-description mb-30">A simple weight-for-height ratio often used to diagnose obesity and overweight in adults.</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-12">
                        <div className=" mb-30">
                            <form action={"/"} className="calculate-form-wrapper">
                                <h3 className="tp-calculate-form-title mb-30">BMI Calculator</h3>
                                <div className="input-field mb-15">
                                    <input type="text" onChange={(e) => setHeight(e.target.value)}name={height} placeholder="Height"/>
                                </div>
                                <div className="input-field mb-15">
                                    <input type="text" onChange={(e) => setWeight(e.target.value)} name={weight} placeholder="Weight"/>
                                </div>
                                <div className="input-field">

                                        <button type="submit" onClick={resultbmi} className="calculate-btn" > Calculate now <i
                                        className="fal fa-chevron-double-right"/></button>

                                </div>
                                <h1>{bmi}</h1>
                                <h2>{info}</h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="priceing-area pt-115 pb-90">
            <div className="container custome-container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-wrap-two text-center wow fadeInUp" data-wow-delay=".3s">
                            <span className="tpsub-title-two mb-15"><i className="far fa-circle"></i>Pricing plan<i className="far fa-circle"/></span>
                            <h3 className="section-title-two  mb-30">Comportable Pricing package and choose your best
                                plan</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp_priceing">
                <div className="container custome-container mt-35">
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="price_item mb-30 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="priceing_image mb-10 bg_price"/>
                                    <div className=" price_info pt-80">
                                        <div className="price text-center" style={{ display:"block" }}>
                                            <div className="inner">
                                                <h5>$35</h5>
                                                <p>Monthly</p>
                                            </div>
                                        </div>
                                        <h5 className="price_type mb-20 text-center">Standard</h5>
                                        <div className="tp_pricing-list pb-45">
                                            <ul>
                                                <li><i className="fal fa-check"/> Personal Trainer</li>
                                                <li><i className="fal fa-check"/> Special Meditation</li>
                                                <li><i className="fal fa-check"/> Using all Tools</li>
                                                <li><i className="fal fa-check"/> 24 Hour Services</li>
                                            </ul>
                                        </div>
                                        <div className="price-btn text-center pb-30">
                                            <a href="/price" className="tp-btn-round">join today <i className="fal fa-chevron-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="price_item mb-30 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="priceing_image priceing_image-active mb-10 bg_price">
                                            <div className="price__popular">
                                                <span>popular</span>
                                            </div>
                                    </div>
                                    <div className="price_info pt-80">
                                        <div className="price price-active text-center" style={{ display:"block" }}>
                                            <div className="inner">
                                                <h5>$40</h5>
                                                <p>Monthly</p>
                                            </div>
                                        </div>
                                        <h5 className="price_type price_type-active mb-20 text-center">Premium</h5>
                                        <div className="tp_pricing-list tp_pricing-list-active pb-45">
                                            <ul>
                                                <li><i className="fal fa-check"/> Personal Trainer</li>
                                                <li><i className="fal fa-check"/> Special Meditation</li>
                                                <li><i className="fal fa-check"/> Using all Tools</li>
                                                <li><i className="fal fa-check"/> 24 Hour Services</li>
                                            </ul>
                                        </div>
                                        <div className="price-btn text-center pb-30">
                                            <a href="/price" className="tp-btn-round servic_btn-active">join
                                                today <i className="fal fa-chevron-double-right"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="price_item mb-30 wow fadeInUp" data-wow-delay="1.2s">
                                    <div className="priceing_image mb-10 bg_price"/>
                                    <div className="price_info pt-80">
                                        <div className="price text-center"style={{ display:"block" }}>
                                            <div className="inner">
                                                <h5>$45</h5>
                                                <p>Monthly</p>
                                            </div>
                                        </div>
                                        <h5 className="price_type mb-20 text-center">Platinum</h5>
                                        <div className="tp_pricing-list pb-45">
                                            <ul>
                                                <li><i className="fal fa-check"></i> Personal Trainer</li>
                                                <li><i className="fal fa-check"></i> Special Meditation</li>
                                                <li><i className="fal fa-check"></i> Using all Tools</li>
                                                <li><i className="fal fa-check"></i> 24 Hour Services</li>
                                            </ul>
                                        </div>
                                        <div className="price-btn text-center pb-30">
                                            <a href="/price" className="tp-btn-round">join today <i className="fal fa-chevron-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-shape fix">
                <img src="assets/img/priceing/price-shape1.png" alt=""/>
            </div>
            <div className="pricing-shape-two fix">
                <img src="assets/img/priceing/price-shape2.png" alt=""/>
            </div>
            <div className="pricing-shape-three fix">
                <img src="assets/img/priceing/price-shape3.png" alt=""/>
            </div>
        </div>

        <div className="product-area pt-115 pb-80" data-background="assets/img/product/product-bg.jpg">
            <div className="container custome-container">
                <div className="row justify-content-center align-items-center">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-wrap">
                                <span className="tpsub-title mb-15">our goods</span>
                                <h3 className="section-title mb-20">Quality products in our online gym store</h3>
                                <span className="section-border mb-30"><i className="far fa-circle"></i></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shop_button text-lg-end"><a href="/shopFitness" className="tp-btn-round">All products <i className="fal fa-chevron-double-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="blog-area pt-115 pb-120">
            <div className="container custome-container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-wrap-two text-center">
                            <span className="tpsub-title-two mb-15"><i className="far fa-circle"/>recent article<i className="far fa-circle"/></span>
                            <h3 className="section-title-two  mb-30">Every single update and story from our journal</h3>
                        </div>
                    </div>
                </div>
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
                                                    <h5 className="blog_title mb-20"><a href="/team">Best Coach of the Month</a></h5>
                                                    <p className="mb-40">The best coach of the month won a $500 prize! We invite you to work in our fitness center. Be sure to enter next month's competition!</p>
                                                    <div className="blog-button">
                                                        <a href="/team" className="tp-btn-round">Read More <i className="fal fa-chevron-double-right"></i></a>
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
    </section>

    )
}