import "./style.css"
import {Link} from "react-router-dom";
export default function Price() {

    return (
        <section className="about-section text-center" id="price">
            <body>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <div className="body-overlay"></div>

            <main>
                <div className="page__title align-items-center bg_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">Pricing plan</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="priceing-area pt-120 pb-90">
                    <div className="container custome-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="section-wrap-two text-center">
                                    <span className="tpsub-title-two mb-15"><i className="far fa-circle"></i>Pricing plan<i
                                        className="far fa-circle"></i></span>
                                    <h3 className="section-title-two  mb-30">Comportable Pricing package and choose your
                                        best plan</h3>
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
                                            <div className="price_info pt-80"
                                                 data-background="assets/img/priceing/price-bg.png">
                                                <div className="price text-center">
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
                                                    <Link to="/contact" className="tp-btn-round">join today <i
                                                        className="fal fa-chevron-double-right"></i></Link>
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
                                            <div className="price_info pt-80"
                                                 data-background="assets/img/priceing/price-bg2.png">
                                                <div className="price price-active text-center">
                                                    <div className="inner">
                                                        <h5>$40</h5>
                                                        <p>Monthly</p>
                                                    </div>
                                                </div>
                                                <h5 className="price_type price_type-active mb-20 text-center">Premium</h5>
                                                <div className="tp_pricing-list tp_pricing-list-active pb-45">
                                                    <ul>
                                                        <li><i className="fal fa-check"></i> Personal Trainer</li>
                                                        <li><i className="fal fa-check"></i> Special Meditation</li>
                                                        <li><i className="fal fa-check"></i> Using all Tools</li>
                                                        <li><i className="fal fa-check"></i> 24 Hour Services</li>
                                                    </ul>
                                                </div>
                                                <div className="price-btn text-center pb-30">
                                                    <Link to="/contact" className="tp-btn-round servic_btn-active">join
                                                        today <i className="fal fa-chevron-double-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="price_item mb-30 wow fadeInUp" data-wow-delay="1.2s">
                                            <div className="priceing_image mb-10 bg_price"/>
                                            <div className="price_info pt-80"
                                                 data-background="assets/img/priceing/price-bg.png">
                                                <div className="price text-center">
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
                                                    <Link to="/contact" className="tp-btn-round">join today <i
                                                        className="fal fa-chevron-double-right"></i></Link>
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
                </div>
                <div className="testimonial-area-two" data-background="assets/img/testimonial/testimonial-bg2.jpg">
                    <div className="container">
                        <div className="pt-120 pb-115">
                            <div className="row justify-content-center">
                                <div className="col-xxl-10 col-xl-11 col-lg-12">
                                    <div className="testimonial-info">
                                        <p className="testimonial_description testimonial_description-two pb-50">
                                            Dear customers, here is the price list. For regular customers of our club there are discounts. You can check all the detailed information by phone / mail / personally upon arrival at the club. <br/> Together we become more athletic!
                                        </p>
                                        <h5 className="client-name client-name2">Barden Max</h5>
                                        <span className="client-degination client-degination2">Chief consultant</span>
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