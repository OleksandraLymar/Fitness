export default function Footer() {
    return (
        <section className="about-section text-center" id="footer">
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
                                        <button type="submit" className="tp-btn-round-newsletter">Subscribe now <i
                                            className="fal fa-chevron-double-right"/></button>
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
                                <a href="index.html"> <img src="assets/img/logo/logo.png" alt=""/> </a>
                            </div>
                            <p className="pb-30">Consequat lacinia into gravida nisie facils porto lorem ultricies
                                vivamus maecenas one iaculis</p>
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
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__info-text">
                                            <a target="_blank"
                                               href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">25/A,
                                                Brokelyn <br/> Square Circle, New York </a>
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
                                                    <a href="blog-details.html">Malesuada bagittis introc dolor
                                                        curabitur</a>
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
                                                    <a href="blog-details.html">Introc bagittis curabitur malesuada
                                                        dolor</a>
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
        </section>
    )
}