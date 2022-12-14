import "./styles.css"
export default function Footer() {
    return (
        <section className="about-section text-center" id="footer">
        <footer>
            <div className="footer-area" >
        <div className="footer_top-info">
            <div className="container custome-container">
                <div className="news-letter-area pt-100 pb-20">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <h5 className="news-letter-title mb-30">Subscribe</h5>
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
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="footer-widget fotter-col2 wow fadeInUp mb-40" data-wow-delay=".3s">
                            <div className="footer-logo mb-25">
                                <a href="index.html"> <img src="assets/img/logo/logo.png" alt=""/> </a>
                            </div>
                            <p className="pb-30">Consequat lacinia into gravida nisie facils porto lorem ultricies
                                vivamus maecenas one iaculis</p>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/FitnessFirstGER"><i className="fab fa-facebook-f"/></a>
                                <a href="https://www.youtube.com/user/FitnessFirstGER"><i className="fab fa-youtube"/></a>
                                <a href="https://www.instagram.com/fitnessfirstger/"><i className="fab fa-instagram"/></a>
                            </div>
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
                                               href="https://www.google.com/maps/place/Fitness+First+Berlin/@52.4494081,13.2768607,14z/data=!3m1!5s0x47a85a866283b6b5:0xa25540742ad40718!4m10!1m2!2m1!1sFitness+First+Berlin+-+Steglitz!3m6!1s0x47a85a868fdf4497:0xf7fc7190a6aaef59!8m2!3d52.457654!4d13.321046!15sCh9GaXRuZXNzIEZpcnN0IEJlcmxpbiAtIFN0ZWdsaXR6IgOIAQFaHyIdZml0bmVzcyBmaXJzdCBiZXJsaW4gc3RlZ2xpdHqSAQ5maXRuZXNzX2NlbnRlcuABAA!16s%2Fg%2F1tffyjlt">Berlin</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-20">
                                        <div className="footer__info-icon mr-20">
                                            <i className="far fa-envelope-open"/>
                                        </div>
                                        <div className="footer__info-text">
                                            <a href="mailto:support@gmail.com">corporate@fitnessfirst.de</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-20">
                                        <div className="footer__info-icon mr-20">
                                            <i className="fas fa-phone-alt"/>
                                        </div>
                                        <div className="footer__info-text">
                                            <a href="tel:+012-345-6789">+49 3-0-44-67-37-0</a>
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
            <p>Copyright Futexo В©2022. All Rights Reserved</p>
        </div>
        <div className="footer-shape fix">
            <img src="assets/img/bg/footer-shape.png" alt=""/>
        </div>
        <div className="footer-shape-two fix">
            <img src="assets/img/bg/footer-shape1.png" alt=""/>
        </div>
    </div>
        </footer>
        </section>
    )
}