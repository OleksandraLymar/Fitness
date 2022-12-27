import "./css/style.css"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
export default function Team() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <section className="about-section text-center" id="team">
            <body>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <main>
                <div className="page__title align-items-center main_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">our trainer</h3>
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
                                    <div className="trainer-image trainer-image-one"/>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name">Taylor Antony</h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/fedorenko_vladyslav/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image trainer-image-two"/>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Walker Adam</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/zhevlakov_dmitry/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image trainer-image-3"/>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="#">Harris Makr</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/vyhonskiy_v/"><i className="fab fa-instagram"></i></a>
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
                                    <div className="trainer-image trainer-image-4"/>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Davis Jack</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/trainer_vip/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image trainer-image-5">
                                    </div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name">Jenna Caroline</h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/juli_fit_/?hl=en"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image trainer-image-6"></div>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Lora Koskow</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/usmanovakate/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image trainer-image-7"/>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Melanie Lifa</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/alvina_personal_trainer/?hl=en"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-md-6">
                                <div className="trainer-single mb-60">
                                    <div className="trainer-image trainer-image-8"/>
                                    <div className="trainer-info">
                                        <h5 className="trainer-name"><a href="team-details.html">Hana Jacob</a></h5>
                                        <p className="mb-20">Fitness Trainer</p>
                                        <div className="trainer-soicial-icon">
                                            <a href="https://www.instagram.com/juli_fit_/?hl=en"><i className="fab fa-instagram"></i></a>
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