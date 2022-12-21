"use strict"
import "../css/style.css"
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_067pdhs', 'template_kmn66vm', form.current, 'x9febaXk0Sao-CjTn')
            .then((result) => {
                console.log(result.text);
                document.getElementById("form").reset();
                alert("Application sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

    const position = [52.461006, 13.325050]
    const position_second =[52.514847, 13.465922]
    const position_Kassel =[51.311971, 9.472164]
    const position_Frankfurt =[50.114730, 8.681191]
    const position_Dusseldorf =[51.225910, 6.781468

    ]

    return (
        <section className="about-section text-center" id="contact">

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
            <div className="body-overlay"></div>
            <main>

                <div className="page__title align-items-center bg-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__title-content text-center">
                                    <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">contact us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-map-area pb-110">
                    <div className="tp-contact-map">

                        <div className={"map"}>
                            <div className="section-wrap mb-35 block1_text_map">
                                <span className="tpsub-title mb-15">Our geolocation</span>
                                <h3 className="section-title mb-20">Our halls are located throughout Germany</h3>
                                <span className="section-border mb-30"><i className="far fa-circle"></i></span>
                            </div>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Fitness First
                                </Popup>
                            </Marker>
                            <Marker position={position_second}>
                                <Popup>
                                    Fitness First
                                </Popup>
                            </Marker>
                            <Marker position={position_Kassel}>
                                <Popup>
                                    Fitness First
                                </Popup>
                            </Marker>
                            <Marker position={position_Frankfurt}>
                                <Popup>
                                    Fitness First
                                </Popup>
                            </Marker>

                            <Marker position={position_Dusseldorf}>
                                <Popup>
                                    Fitness First
                                </Popup>
                            </Marker>
                        </MapContainer>
                        </div>
                    </div>
                </div>
                <div className="conatct_dinfo">
                    <div className="container custome-container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="tp-contact-info mb-40">
                                    <div className="sv-inner">
                                        <div className="services-icon">
                                            <i className="fas fa-map-marker-alt"/>
                                        </div>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title">Address</h4>
                                        <p>Berlin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="tp-contact-info mb-40">
                                    <div className="sv-inner">
                                        <div className="services-icon">
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title">Phone</h4>
                                        <p><a href="tel:+49304467370">+49 3-0-44-67-37-0</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="tp-contact-info mb-40">
                                    <div className="sv-inner">
                                        <div className="services-icon">
                                            <i className="fas fa-envelope-open"/>
                                        </div>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title">Email</h4>
                                        <p><a href="corporate@fitnessfirst.de">corporate@fitnessfirst.de</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-shape">
                        <img src="assets/img/bg/contact-shape.png" alt=""/>
                    </div>
                </div>
                <div className="support_area pt-35  pb-90">
                    <div className="container custome-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="suppoter-image suppoter-image-two mb-30">
                                    <img src="assets/img/classes/cs-supporot-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="support_info-two mb-35">
                                    <div className="section-wrap mb-35">
                                        <span className="tpsub-title mb-15">Customer support</span>
                                        <h3 className="section-title mb-20">Always happy to help you!</h3>
                                        <span className="section-border mb-30"><i className="far fa-circle"></i></span>
                                    </div>
                                    <form action="#" ref={form} id={"form"} onSubmit={sendEmail}>
                                        <div className="tp-support-form-field mb-20">
                                            <input type="text" placeholder="Full name" className={"_req form_input"} name="user_name" required/>
                                        </div>
                                        <div className="tp-support-form-field mb-20">
                                            <input type="email" placeholder="Email Address" className={"_req _email form_input"} name="user_email" required/>
                                        </div>
                                        <div className="tp-support-form-field mb-20">
                                            <textarea placeholder="Your Message" className={"form_input"} name="message" required/>
                                        </div>
                                        <button type={"submit"} className="tp-btn-round support-btn form__button fal fa-chevron-double-right"> Send</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-shape-2">
                        <img src="assets/img/bg/contact-shape2.png" alt=""/>
                    </div>
                </div>
            </main>
        </section>

    )
}